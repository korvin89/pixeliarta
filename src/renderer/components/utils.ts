import type {BaseTool, CanvasPointer} from '../store';

export const getScaledToolRect = (scale: number, tool: BaseTool): BaseTool['rect'] => {
    return {w: tool.rect.w * scale, h: tool.rect.h * scale};
};

export const isPointersEqual = (pointer1?: CanvasPointer, pointer2?: CanvasPointer) => {
    if (!pointer1 || !pointer2) {
        return false;
    }

    return pointer1.x === pointer2.x && pointer1.y === pointer2.y;
};
