import React from 'react';

import {canvasPointerSelector, canvasSlice, useAppDispatch, useAppSelector} from '../../store';

import {CanvasView} from './CanvasView';
import type {SetPointer} from './types';

export const Canvas = () => {
    const dispatch = useAppDispatch();
    const pointer = useAppSelector(canvasPointerSelector);

    const setPointer: SetPointer = React.useCallback(
        (nextPointer) => {
            dispatch(canvasSlice.actions.setPointer({pointer: nextPointer}));
        },
        [dispatch],
    );

    return <CanvasView setPointer={setPointer} pointer={pointer} />;
};
