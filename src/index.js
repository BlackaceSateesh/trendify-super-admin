import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import SuperAdminStore from "./redux/SuperAdminStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={SuperAdminStore}>
    <App />
  </Provider>
);

reportWebVitals();
