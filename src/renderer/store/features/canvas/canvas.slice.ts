import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {Rect} from '../types';

export type CanvasPointer = {
    x: number;
    y: number;
};

export type CanvasReduxState = {
    scale: number;
    rect: Rect;
    pointer?: CanvasPointer;
};

const initialState: CanvasReduxState = {
    scale: 25,
    rect: {w: 16, h: 16},
};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setScale: (state, action: PayloadAction<{scale: number}>) => {
            state.scale = action.payload.scale;
        },
        setRect: (state, action: PayloadAction<{rect: Rect}>) => {
            state.rect = action.payload.rect;
        },
        setPointer: (state, action: PayloadAction<{pointer?: CanvasPointer}>) => {
            state.pointer = action.payload.pointer;
        },
    },
});
