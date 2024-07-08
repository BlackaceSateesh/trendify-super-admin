import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
}; 

const SideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleSideMenu } = SideMenuSlice.actions;

export default SideMenuSlice.reducer;
 