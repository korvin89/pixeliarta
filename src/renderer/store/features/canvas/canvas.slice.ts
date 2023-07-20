import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type CanvasPointer = {
    x: number;
    y: number;
};

export type CanvasReduxState = {
    scale: number;
    pointer?: CanvasPointer;
};

const initialState: CanvasReduxState = {
    scale: 10,
};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setScale: (state, action: PayloadAction<{scale: number}>) => {
            state.scale = action.payload.scale;
        },
        setPointer: (state, action: PayloadAction<{pointer?: CanvasPointer}>) => {
            state.pointer = action.payload.pointer;
        },
    },
});
