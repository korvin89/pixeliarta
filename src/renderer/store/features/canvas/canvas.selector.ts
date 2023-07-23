import type {RootState} from '../../store';

export const canvasScaleSelector = (state: RootState) => {
    return state.canvas.scale;
};

export const canvasRectSelector = (state: RootState) => {
    return state.canvas.rect;
};

export const canvasLayersSelector = (state: RootState) => {
    return state.canvas.layers;
};

export const canvasPointerSelector = (state: RootState) => {
    return state.canvas.pointer;
};
