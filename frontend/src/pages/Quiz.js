import React from "react";
import { SOAL_NAMES, SOAL_QUIZ } from "../Data/SoalQuiz";
import { useNavigate } from "react-router-dom";
import { PATH } from "../helpers/path";
import useAuth from "../store/useAuth";
import DisableAlert from "../helpers/disabled-alert";

const Quiz = () => {
  const navigate = useNavigate();
  const { level } = useAuth((state) => state.user);

  function letsPlay(param) {
    if (level < SOAL_QUIZ[param].level) {
      DisableAlert({
        title: `Kamu belum bisa membuka quiz ${SOAL_QUIZ[param].label}`,
        message: "Dapatkan point bagus pada quiz sebelumnya!",
      });

      return;
    }

    navigate(`/${PATH.PLAY_QUIZ}?name=${param}`);
  }

  return (
    <div className="mt-24">
      <div className="">
        <p className=" text-[#523889] text-4xl text-center font-bold mb-8">
          <span className="text-[#B50097]">Test Your Knowledge:</span> Join Our
          Exciting Quiz Challenge!
        </p>
        <div className="text-center">
          <h2 class="mb-2 text-lg font-semibold text-gray-900">Rules:</h2>
          <ul class="max-w-md space-y-1 text-[#523889] list-disc list-inside mx-auto">
            <li>
              If you score <span className="font-bold">above 70</span>, you will{" "}
              <span className="font-bold">receive badges</span> for the quizzes
              that have been completed.
            </li>
            <li>
              You can take the <span className="font-bold">next quiz</span> when
              you have achieved a{" "}
              <span className="font-bold">score above 70</span>.
            </li>
            <li>
              You'll have <span className="font-bold">15 second</span> to answer
              each questions.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-0">
          {SOAL_NAMES.map((soal, index) => {
            return (
              <div className="container" key={SOAL_QUIZ[soal].name}>
                <div className="e-card playing mt-0">
                  <div className={`wave${index}`}></div>
                  <div className={`wave${index}`}></div>
                  <div className={`wave${index}`}></div>

                  <div className="infotop">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="icon"
                    >
                      <path
                        fill="currentColor"
                        d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
  4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
  21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
  22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
  17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
  14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
  3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
  19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
  12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
  16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
  15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
  19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
   16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
   20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                      ></path>
                    </svg>
                    {SOAL_QUIZ[soal].label}
                    <br />
                    <div className="name">Frederich Elisafan</div>
                    <div>
                      <button
                        onClick={() => letsPlay(SOAL_QUIZ[soal].name)}
                        className="text-sm px-3 mt-8 rounded mx-auto hover:bg-slate-200 bg-white text-[#523889]"
                      >
                        Start Quiz!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
