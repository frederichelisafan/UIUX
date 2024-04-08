import React, { useEffect } from "react";
import useAuth from "../store/useAuth";
import Navbar from "../component/Navbar";
import NavbarMain from "../component/NavbarMain";
import { useNavigate } from "react-router-dom";
import { PATH } from "../helpers/path";

const NotFound = () => {
  const navigate = useNavigate();
  const user = useAuth((state) => state.user.uid);
  let navbar;

  if (!user) {
    navbar = <Navbar />;
  } else {
    navbar = <NavbarMain />;
  }

  useEffect(() => {
    navigate(PATH.NOT_FOUND);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {navbar}
      <div className="grow flex flex-col justify-center items-center">
        <span className="text-3xl text-secondary font-bold">
          somethings went wrong :)
        </span>
        <span className="text-2xl text-primary font-bold">404 - not found</span>
      </div>
    </div>
  );
};

export default NotFound;
