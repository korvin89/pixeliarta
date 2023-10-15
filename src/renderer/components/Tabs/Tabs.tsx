import React from 'react';

import {TabItemView} from './TabItemView';
import {useStore} from './useStore';
import {useTabsStyle} from './useTabsStyle';

export const Tabs = () => {
    const {activeTab, tabItems, setActiveTabId} = useStore();
    const style = useTabsStyle();

    return (
        <div style={style}>
            {tabItems.map((item, i) => (
                <TabItemView
                    key={`tab-${i}`}
                    {...item}
                    active={activeTab?.id === item.id}
                    onClick={setActiveTabId}
                />
            ))}
        </div>
    );
};
