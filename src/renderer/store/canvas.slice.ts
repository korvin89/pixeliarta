import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type CanvasReduxState = {
    pointer?: {
        x: number;
        y: number;
    };
};

const initialState: CanvasReduxState = {};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setPointer: (state, action: PayloadAction<CanvasReduxState['pointer']>) => {
            state.pointer = action.payload;
        },
    },
});

export const {setPointer} = canvasSlice.actions;
