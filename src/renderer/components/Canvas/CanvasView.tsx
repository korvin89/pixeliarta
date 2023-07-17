import React from 'react';

import throttle from 'lodash/throttle';

import type {CanvasPointer} from '../../store';
import {CanvasItem} from '../CanvasItem/CanvasItem';
import {Grid} from '../Grid/Grid';

import type {SetPointer} from './types';
import {useStyle} from './useStyle';

type Props = {
    pointer?: CanvasPointer;
    setPointer: SetPointer;
};

export const Component = (props: Props) => {
    const {pointer, setPointer} = props;
    const ref = React.useRef<HTMLDivElement>(null);
    const [rect, setRect] = React.useState<DOMRect | undefined>();
    const style = useStyle();

    const handleMouseMove = React.useCallback(
        throttle<React.MouseEventHandler<HTMLDivElement>>((e) => {
            if (rect) {
                const x = Math.floor((rect.width * (e.clientX - rect.left)) / rect.width);
                const y = Math.floor((rect.height * (e.clientY - rect.top)) / rect.height);
                setPointer({x, y});
            }
        }, 50),
        [rect, setPointer],
    );

    const handleMouseOut = React.useCallback(() => {
        setPointer(undefined);
    }, [setPointer]);

    React.useLayoutEffect(() => {
        setRect(ref.current?.getBoundingClientRect());
    }, []);

    return (
        // TODO: a11y issue
        // eslint-disable-next-line
        <div ref={ref} style={style} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
            {rect?.width && rect?.height && (
                <React.Fragment>
                    <CanvasItem
                        width={Math.ceil(rect.width)}
                        height={Math.ceil(rect.height)}
                        pointer={pointer}
                    />
                    <Grid
                        canvasWidth={Math.ceil(rect.width)}
                        canvasHeight={Math.ceil(rect.height)}
                        strokeWidth={0.2}
                        cellSize={8}
                        stroke="yellow"
                    />
                </React.Fragment>
            )}
        </div>
    );
};

export const CanvasView = React.memo(Component);
