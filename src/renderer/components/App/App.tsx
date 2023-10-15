import React from 'react';

import {Provider} from 'react-redux';

import {store} from '../../store';
import {Tabs} from '../Tabs/Tabs';
import {Workspace} from '../Workspace/Workspace';

import {useStyle} from './useStyle';

export const App = () => {
    const style = useStyle();

    return (
        <Provider store={store}>
            <div style={style}>
                <Tabs />
                <Workspace />
            </div>
        </Provider>
    );
};
