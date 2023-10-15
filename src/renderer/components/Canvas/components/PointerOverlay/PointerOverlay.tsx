import React from 'react';

import throttle from 'lodash/throttle';

import type {BaseTool, PointerReduxState} from '../../../../store';
import {getScaledToolRect, isPointersEqual} from '../../../utils';

import {useStore} from './useStore';
import {useStyle} from './useStyle';

const shapePointer = (args: {
    e: React.MouseEvent<HTMLDivElement, MouseEvent>;
    containerRect: DOMRect;
    toolRect: BaseTool['rect'];
    deltaW: number;
    deltaH: number;
    scale: number;
    pressed: boolean;
}): PointerReduxState => {
    const {e, containerRect, toolRect, deltaW, deltaH, scale, pressed} = args;
    const {scrollX, scrollY} = window;
    let x = e.clientX + scrollX - containerRect.left - deltaW / 2;
    let y = e.clientY + scrollY - containerRect.top - deltaH / 2;

    if (toolRect.w > 1) {
        const offsetX = (toolRect.w * scale) / 2;
        x = Math.round((x - offsetX) / scale) * scale;
    } else {
        x = Math.floor(x / scale) * scale;
    }

    if (toolRect.h > 1) {
        const offsetY = (toolRect.h * scale) / 2;
        y = Math.round((y - offsetY) / scale) * scale;
    } else {
        y = Math.floor(y / scale) * scale;
    }

    return {position: {x, y}, pressed};
};

export const PointerOverlay = () => {
    const {scale, tool, pointer, setPointer} = useStore();
    const scaledToolRect = getScaledToolRect(scale, tool);
    const deltaW = scaledToolRect.w * 2;
    const deltaH = scaledToolRect.h * 2;
    const style = useStyle({deltaW, deltaH});
    const [containerRect, setContainerRect] = React.useState<DOMRect | undefined>();

    const handleMouseMove = React.useMemo(() => {
        return throttle<React.MouseEventHandler<HTMLDivElement>>(
            (e) => {
                if (containerRect) {
                    const nextPointer = shapePointer({
                        e,
                        containerRect,
                        toolRect: tool.rect,
                        deltaW,
                        deltaH,
                        scale,
                        pressed: Boolean(pointer?.pressed),
                    });

                    if (!isPointersEqual(pointer?.position, nextPointer?.position)) {
                        setPointer(nextPointer);
                    }
                }
            },
            pointer?.pressed ? 0 : 50,
        );
    }, [deltaW, deltaH, containerRect, tool, scale, pointer, setPointer]);

    const handleMouseOut = React.useCallback(() => {
        setPointer(undefined);
    }, [setPointer]);

    const handleMouseDown = React.useCallback(() => {
        if (pointer) {
            const nextPointer = {...pointer, pressed: true};
            setPointer(nextPointer);
        }
    }, [pointer, setPointer]);

    const handleMouseUp = React.useCallback(() => {
        if (pointer) {
            const nextPointer = {...pointer, pressed: false};
            setPointer(nextPointer);
        }
    }, [pointer, setPointer]);

    const callbackRef = React.useCallback((node: HTMLDivElement) => {
        setContainerRect(node.getBoundingClientRect());
    }, []);

    return (
        // TODO: a11y issue
        // eslint-disable-next-line
        <div
            ref={callbackRef}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        />
    );
};
