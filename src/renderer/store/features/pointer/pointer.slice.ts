import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type CanvasPointer = {
    pressed: boolean;
    position?: {x: number; y: number};
};

export type PointerReduxState = CanvasPointer;

const initialState: PointerReduxState = {
    pressed: false,
};

export const pointerSlice = createSlice({
    name: 'pointer',
    initialState,
    reducers: {
        setPointer: (state, action: PayloadAction<{pointer?: CanvasPointer}>) => {
            const {position, pressed = false} = action.payload.pointer || {};
            state.position = position;
            state.pressed = pressed;
        },
    },
});
