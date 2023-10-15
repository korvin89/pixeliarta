import {configureStore} from '@reduxjs/toolkit';

import {pointerSlice, tabsSlice, toolbarSlice} from './features';
import {logger} from './middlewares';

export const store = configureStore({
    reducer: {
        pointer: pointerSlice.reducer,
        tabs: tabsSlice.reducer,
        toolbar: toolbarSlice.reducer,
    },
    middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
