import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {Rect} from '../types';

export type CanvasLayerConfig = {
    id: string;
    blob: Blob | null;
};

type CanvasConfig = {
    activeLayerId: string;
    scale: number;
    rect: Rect;
    layers: CanvasLayerConfig[];
};

export type TabItem = {
    id: string;
    title: string;
    canvas: CanvasConfig;
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
                activeLayerId: 'layer_1',
                scale: 25,
                rect: {w: 16, h: 16},
                layers: [{id: 'layer_1', blob: null}],
            },
        },
        {
            id: 'tab_2',
            title: 'Tab 2',
            canvas: {
                activeLayerId: 'layer_1',
                scale: 25,
                rect: {w: 16, h: 16},
                layers: [{id: 'layer_1', blob: null}],
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
        setCanvasLayerBlob: (
            state,
            action: PayloadAction<{blob: CanvasLayerConfig['blob']; layerId: string}>,
        ) => {
            const tabIndex = getTabIndexById(state.items, state.activeTabId);
            const layerIndex = state.items[tabIndex]?.canvas.layers.findIndex((layer) => {
                return layer.id === action.payload.layerId;
            });

            if (layerIndex !== -1) {
                state.items[tabIndex].canvas.layers[layerIndex].blob = action.payload.blob;
            }
        },
    },
});
