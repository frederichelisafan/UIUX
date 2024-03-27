import React from "react";

const NavbarMain = () => {
  return (
    <nav className="flex justify-between px-20 py-4 items-center bg-white shadow">
      <img src="logoUI.png" alt="logo ui" />
      <div className="flex items-center">
        <ul className="flex items-center space-x-6 my-auto font-raleway cursor-pointer">
          <li className="font-semibold text-gray-700">Quiz</li>
          <li className="font-semibold text-gray-700">Materi</li>
          <li className="font-semibold text-gray-700">Leaderboard</li>
          <li className="font-semibold  bg-red-500 px-4 py-2 border rounded">
            <Link to="/" className="text-white no-underline">
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMain;
