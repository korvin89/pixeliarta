import React from 'react';

import ReactDOM from 'react-dom/client';

const App = () => {
    return <p>Ciao!</p>;
};

const container = document.getElementById('pixeliarta-app');

if (!container) {
    throw new Error('There is no container for the application');
}

const root = ReactDOM.createRoot(container);

root.render(<App />);
