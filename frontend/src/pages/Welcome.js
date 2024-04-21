import React from "react";
import useAuth from "../store/useAuth";

const Welcome = () => {
  const { username } = useAuth(state => state.user)

  return (
    <div className="mt-40 grow">
      <div>
        <h1 className="text-[#443091] text-center font-raleway font-bold text-3xl">
          HELLO &
        </h1>
        <h1 className="text-center text-[#443091] font-raleway font-bold text-3xl">
          WELCOME <span className="text-[#B50096]">{username}.</span>
        </h1>
        <p className="text-center mt-3 w-[600px] mx-auto text-xl">
          Website pembelajaran UI/UX adalah platform digital yang dirancang
          untuk membantu pengguna memahami prinsip-prinsip desain antarmuka
          pengguna (UI) dan pengalaman pengguna (UX) melalui serangkaian materi
          pembelajaran dan quiz. Aplikasi ini bertujuan untuk memberikan
          pemahaman mendalam tentang konsep-konsep desain UI/UX .
        </p>
        <button className="bg-primary mx-auto rounded-3xl mb-14 mt-4">
          Ayo Belajar
        </button>
      </div>
    </div>
  );
};

export default Welcome;
