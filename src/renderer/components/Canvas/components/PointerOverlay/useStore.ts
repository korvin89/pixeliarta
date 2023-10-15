import React from 'react';

import {
    pointerSelector,
    pointerSlice,
    tabCanvasScaleSelector,
    toolbarToolSelector,
    useAppDispatch,
    useAppSelector,
} from '../../../../store';
import type {SetPointer} from '../../types';

export const useStore = () => {
    const dispatch = useAppDispatch();
    const scale = useAppSelector(tabCanvasScaleSelector);
    const tool = useAppSelector(toolbarToolSelector);
    const pointer = useAppSelector(pointerSelector);

    const setPointer: SetPointer = React.useCallback(
        (nextPointer) => {
            dispatch(pointerSlice.actions.setPointer({pointer: nextPointer}));
        },
        [dispatch],
    );

    return {scale, tool, pointer, setPointer};
};
