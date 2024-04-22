// import { Link } from "react-router-dom";
// import countryLogo from "../assets/hero-section-image.png";
import ilustrasi from "../assets/uiuxilustrasi.png";

const Home = () => {
  return (
    <section className="mb-40 font-inter">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 mt-20">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl xl:text-6xl mb-1 text-white">
                Explore the world of
                <br />
                <span className="text-7xl text-[#ff72e3]">UI/UX</span>
              </h1>
              <p className="max-w-md mx-auto md:text-xl mt-6 text-[#e8e8e8] z-40 mb-10">
                Dapatkan pemahaman dasar terkait pembelajara UI UX dengan
                instruksi yang mudah untuk diikuti.
              </p>
              <button
                className="mb-2 inline-block rounded   px-12 pt-4 pb-3.5 text-sm  uppercase leading-normal text-[#ffffff] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0 no-underline bg-[#897cff] font-bold hover:bg-[#6d54a9]"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Mulai Sekarang
              </button>
              <button
                className="inline-block rounded px-12 pt-4 pb-3.5 text-sm uppercase leading-normal transition duration-150 ease-in-out  hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 hover:bg-primary no-underline text-[#FFFFFF] font-bold bg-transparent"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Sudah punya akun?
              </button>
            </div>
            <div className="mb-12 lg:mb-0">
              <img src={ilustrasi} alt="ilustrasi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
