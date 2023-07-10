import { createSlice } from '@reduxjs/toolkit';

const authTokensSlice = createSlice({
    name: 'authTokens',
    initialState: {
        authTokens: [],   
    },

    reducers: {
        addAuthToken: (state, action) => {
            state.authTokens.push(action.payload);
        },
        removeAuthToken: (state, action) => {
            state.authTokens.splice(state.authTokens.indexOf(action.payload.id), 1);

        }
    }
});

export const addAuthTokens = authTokensSlice.actions.addAuthToken;
export const removeAuthTokens = authTokensSlice.actions.removeAuthToken;
export default authTokensSlice.reducer;

