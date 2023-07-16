import React from 'react';

import {Provider} from 'react-redux';

import {store} from '../../store';
import {Canvas} from '../Canvas/Canvas';

export const App = () => {
    return (
        <Provider store={store}>
            <Canvas />
        </Provider>
    );
};
