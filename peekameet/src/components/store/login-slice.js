import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: "user",
    initialState:{
        user: null,
    },
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) =>{
            state.user = null;
        }
    }
})

export const loginActions = loginSlice.actions;
export default loginSlice;