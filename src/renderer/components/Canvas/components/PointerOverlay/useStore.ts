import React from 'react';

import {
    tabCanvasPointerSelector,
    tabCanvasScaleSelector,
    tabsSlice,
    toolbarToolSelector,
    useAppDispatch,
    useAppSelector,
} from '../../../../store';
import type {SetPointer, UpdatePointer} from '../../types';

export const useStore = () => {
    const dispatch = useAppDispatch();
    const scale = useAppSelector(tabCanvasScaleSelector);
    const tool = useAppSelector(toolbarToolSelector);
    const pointer = useAppSelector(tabCanvasPointerSelector);

    const setPointer: SetPointer = React.useCallback(
        (nextPointer) => {
            dispatch(tabsSlice.actions.setCanvasPointer({pointer: nextPointer}));
        },
        [dispatch],
    );

    const updatePointer: UpdatePointer = React.useCallback(
        (updates) => {
            dispatch(tabsSlice.actions.updateCanvasPointer({updates}));
        },
        [dispatch],
    );

    return {scale, tool, pointer, setPointer, updatePointer};
};
