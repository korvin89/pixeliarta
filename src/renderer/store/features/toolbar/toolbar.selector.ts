import type {RootState} from '../../store';

export const toolbarColorSelector = (state: RootState) => {
    return state.toolbar.color;
};

export const toolbarToolSelector = (state: RootState) => {
    return state.toolbar.tool;
};
