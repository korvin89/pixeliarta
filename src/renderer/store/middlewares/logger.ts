/* eslint no-console: 0, callback-return: 0 */

import type {Middleware} from '@reduxjs/toolkit';

export const logger: Middleware = (store) => (next) => (action) => {
    console.groupCollapsed(action.type);
    console.log('payload:', action.payload);
    const result = next(action);
    console.log('next state:', store.getState());
    console.groupEnd();
    return result;
};
