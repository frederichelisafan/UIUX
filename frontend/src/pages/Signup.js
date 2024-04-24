import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FORMS, { REGISTER_FORMS } from "../helpers/forms";
import { register } from "../service/auth";
import useAuth from "../store/useAuth";
import { PATH } from "../helpers/path";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth((state) => state);
  const [formInput, setFormInput] = useState({
    [FORMS.AUTH.USERNAME.NAME]: "",
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

    await register(
      formInput[FORMS.AUTH.USERNAME.NAME],
      formInput[FORMS.AUTH.EMAIL.NAME],
      formInput[FORMS.AUTH.PASSWORD.NAME]
    )
      .then((res) => {
        navigate("/" + PATH.LOGIN);
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <div className="flex grow flex-col justify-center px-6 lg:px-8 bg-zinc-950 signup-bg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-24">
        <p className="text-2xl font-bold text-white text-center">SIGN UP</p>
        <h2 className="text-center text-lg font-bold leading-9 tracking-tight text-gray-900">
          <span className="text-[#FFAEF2] font-bold">
            Kami butuh Anda untuk login agar bisa memberikan{" "}
          </span>
          <span className="text-white font-bold">pengalaman terbaik.</span>
        </h2>
      </div>

      <div className="xl:ml-32 sm:ml-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          {REGISTER_FORMS.map((item) => (
            <div key={item.name}>
              <label
                htmlFor={item.name}
                className="block text-sm leading-6 text-white font-bold text-left"
              >
                {item.label}
              </label>
              <div className="mt-2">
                <input
                  type={
                    item.name === FORMS.AUTH.PASSWORD.NAME
                      ? "password"
                      : item.name === FORMS.AUTH.EMAIL.NAME
                      ? "email"
                      : "text"
                  }
                  id={item.name}
                  name={item.name}
                  value={formInput[item]}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-2 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          ))}

          {error && <div style={{ color: "red" }}>{error}</div>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#B50097] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Daftar
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-white font-normal">
          Sudah punya akun?
          <Link
            to={"/" + PATH.LOGIN}
            className="font-bold leading-6 text-white hover:text-indigo-500 no-underline ml-1"
          >
            Masuk Disini
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

export default Signup;
