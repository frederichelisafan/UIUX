// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import Landingpage from "./pages/Landingpage";
import Course from "./pages/Course";
import Loginpage from "./pages/Loginpage";
import Navbar from "./component/Navbar.js";
import Signup from "./pages/Signup.js";
import Login from "./component/Login.js";
import Footer from "./component/Footer.js";
import Leaderboard from "./pages/Leaderboard.js";
import Sidebar from "./component/Sidebar.js";
import NavbarMain from "./component/NavbarMain.js";
import UX from "./materi/UX.js";
import UI from "./materi/UI.js";
import Topic from "./pages/Topic.js";
import HtmlQuiz from "./pages/UIQuiz.js";
import PlayQuizMain from "./pages/PlayQuizMain.js";
import Profile from "./pages/Profile.js";
import Test from "./pages/Test.js";
import Router from "./router/index.jsx";

function App() {
  return (
    // <div>
    //   {/* <Landingpage /> */}
    //   {/* <Navbar /> */}
    //   {/* <Leaderboard /> */}
    //   {/* <Loginpage />
    //   {/* <NavbarMain
    //   <Footer /> */}
    //   {/* <Topic /> */}
    //   {/* <Signup /> */}
    //   {/* <Quiz /> */}
    //   {/* <Topic /> */}
    //   {/* <PlayQuiz /> */}
    //   {/* <PlayQuizMain /> */}
    //   <UI />
    //   {/* <Profile /> */}
    //   {/* <NavbarMain /> */}
    //   {/* <Loginpage /> */}
    //   {/* <Signup /> */}
    //   {/* <Test /> */}
    // </div>

    <Router />
  );
}

export default App;
