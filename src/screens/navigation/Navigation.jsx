import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authenticated from "./Authenticated";
import Auth from "./Auth";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        {true ? <Auth/> : <Authenticated />}
      </BrowserRouter>
    </>
  );
};

export default Navigation;
