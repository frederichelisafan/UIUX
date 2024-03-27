import React from "react";
import DashboardLayouts from "../layouts/dashboard-layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import { PATH } from "../helpers/path";
import Signup from "../pages/Signup";
import Login from "../component/Login";
import LandingLayouts from "../layouts/landing-layouts";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <Routes>
      <Route
        path={PATH.BASE}
        element={<Navigate to={PATH.LANDING} replace />}
      />
      <Route path={PATH.BASE} Component={LandingLayouts}>
        <Route path={PATH.LANDING} Component={Landingpage} />
        <Route path={PATH.REGISTER} Component={Signup} />
        <Route path={PATH.LOGIN} Component={Login} />
      </Route>
      <Route path={PATH.BASE} Component={DashboardLayouts}>
        <Route path={PATH.BASE} Component={Landingpage} />
        <Route path={PATH.DASHBOARD} Component={Profile} />
      </Route>
    </Routes>
  );
};

export default Router;
