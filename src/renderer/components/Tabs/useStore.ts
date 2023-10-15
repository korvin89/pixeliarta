import React from 'react';

import {
    activeTabSelector,
    tabItemsSelector,
    tabsSlice,
    useAppDispatch,
    useAppSelector,
} from '../../store';

export const useStore = () => {
    const dispatch = useAppDispatch();
    const activeTab = useAppSelector(activeTabSelector);
    const tabItems = useAppSelector(tabItemsSelector);

    const setActiveTabId = React.useCallback(
        (activeTabId?: string) => {
            if (activeTab?.id !== activeTabId) {
                dispatch(tabsSlice.actions.setActiveTabId({activeTabId}));
            }
        },
        [activeTab, dispatch],
    );

    return {activeTab, tabItems, setActiveTabId};
};
