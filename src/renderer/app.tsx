import React from 'react';

import ReactDOM from 'react-dom/client';

import {App} from './components';

const container = document.getElementById('pixeliarta-app');

if (!container) {
    throw new Error('There is no container for the application');
}

const root = ReactDOM.createRoot(container);

root.render(<App />);
