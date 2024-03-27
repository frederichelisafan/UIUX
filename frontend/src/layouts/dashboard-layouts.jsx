import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavbarMain from "../component/NavbarMain";
import { AUTH } from "../config/firebase";
import { PATH } from "../helpers/path";

const DashboardLayouts = () => {
  console.log("at dash layout");
  const isLoggedIn = AUTH.currentUser?.email;
  return isLoggedIn ? (
    <div>
      <NavbarMain />
      <Outlet />
    </div>
  ) : (
    <Navigate to={PATH.LANDING} />
  );
};

export default DashboardLayouts;
