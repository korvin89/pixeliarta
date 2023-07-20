import type {BaseTool} from '../store';

export const getScaledToolRect = (scale: number, tool: BaseTool): BaseTool['rect'] => {
    return {w: tool.rect.w * scale, h: tool.rect.h * scale};
};
