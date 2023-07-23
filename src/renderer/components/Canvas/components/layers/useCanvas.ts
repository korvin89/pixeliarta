import React from 'react';

import type {BaseTool, CanvasPointer} from '../../../../store';

type Props = {
    scale: number;
    canvas: HTMLCanvasElement | null;
};

type DrawArgs = {
    color: string;
    tool: BaseTool;
    pointer?: CanvasPointer;
};

export const useCanvas = (props: Props) => {
    const {scale, canvas} = props;
    const ctx = React.useMemo(() => canvas?.getContext('2d'), [canvas]);

    const clear = React.useCallback(() => {
        if (!canvas || !ctx) {
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, [canvas, ctx]);

    const draw = React.useCallback(
        (args: DrawArgs) => {
            const {color, tool, pointer} = args;

            if (!ctx || !pointer) {
                return;
            }

            const w = tool.rect.w * scale;
            const h = tool.rect.h * scale;

            ctx.fillStyle = color;
            ctx.fillRect(pointer.x, pointer.y, w, h);
        },
        [scale, ctx],
    );

    return {clear, draw};
};
