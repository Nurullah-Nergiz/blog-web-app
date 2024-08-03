import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: null,
   authToken: null,
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      loginSuccess: (state, action) => {
         state.isLoading = action.payload.authentication;
         state.user = action.payload.user;
      },
      logout: (state, action) => {
         state.isLoading = null;
         state.user = null;
      },
   },
});

export const {  loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
