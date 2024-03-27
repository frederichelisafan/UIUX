import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { AUTH } from "../config/firebase";
import { PATH } from "../helpers/path";

const LandingLayouts = () => {
  const isLoggedIn = AUTH.currentUser?.email;

  console.log("at landing layout");

  return !isLoggedIn ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to={PATH.DASHBOARD} />
  );
};

export default LandingLayouts;
