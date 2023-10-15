import type {BaseTool, PointerReduxState} from '../store';

export const getScaledToolRect = (scale: number, tool: BaseTool): BaseTool['rect'] => {
    return {w: tool.rect.w * scale, h: tool.rect.h * scale};
};

export const isPointersEqual = (
    position1?: PointerReduxState['position'],
    position2?: PointerReduxState['position'],
) => {
    if (!position1 || !position2) {
        return false;
    }

    return position1.x === position2.x && position1.y === position2.y;
};
