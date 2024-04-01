import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavbarMain from "../component/NavbarMain";
import useAuth from "../store/useAuth";
import { PATH } from "../helpers/path";
import Footer from "../component/Footer";

const DashboardLayouts = () => {
  const user = useAuth((state) => state.user);

  if (!user.uid) {
    return <Navigate to={PATH.LANDING} />;
  }

  return (
    <div className="flex flex-col h-screen">
      <NavbarMain />
      <div className="grow overflow-y-auto flex flex-col">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayouts;
