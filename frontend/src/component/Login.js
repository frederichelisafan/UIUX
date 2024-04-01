// import loginBg from "../assets/LoginBg.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FORMS, { LOGIN_FORMS } from "../helpers/forms";
import { login } from "../service/auth";
import useAuth from "../store/useAuth";
import { PATH } from "../helpers/path";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth((state) => state);
  const [formInput, setFormInput] = useState({
    [FORMS.AUTH.EMAIL.NAME]: "",
    [FORMS.AUTH.PASSWORD.NAME]: "",
  });
  const [error, setError] = useState("");

  function handleChange({ target: { name, value } }) {
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await login(
      formInput[FORMS.AUTH.EMAIL.NAME],
      formInput[FORMS.AUTH.PASSWORD.NAME]
    )
      .then((res) => {
        setUser(res);
        navigate(PATH.DASHBOARD);
      })
      .catch((err) => {
        setError(err);
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <div class="flex min-w-full grow flex-col justify-center px-6 py-12 lg:px-8 hero-bg mt-20">
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
        <form onSubmit={handleSubmit} class="space-y-6" action="#">
          {LOGIN_FORMS.map((item) => (
            <div key={item.name}>
              <label
                for={item.name}
                class="block text-sm leading-6 text-gray-900 font-bold text-left"
              >
                {item.label}
              </label>
              <div class="mt-2">
                <input
                  id={item.name}
                  name={item.name}
                  type={
                    item.name === FORMS.AUTH.PASSWORD.NAME
                      ? "password"
                      : "email"
                  }
                  autocomplete={item.name}
                  value={formInput[item.name]}
                  onChange={handleChange}
                  required
                  class="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          ))}

          {error && <div style={{ color: "red" }}>{error}</div>}
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-black">
          Anda belum mempunyai akun?
          <Link
            to={"/" + PATH.REGISTER}
            class="font-semibold leading-6 text-[#443091] hover:text-indigo-500 no-underline ml-1"
          >
            Daftar Disini
          </Link>
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
