import type {RootState} from '../../store';

export const pointerSelector = (state: RootState) => {
    return state.pointer;
};
