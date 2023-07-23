import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {Rect} from '../types';

export type BaseTool = {
    /** Occupied space on canvas in px */
    rect: Rect;
};

export type ToolbarReduxState = {
    color: string;
    tool: BaseTool;
};

const initialState: ToolbarReduxState = {
    color: 'lightgray',
    tool: {
        rect: {w: 1, h: 1},
    },
};

export const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<{color: string}>) => {
            state.color = action.payload.color;
        },
        setTool: (state, action: PayloadAction<{tool: BaseTool}>) => {
            state.tool = action.payload.tool;
        },
    },
});
