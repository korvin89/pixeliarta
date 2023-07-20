/* eslint no-console: 0, callback-return: 0 */

import type {Middleware} from '@reduxjs/toolkit';

const IGNORED_ACTIONS = ['canvas/setPointer'];

export const logger: Middleware = (store) => (next) => (action) => {
    if (IGNORED_ACTIONS.includes(action.type)) {
        return next(action);
    }

    console.groupCollapsed(action.type);
    console.log('payload:', action.payload);
    const result = next(action);
    console.log('next state:', store.getState());
    console.groupEnd();
    return result;
};
