import { configureStore } from '@reduxjs/toolkit';

import behaviorsReducer from './behaviors';
import usersReducer from './users';

export const store = configureStore({
    reducer: {
        behaviors: behaviorsReducer,
        users: usersReducer
    }
});
