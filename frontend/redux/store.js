import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { alertSlice } from '../redux/alertSlice'
import { userSlice } from '../redux/userSlice'
import { createWrapper } from 'next-redux-wrapper'

const appReducer = combineReducers({
    alerts: alertSlice.reducer,
    users: userSlice.reducer
});

const store = configureStore({
    reducer:appReducer
})

export default store;


// const makeStore = () => store();
// export const wrapper = createWrapper() 