import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { PATH } from "../helpers/path";
import useAuth from "../store/useAuth";
import Footer from "../component/Footer";

const LandingLayouts = () => {
  const user = useAuth((state) => state.user);
  const isLoggedIn = user.uid;

  if (isLoggedIn) {
    return <Navigate to={PATH.DASHBOARD} />;
  }

  return (
    <div className="flex flex-col h-screen relative">
      <Navbar />
      <div className="grow overflow-y-auto flex flex-col">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LandingLayouts;
