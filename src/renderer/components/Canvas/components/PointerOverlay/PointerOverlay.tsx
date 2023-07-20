import React from 'react';

import throttle from 'lodash/throttle';

import {getScaledToolRect} from '../../../utils';

import {useStore} from './useStore';
import {useStyle} from './useStyle';

export const PointerOverlay = () => {
    const {scale, tool, setPointer} = useStore();
    const scaledToolRect = getScaledToolRect(scale, tool);
    const wDelta = scaledToolRect.w * 2;
    const hDelta = scaledToolRect.h * 2;
    const style = useStyle({wDelta, hDelta});
    const [rect, setRect] = React.useState<DOMRect | undefined>();

    const handleMouseMove = React.useMemo(() => {
        return throttle<React.MouseEventHandler<HTMLDivElement>>((e) => {
            if (rect) {
                const {scrollX, scrollY} = window;
                const x = e.clientX + scrollX - rect.left - wDelta / 2;
                const y = e.clientY + scrollY - rect.top - hDelta / 2;
                setPointer({x, y});
            }
        }, 50);
    }, [wDelta, hDelta, rect, setPointer]);

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
