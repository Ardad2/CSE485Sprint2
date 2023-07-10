import { createSlice } from '@reduxjs/toolkit';

const authTokensSlice = createSlice({
    name: 'authTokens',
    initialState: {
        data: [
            {
                token: '',
                isAuthenticated: false,
                email: ''
            }
        ],   
    },

    reducers: {
        authenticate: (state, action) => {
            state.authTokens.data[0] = ({token: action.payload.token, isAuthenticated: action.payload.isAuthenticated, email: action.payload.isAuthenticated});
        },

        logout: (state, action) => {
            state.authTokens.data[0] = null;

        }
    }
});

export const addAuthTokens = authTokensSlice.actions.addAuthToken;
export const removeAuthTokens = authTokensSlice.actions.removeAuthToken;
export default authTokensSlice.reducer;

