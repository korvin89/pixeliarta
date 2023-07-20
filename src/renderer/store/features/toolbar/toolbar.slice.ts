import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {Rect} from '../types';

export type BaseTool = {
    /** Occupied space on canvas in px */
    rect: Rect;
};

export type ToolbarReduxState = {
    tool: BaseTool;
};

const initialState: ToolbarReduxState = {
    tool: {
        rect: {w: 2, h: 2},
    },
};

export const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState,
    reducers: {
        setTool: (state, action: PayloadAction<{tool: BaseTool}>) => {
            state.tool = action.payload.tool;
        },
    },
});
