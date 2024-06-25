import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authenticated from "./Authenticated";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Authenticated />
      </BrowserRouter>
    </>
  );
};

export default Navigation;
