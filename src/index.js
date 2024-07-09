import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import SideMenuSlice from "./redux/slice/SideMenuSlice";
import SuperAdminStore from "./redux/SuperAdminStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={SuperAdminStore}>
    <App />
  </Provider>
);

reportWebVitals();
