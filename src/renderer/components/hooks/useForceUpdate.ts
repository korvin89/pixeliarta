import React from 'react';

export const useForceUpdate = () => {
    const [_, forceUpdate] = React.useReducer((x: number) => x + 1, 0);
    return {forceUpdate};
};
