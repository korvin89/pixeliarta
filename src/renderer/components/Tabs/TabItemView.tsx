import React from 'react';

import type {TabItem} from '../../store';

import {useTabItemStyle} from './useTabItemStyle';

type Props = TabItem & {active: boolean; onClick: (activeTabId?: string) => void};

export const TabItemView = ({id, title, active, onClick}: Props) => {
    const style = useTabItemStyle({active});

    const handleClick = () => {
        onClick(id);
    };

    return (
        <button style={style} role="tab" onClick={handleClick}>
            {title}
        </button>
    );
};
