import { configureStore } from "@reduxjs/toolkit";
import SideMenuSlice from "../../src/redux/slice/SideMenuSlice";
const SuperAdminStore = configureStore({
  reducer: {
    SideMenuSlice: SideMenuSlice,
  }
});

export default SuperAdminStore;
 