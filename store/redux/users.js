import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [ {
            id: 0,
            username: "John",
            behaviors: []
        }
        ], 
    },

    reducers: {
        addUser: (state, action) => {

            state.users.push(action.payload);


        },
        removeUser: (state, action) => {
            state.users.splice(state.users.indexOf(action.payload.id), 1);

        },

        addBehavior: (state, action) => {
            state.users.indexOf(action.payloadId).behaviors.push({
                text: action.payload.text,
                id: action.payload.text,
                date: action.payload.text,
                icon: action.payload.icon
            })
        },
    }
});

export const addUser = usersSlice.actions.addUser;
export const removeUser = usersSlice.actions.removeUser;
export default usersSlice.reducer;

