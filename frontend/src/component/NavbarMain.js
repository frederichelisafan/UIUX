import React from "react";
import logo from "../assets/logoUI.png";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../helpers/path";
import useAuth from "../store/useAuth";
import { logout } from "../service/auth";

const NavbarMain = () => {
  const { removeUser } = useAuth((state) => state);
  const navigate = useNavigate();
  function handleLogout() {
    removeUser();
    logout();
    navigate(PATH.BASE);
  }
  return (
    <nav className="flex justify-between px-20 py-4 items-center bg-white shadow">
      <img src={logo} alt="logo ui" />
      <div className="flex items-center">
        <ul className="flex items-center space-x-6 my-auto font-raleway cursor-pointer">
          <Link to={PATH.QUIZ} className="font-semibold text-gray-700">
            Quiz
          </Link>
          <Link to={PATH.MATERI} className="font-semibold text-gray-700">
            Materi
          </Link>
          <Link to={PATH.LEADERBOARD} className="font-semibold text-gray-700">
            Leaderboard
          </Link>
          <Link to={PATH.PROFILE} className="font-semibold text-gray-700">
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="font-semibold  bg-red-500 px-4 py-2 border rounded"
          >
            <span className="text-white no-underline">Log out</span>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMain;
