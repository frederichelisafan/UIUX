// import loginBg from "../assets/LoginBg.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userloginData = { email, password };
    console.log(userloginData);
    axios
      .post("http://localhost:5000/login", userloginData)
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/quiz");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setError("Invalid Email or Password");
        } else {
          setError("terjadi kesalahan server");
        }
      });
  };

  return (
    <div class="flex min-w-full min-h-full flex-col justify-center px-6 py-12 lg:px-8 hero-bg mt-20">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="text-3xl font-bold text-[#5830B2] text-center">LOGIN</p>
        <h2 class="mt-10 text-center text-lg font-bold leading-9 tracking-tight text-gray-900">
          <span className="text-[#9F7FE4] font-bold">
            Kami butuh Anda untuk login agar bisa memberikan{" "}
          </span>
          <span className="text-[#6446A5] font-bold">pengalaman terbaik.</span>
        </h2>
      </div>

      <div class="mt-10 mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm leading-6 text-gray-900 font-bold text-left"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                class="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-bold leading-6 text-gray-900"
              >
                Password
              </label>
              <div class="text-sm">
                {/* <a
                  href="#"
                  class="font-semibold text-[#6446A5] hover:text-indigo-500"
                >
                  Forgot password?
                </a> */}
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <Link
              // onClick={handleSubmit}
              to={"/quiz"}
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </Link>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-black">
          Anda belum mempunyai akun?
          <a
            href="#"
            class="font-semibold leading-6 text-[#443091] hover:text-indigo-500 no-underline ml-1"
          >
            Daftar Disini
          </a>
        </p>
      </div>
      {/* <img
        src={loginBg}
        alt="login-background"
        className="absolute w-[452px] right-0"
      /> */}
    </div>
  );
};

export default Login;
