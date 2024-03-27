import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FORMS, { REGISTER_FORMS } from "../helpers/forms";
import { register } from "../services/auth";
import { PATH } from "../helpers/path";

const Signup = () => {
  const [formData, setFormData] = useState({
    [FORMS.REGISTER.USERNAME.NAME]: "",
    [FORMS.REGISTER.EMAIL.NAME]: "",
    [FORMS.REGISTER.PASSWORD.NAME]: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(
      formData[FORMS.REGISTER.USERNAME.NAME],
      formData[FORMS.REGISTER.EMAIL.NAME],
      formData[FORMS.REGISTER.PASSWORD.NAME]
    )
      .then(() => {
        navigate(`/${PATH.LOGIN}`);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-zinc-950 signup-bg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="text-2xl font-bold text-white">SIGN UP</p>
        <h2 className="text-center text-lg font-bold leading-9 tracking-tight text-gray-900">
          <span className="text-[#FFAEF2] font-bold">
            Kami butuh Anda untuk login agar bisa memberikan{" "}
          </span>
          <span className="text-white font-bold">pengalaman terbaik.</span>
        </h2>
      </div>

      <div className="xl:ml-32 sm:ml-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#">
          {REGISTER_FORMS.map((form) => (
            <div key={form.name}>
              <label
                htmlFor={form.name}
                className="block text-sm leading-6 text-white font-bold text-left"
              >
                {form.label}
              </label>
              <div className="mt-2">
                <input
                  type={
                    form.name === FORMS.REGISTER.PASSWORD.NAME
                      ? "password"
                      : "text"
                  }
                  id={form.name}
                  name={form.name}
                  value={formData[form.name]}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md px-2 border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          ))}

          {error ? <div className="text-red-500">{error}</div> : null}

          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-[#B50097] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Daftar
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-white font-normal">
          Sudah punya akun?
          <a
            href="/"
            className="font-bold leading-6 text-white hover:text-indigo-500 no-underline ml-1"
          >
            Masuk Disini
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

export default Signup;
