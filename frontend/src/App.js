// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Landingpage from "./pages/Landingpage";
import Course from "./pages/Course";
import Loginpage from "./pages/Loginpage";
import Navbar from "./component/Navbar.js";
import Signup from "./pages/Signup.js";
import Footer from "./component/Footer.js";
import Leaderboard from "./pages/Leaderboard.js";
import Sidebar from "./component/Sidebar.js";
import NavbarMain from "./component/NavbarMain.js";
import { Nav } from "react-bootstrap";
import UserInterface from "./materi/UserInterface.js";
import { User } from "@nextui-org/react";
import Topic from "./pages/Topic.js";
import HtmlQuiz from "./pages/UIQuiz.js";
import PlayQuiz from "./pages/PlayQuiz.js";
import PlayQuizMain from "./pages/PlayQuizMain.js";
import Profile from "./pages/Profile.js";
import Test from "./pages/Test.js";

function App() {
  return (
    <div>
      {/* <Landingpage /> */}
      {/* <Navbar /> */}
      {/* <Leaderboard /> */}
      {/* <Loginpage />
      {/* <NavbarMain
      <Footer /> */}
      {/* <Topic /> */}
      {/* <Signup /> */}
      {/* <Quiz /> */}
      {/* <Topic /> */}
      {/* <PlayQuiz /> */}
      {/* <PlayQuizMain /> */}
      {/* <Profile /> */}
      <NavbarMain />
      {/* <Loginpage /> */}
      {/* <Signup /> */}
      {/* <Test /> */}
    </div>

    // <>
    //   <Navbar />
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Landingpage />} />
    //       <Route path="/login" element={<Loginpage />} />
    //       <Route path="/register" element={<Signup />} />
    //       <Route path="/quiz" element={<NavbarMain />} />
    //       <Route path="/materi/desaininteraksi" element={<UserInterface />} />
    //     </Routes>
    //   </div>
    // </>
  );
}

export default App;
