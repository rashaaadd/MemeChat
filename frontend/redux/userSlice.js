import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState:{
    user: null
  },
  reducers:{
    setUser : (state, action) => {
      console.log(state,action,"User state called");
        state.user = action.payload;
    },
    reloadUserData : (state, action) => {
        state.user = action.payload;
    }
  }
})

export const {setUser} = userSlice.actions;