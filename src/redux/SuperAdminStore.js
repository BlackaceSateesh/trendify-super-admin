import { configureStore } from "@reduxjs/toolkit";
import SideMenuSlice from "./slice/SideMenuSlice";
import UserInfoSlice from "./slice/UserInfoSlice";

const SuperAdminStore = configureStore({
  reducer: {
    UserInfoSlice: UserInfoSlice,
    SideMenuSlice: SideMenuSlice
  },
});

export default SuperAdminStore;
