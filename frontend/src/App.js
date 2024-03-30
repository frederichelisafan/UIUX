// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Landingpage from "./pages/Landingpage";
import Course from "./pages/Course";
import Loginpage from "./pages/Loginpage";
import Navbar from "./component/Navbar.js";
import Signup from "./pages/Signup.js";
import Login from "./component/Login.js";
import Footer from "./component/Footer.js";
import Leaderboard from "./pages/Leaderboard.js";
import Materi from "./component/Materi.js";
import UX from "./materi/UX.js";
import UI from "./materi/UI.js";
import Topic from "./pages/Topic.js";
import UIQuiz from "./pages/UIQuiz.js";
import PlayQuizMain from "./pages/PlayQuizMain.js";
import Profile from "./pages/Profile.js";
import Test from "./pages/Test.js";
import Consistency from "./materi/Consistency.js";
import Simplicity from "./materi/Simplicity.js";
import Welcome from "./pages/Welcome.js";
import Clarity from "./materi/Clarity.js";
import ClearFeedback from "./materi/ClearFeedback.js";
import Flexibility from "./materi/Flexibility.js";
import ClearFunctionality from "./materi/ClearFunctionality.js";
import Aesthetic from "./materi/Aesthetic.js";

function App() {
  return (
    // <div>
    //   {/* <Landingpage /> */}
    //   {/* <Navbar /> */}
    //   {/* <Leaderboard /> */}
    //   {/* <Loginpage />
    //   {/* <Topic /> */}
    //   {/* <Signup /> */}
    //   {/* <Topic /> */}
    //   {/* <PlayQuizMain /> */}
    //   {/* <Simplicity />/ */}
    //   <Profile />
    //   {/* <Materi /> */}
    //   {/* <Loginpage /> */}
    //   {/* <Signup /> */}
    //   {/* <Simplicity /> */}
    //   {/* <Test /> */}
    // </div>

    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<PlayQuizMain />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/materi/UI" element={<UI />} />
          <Route path="/materi/UX" element={<UX />} />
          <Route path="/materi/Consistency" element={<Consistency />} />
          <Route path="/materi/Simplicity" element={<Simplicity />} />
          <Route path="/materi/Clarity" element={<Clarity />} />
          <Route path="/materi/ClearFeedback" element={<ClearFeedback />} />
          <Route path="/materi/Flexibility" element={<Flexibility />} />
          <Route path="/materi/Aesthetic" element={<Aesthetic />} />
          <Route
            path="/materi/ClearFunctionality"
            element={<ClearFunctionality />}
          />
          <Route path="/home" element={<Welcome />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
