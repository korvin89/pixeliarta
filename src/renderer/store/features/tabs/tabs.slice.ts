import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import merge from 'lodash/merge';

import type {Rect} from '../types';

/** Pointer's data. It is assumed that the pointer is snapped to the grid */
type CanvasPointer = {
    x: number;
    y: number;
    pressed: boolean;
};

type CanvasLayerConfig = {
    id: string;
};

export type TabItem = {
    id: string;
    title: string;
    canvas: {
        scale: number;
        rect: Rect;
        layers: CanvasLayerConfig[];
        pointer?: CanvasPointer;
    };
};

export type TabsReduxState = {
    items: TabItem[];
    activeTabId?: string;
};

const initialState: TabsReduxState = {
    activeTabId: 'tab_1',
    items: [
        {
            id: 'tab_1',
            title: 'Tab 1',
            canvas: {
                scale: 25,
                rect: {w: 16, h: 16},
                layers: [{id: 'layer_1'}],
            },
        },
        {
            id: 'tab_2',
            title: 'Tab 2',
            canvas: {
                scale: 25,
                rect: {w: 16, h: 16},
                layers: [{id: 'layer_1'}],
            },
        },
    ],
};

const getTabIndexById = (items: TabItem[], tabId?: string) => {
    if (!tabId) {
        return -1;
    }

    const tabIndex = items.findIndex((item) => item.id === tabId);

    if (tabIndex === -1) {
        console.warn(`There is no tab with "${tabId}" id`);
    }

    return tabIndex;
};

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setActiveTabId: (state, action: PayloadAction<{activeTabId?: string}>) => {
            state.activeTabId = action.payload.activeTabId;
        },
        setCanvasScale: (state, action: PayloadAction<{scale: number}>) => {
            const tabIndex = getTabIndexById(state.items, state.activeTabId);

            if (tabIndex !== -1) {
                state.items[tabIndex].canvas.scale = action.payload.scale;
            }
        },
        setCanvasRect: (state, action: PayloadAction<{rect: Rect}>) => {
            const tabIndex = getTabIndexById(state.items, state.activeTabId);

            if (tabIndex !== -1) {
                state.items[tabIndex].canvas.rect = action.payload.rect;
            }
        },
        setCanvasLayers: (state, action: PayloadAction<{layers: CanvasLayerConfig[]}>) => {
            const tabIndex = getTabIndexById(state.items, state.activeTabId);

            if (tabIndex !== -1) {
                state.items[tabIndex].canvas.layers = action.payload.layers;
            }
        },
        setCanvasPointer: (state, action: PayloadAction<{pointer?: CanvasPointer}>) => {
            const tabIndex = getTabIndexById(state.items, state.activeTabId);

            if (tabIndex !== -1) {
                state.items[tabIndex].canvas.pointer = action.payload.pointer;
            }
        },
        updateCanvasPointer: (state, action: PayloadAction<{updates?: Partial<CanvasPointer>}>) => {
            const tabIndex = getTabIndexById(state.items, state.activeTabId);
            const pointer = state.items[tabIndex]?.canvas.pointer;

            if (pointer) {
                const updatedPointer = merge({}, pointer, action.payload.updates);
                state.items[tabIndex].canvas.pointer = updatedPointer;
            }
        },
    },
});
