import { configureStore } from '@reduxjs/toolkit';

import behaviorsReducer from './behaviors';

export const store = configureStore({
    reducer: {
        behaviors: behaviorsReducer
    }
});
