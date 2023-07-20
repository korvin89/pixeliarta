import React from 'react';

import throttle from 'lodash/throttle';

import {useStore} from './useStore';
import {useStyle} from './useStyle';

export const PointerOverlay = () => {
    const {scale, setPointer} = useStore();
    const style = useStyle();
    const [rect, setRect] = React.useState<DOMRect | undefined>();

    const handleMouseMove = React.useMemo(() => {
        return throttle<React.MouseEventHandler<HTMLDivElement>>((e) => {
            if (rect) {
                const {scrollX, scrollY} = window;
                const x = Math.round((e.clientX + scrollX - rect.left) / scale) * scale;
                const y = Math.round((e.clientY + scrollY - rect.top) / scale) * scale;
                setPointer({x, y});
            }
        }, 50);
    }, [scale, rect, setPointer]);

    const handleMouseOut = React.useCallback(() => {
        setPointer(undefined);
    }, [setPointer]);

    const callbackRef = React.useCallback((node: HTMLDivElement) => {
        setRect(node.getBoundingClientRect());
    }, []);

    return (
        // TODO: a11y issue
        // eslint-disable-next-line
        <div
            ref={callbackRef}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
        />
    );
};
