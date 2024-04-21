import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavbarMain from "../component/NavbarMain";
import useAuth from "../store/useAuth";
import { PATH } from "../helpers/path";
import Footer from "../component/Footer";
import { getUser } from "../service/auth";
import { AUTH } from "../config/firebase";

const DashboardLayouts = () => {
  const user = useAuth((state) => state.user);
  const setUser = useAuth((state) => state.setUser);
  const pathname = useLocation().pathname.replace("/", "");

  const noNavbar = [PATH.PLAY_QUIZ];

  useEffect(() => {
    if (AUTH.currentUser?.uid) {
      getUser(AUTH.currentUser?.uid).then((res) => {
        setUser({ ...res.data(), uid: AUTH.currentUser.uid });
      });
    }
  }, [pathname, AUTH]);

  if (!user.uid) {
    return <Navigate to={PATH.LANDING} />;
  }

  return (
    <div className="flex flex-col h-screen">
      {!noNavbar.includes(pathname) && <NavbarMain />}
      <div className="grow overflow-y-auto flex flex-col">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayouts;
