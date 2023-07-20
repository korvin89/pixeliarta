import React from 'react';

import {canvasSlice, scaleSelector, useAppDispatch, useAppSelector} from '../../../../store';
import type {SetPointer} from '../../types';

export const useStore = () => {
    const dispatch = useAppDispatch();
    const scale = useAppSelector(scaleSelector);

    const setPointer: SetPointer = React.useCallback(
        (nextPointer) => {
            dispatch(canvasSlice.actions.setPointer({pointer: nextPointer}));
        },
        [dispatch],
    );

    return {scale, setPointer};
};
