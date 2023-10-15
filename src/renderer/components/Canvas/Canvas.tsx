import React from 'react';

import {CanvasLayer, CanvasPointer, Grid, PointerOverlay} from './components';
import {useStore} from './useStore';
import {useStyle} from './useStyle';

type Props = {
    activeTabId: string;
};

export const Component = ({activeTabId}: Props) => {
    const {canvas} = useStore();
    const style = useStyle({scale: canvas.scale, rect: canvas.rect});
    const [containerRect, setRect] = React.useState<DOMRect | undefined>();

    const callbackRef = React.useCallback((node: HTMLDivElement) => {
        setRect(node.getBoundingClientRect());
    }, []);

    return (
        <div ref={callbackRef} style={style}>
            {containerRect?.width && containerRect?.height && (
                <React.Fragment>
                    <CanvasPointer
                        width={Math.ceil(containerRect.width)}
                        height={Math.ceil(containerRect.height)}
                    />
                    {canvas.layers.map((layer, i) => (
                        <CanvasLayer
                            {...layer}
                            key={`layer-${activeTabId}-${i}`}
                            width={Math.ceil(containerRect.width)}
                            height={Math.ceil(containerRect.height)}
                        />
                    ))}
                    <Grid
                        canvasWidth={Math.ceil(containerRect.width)}
                        canvasHeight={Math.ceil(containerRect.height)}
                        strokeWidth={0.2}
                        cellSize={canvas.scale}
                        stroke="rgba(255, 255, 255, 0.2)"
                    />
                </React.Fragment>
            )}
            <PointerOverlay />
        </div>
    );
};

export const Canvas = React.memo(Component);
