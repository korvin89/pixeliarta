import React from 'react';

import {
    canvasScaleSelector,
    canvasSlice,
    toolSelector,
    useAppDispatch,
    useAppSelector,
} from '../../../../store';
import type {SetPointer} from '../../types';

export const useStore = () => {
    const dispatch = useAppDispatch();
    const scale = useAppSelector(canvasScaleSelector);
    const tool = useAppSelector(toolSelector);

    const setPointer: SetPointer = React.useCallback(
        (nextPointer) => {
            dispatch(canvasSlice.actions.setPointer({pointer: nextPointer}));
        },
        [dispatch],
    );

    return {scale, tool, setPointer};
};
