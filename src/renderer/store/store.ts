import {configureStore} from '@reduxjs/toolkit';

import {canvasSlice} from './features';
import {logger} from './middlewares';

export const store = configureStore({
    reducer: {
        canvas: canvasSlice.reducer,
    },
    middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
