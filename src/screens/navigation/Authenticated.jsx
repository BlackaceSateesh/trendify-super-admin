import React from "react";
import { AuthenticatedRoutes } from "../../constants/routes";
import { Route, Routes } from "react-router-dom";

const Authenticated = () => {
  return (
    <>
      <Routes>
        <Route path={AuthenticatedRoutes.dashboard} element="dashboard" />
      </Routes>
    </>
  );
};

export default Authenticated;
