import { configureStore } from "@reduxjs/toolkit";
// import NoteReducer from './noteSlice'
import AuthReducer from './authSlice'
export const store = configureStore({
    reducer:{
        // notes : NoteReducer,
        auth : AuthReducer
    }
})