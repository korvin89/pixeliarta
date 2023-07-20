import React from 'react';

import {CanvasItem, Grid, PointerOverlay} from './components';
import {useStore} from './useStore';
import {useStyle} from './useStyle';

export const Component = () => {
    const {scale} = useStore();
    const style = useStyle({scale});
    const [rect, setRect] = React.useState<DOMRect | undefined>();

    const callbackRef = React.useCallback((node: HTMLDivElement) => {
        setRect(node.getBoundingClientRect());
    }, []);

    return (
        <div ref={callbackRef} style={style}>
            <PointerOverlay />
            {rect?.width && rect?.height && (
                <React.Fragment>
                    <CanvasItem width={Math.ceil(rect.width)} height={Math.ceil(rect.height)} />
                    <Grid
                        canvasWidth={Math.ceil(rect.width)}
                        canvasHeight={Math.ceil(rect.height)}
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
