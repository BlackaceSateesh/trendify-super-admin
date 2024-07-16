import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authenticated from "./Authenticated";
import Auth from "./Auth";
import { useSelector } from "react-redux";

const Navigation = () => {
  const UserInfo = useSelector((state) => state.UserInfoSlice);

  return (
    <>
      <BrowserRouter>
        {!UserInfo?.token ? <Auth/> : <Authenticated />}
      </BrowserRouter>
    </>
  );
};

export default Navigation;
