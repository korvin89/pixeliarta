import type {RootState} from '../../store';

export const activeTabSelector = (state: RootState) => {
    return state.tabs.items.find((item) => item.id === state.tabs.activeTabId);
};

export const tabItemsSelector = (state: RootState) => {
    return state.tabs.items;
};

const getActiveTab = (state: RootState) => {
    const tab = activeTabSelector(state);

    if (!tab) {
        // It is assumed that this method uses only in case of tab presence
        throw new Error('There is no tab to get rect');
    }

    return tab;
};

export const tabCanvaselector = (state: RootState) => {
    return getActiveTab(state).canvas;
};

export const tabCanvasScaleSelector = (state: RootState) => {
    return getActiveTab(state).canvas.scale;
};
