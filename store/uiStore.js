import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   navbar: true,
};

export const uiSlice = createSlice({
   name: "ui",
   initialState,
   reducers: {
      closeNavbar: (state) => {
          state.navbar = false;
      },
      openNavbar: (state, ) => {
         state.navbar = true;
      },
      toggleNavbar: (state, action) => {
         state.navbar = action.payload;
      },
   },
});

export const { closeNavbar, openNavbar, toggleNavbar } = uiSlice.actions;
export default uiSlice.reducer;
