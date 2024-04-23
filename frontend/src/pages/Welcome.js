import React from "react";
import useAuth from "../store/useAuth";

const Welcome = () => {
  const { username } = useAuth((state) => state.user);

  return (
    <div className="grow mt-16">
      <div>
        <h1 className="text-[#443091] text-center font-raleway font-bold text-4xl">
          HELLO &
        </h1>
        <h1 className="text-center text-[#443091] font-raleway font-bold text-4xl">
          WELCOME <span className="text-[#B50096]">{username}.</span>
        </h1>
        <p className="text-center mt-3 w-[600px] mx-auto text-md">
          Website pembelajaran UI/UX adalah platform digital yang dirancang
          untuk membantu pengguna memahami prinsip-prinsip desain antarmuka
          pengguna (UI) dan pengalaman pengguna (UX) melalui serangkaian materi
          pembelajaran dan quiz. Aplikasi ini bertujuan untuk memberikan
          pemahaman mendalam tentang konsep-konsep desain UI/UX .
          {/* UI/UX learning websites are designed digital platforms
          to help users understand the principles of interface design
          user (UI) and user experience (UX) through a series of materials
          learning and quizzes. This application aims to provide
          Deep understanding of UI/UX design concepts. */}
        </p>
        <button className="bg-primary hover:bg-[#6747ab] mx-auto rounded-3xl mb-14 mt-4">
          Let's learn
        </button>
      </div>
    </div>
  );
};

export default Welcome;
