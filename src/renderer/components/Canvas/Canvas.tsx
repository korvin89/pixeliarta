import React from 'react';

import {CanvasItem, Grid, PointerOverlay} from './components';
import {useStore} from './useStore';
import {useStyle} from './useStyle';

export const Component = () => {
    const {scale, rect} = useStore();
    const style = useStyle({scale, rect});
    const [containerRect, setRect] = React.useState<DOMRect | undefined>();

    const callbackRef = React.useCallback((node: HTMLDivElement) => {
        setRect(node.getBoundingClientRect());
    }, []);

    return (
        <div ref={callbackRef} style={style}>
            <PointerOverlay />
            {containerRect?.width && containerRect?.height && (
                <React.Fragment>
                    <CanvasItem
                        width={Math.ceil(containerRect.width)}
                        height={Math.ceil(containerRect.height)}
                    />
                    <Grid
                        canvasWidth={Math.ceil(containerRect.width)}
                        canvasHeight={Math.ceil(containerRect.height)}
                        strokeWidth={0.2}
                        cellSize={scale}
                        stroke="rgba(255, 255, 255, 0.2)"
                    />
                </React.Fragment>
            )}
        </div>
    );
};

export const Canvas = React.memo(Component);
