import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { alertSlice } from './alertSlice'
import { userSlice } from './userSlice'

const appReducer = combineReducers({
    alerts: alertSlice.reducer,
    users: userSlice.reducer
});

const store = configureStore({
    reducer:appReducer
})

export default store;