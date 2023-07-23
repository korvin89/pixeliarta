import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import merge from 'lodash/merge';

import type {Rect} from '../types';

/** Pointer's data. It is assumed that the pointer is snapped to the grid */
export type CanvasPointer = {
    x: number;
    y: number;
    pressed: boolean;
};

export type CanvasLayerConfig = {
    id: string;
};

export type CanvasReduxState = {
    scale: number;
    rect: Rect;
    layers: CanvasLayerConfig[];
    pointer?: CanvasPointer;
};

const initialState: CanvasReduxState = {
    scale: 25,
    rect: {w: 16, h: 16},
    layers: [{id: 'layer_1'}],
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
        setLayers: (state, action: PayloadAction<{layers: CanvasLayerConfig[]}>) => {
            state.layers = action.payload.layers;
        },
        setPointer: (state, action: PayloadAction<{pointer?: CanvasPointer}>) => {
            state.pointer = action.payload.pointer;
        },
        updatePointer: (state, action: PayloadAction<{updates?: Partial<CanvasPointer>}>) => {
            if (state.pointer) {
                const updatedPointer = merge({}, state.pointer, action.payload.updates);
                state.pointer = updatedPointer;
            }
        },
    },
});
