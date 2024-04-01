import Home from "../pages/Home.js";
import Navbar from "../component/Navbar.js";
// import Footer from "../component/Footer.js";
import MateriLP from "../component/MateriLP.js";
import Expert from "../component/Expert.js";

const Landingpage = () => {
  return (
    <div className="landing-page relative">
      <Navbar />
      <Home />
      <MateriLP />
      <Expert />
      {/* <Footer /> */}
    </div>
  );
};

export default Landingpage;
