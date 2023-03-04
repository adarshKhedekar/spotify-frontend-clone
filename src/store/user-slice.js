import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState : {
        user: null,
        playlist: [],
        playing: false,
        item: null,
        weekly: null,
        token: null
    },
    reducers: {
        setUser(state,action){
            state.user = action.payload
        },
        setToken(state,action){
            state.token = action.payload
        },
        setPlaylist(state,action){
            state.playlist = action.payload;
        },
        setWeekly(state,action){
            state.weekly = action.payload;
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;