import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type CanvasPointer = {
    x: number;
    y: number;
};

export type CanvasReduxState = {
    pointer?: CanvasPointer;
};

const initialState: CanvasReduxState = {};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setPointer: (state, action: PayloadAction<{pointer?: CanvasPointer}>) => {
            state.pointer = action.payload.pointer;
        },
    },
});
