import type {RootState} from '../../store';

export const toolSelector = (state: RootState) => {
    return state.toolbar.tool;
};
