import type {RootState} from '../../store';

export const canvasPointerSelector = (state: RootState) => {
    return state.canvas.pointer;
};

export const canvasScaleSelector = (state: RootState) => {
    return state.canvas.scale;
};

export const canvasRectSelector = (state: RootState) => {
    return state.canvas.rect;
};
