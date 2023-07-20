import type {RootState} from '../../store';

export const canvasPointerSelector = (state: RootState) => {
    return state.canvas.pointer;
};

export const scaleSelector = (state: RootState) => {
    return state.canvas.scale;
};
