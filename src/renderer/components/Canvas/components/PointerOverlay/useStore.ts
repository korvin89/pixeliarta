import React from 'react';

import {
    canvasPointerSelector,
    canvasScaleSelector,
    canvasSlice,
    toolbarToolSelector,
    useAppDispatch,
    useAppSelector,
} from '../../../../store';
import type {SetPointer, UpdatePointer} from '../../types';

export const useStore = () => {
    const dispatch = useAppDispatch();
    const scale = useAppSelector(canvasScaleSelector);
    const tool = useAppSelector(toolbarToolSelector);
    const pointer = useAppSelector(canvasPointerSelector);

    const setPointer: SetPointer = React.useCallback(
        (nextPointer) => {
            dispatch(canvasSlice.actions.setPointer({pointer: nextPointer}));
        },
        [dispatch],
    );

    const updatePointer: UpdatePointer = React.useCallback(
        (updates) => {
            dispatch(canvasSlice.actions.updatePointer({updates}));
        },
        [dispatch],
    );

    return {scale, tool, pointer, setPointer, updatePointer};
};
