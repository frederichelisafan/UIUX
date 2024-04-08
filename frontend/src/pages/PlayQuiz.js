import { useState, useEffect } from "react";
import cross from "../assets/cross.png";
import checked from "../assets/checked.png";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import GameOver from "../component/GameOver";
import { SOAL_QUIZ } from "../Data/SoalQuiz";
import useParams from "../hooks/useParams";
import { useNavigate } from "react-router-dom";
import { PATH } from "../helpers/path";
import { updatePoints, updateLevel } from "../service";
import useAuth from "../store/useAuth";

const PlayQuiz = () => {
  const questions_name = useParams("name");
  const navigate = useNavigate();
  const minimum_points = 700;

  function setGameState() {}

  const [counter, setCounter] = useState(15);
  const [counterFlag, setCounterFlag] = useState(false);
  const userPoint = useAuth((state) => state.user.points);
  const userLevel = useAuth((state) => state.user.level);
  const { setPoints, setLevel } = useAuth((state) => state);

  useEffect(() => {
    const timer =
      counter > 0 &&
      !counterFlag &&
      setInterval(() => setCounter(counter - 1), 1000);

    if (counter === 0) {
      setGameState("gameOver");
    }

    if (counterFlag) {
      return () => clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [counter, counterFlag]);

  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(0);
  const [currentindex, setCurrentIndex] = useState(0);
  const [quizfinished, setQuizFinished] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [pilihanjawaban, setPilihanJawaban] = useState("");

  const handleCekJawaban = () => {
    const a = SOAL_QUIZ[questions_name].qna[currentindex].answerOptions.find(
      (q) => q.answerText === pilihanjawaban
    );

    if (a.isCorrect) {
      setScore((value) => value + 1);

      setPoint((p) => p + 100);
    }
    setCounterFlag(true);
    setSubmit(true);
    // if (!submit) {
    //   setCounter(15);
    // }
  };

  const handlePilihJawaban = (answerText) => {
    setPilihanJawaban(answerText);
  };

  const nextQuestion = async () => {
    setCounterFlag(false);
    if (currentindex === SOAL_QUIZ[questions_name].qna.length - 1) {
      setQuizFinished(true);

      if (score >= SOAL_QUIZ[questions_name].qna.length) {
        // toast("test");
        Swal.fire({
          title: "Sweet!",
          text: "Modal with a custom image.",
          // imageUrl: {},
          imageWidth: 400,
          imageHeight: 200,
          // imageAlt: "Custom image",
        });

        if (point >= userPoint[questions_name]) {
          await updatePoints(questions_name, point, userPoint)
            .then(() => {
              setPoints(questions_name, point);
            })
            .catch((err) => {
              console.log(err);
            });
        }

        if (
          point >= minimum_points &&
          SOAL_QUIZ[questions_name].level - userLevel === 0
        ) {
          await updateLevel(userLevel + 1)
            .then(() => {
              setLevel(userLevel + 1);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    } else {
      setCurrentIndex((value) => value + 1);
    }
    setCounter(15);
    setPilihanJawaban("");
    setSubmit(false);
  };

  function handleBackHome() {
    navigate("/" + PATH.DASHBOARD);
  }

  function handlePlayAgain() {
    window.location.reload();
  }

  if (!counter) {
    return <GameOver />;
  }

  return (
    <>
      <div class="mb-5 h-2 rounded-full bg-gray-200">
        {/* <div class="h-2 rounded-full bg-orange-500" style="width: 50%"></div> */}
      </div>

      <div className="z-30 grow">
        {quizfinished ? (
          <div className="text-center px-4 py-8">
            <img
              src={
                score < SOAL_QUIZ[questions_name].qna.length ? cross : checked
              }
              className="w-14 m-auto"
              alt=""
            />
            <h3 className="text-2xl mt-4">
              {" "}
              You scored <b>{score}</b> out of{" "}
              <b>{SOAL_QUIZ[questions_name].qna.length}</b>
            </h3>

            <h3 className="text-2xl mt-4">
              {" "}
              Your point <b>{point}</b>
            </h3>
            <div className="flex items-center justify-center py-1 mt-8">
              <button
                className="px-3 mx-2 text-blue-400 hover:text-blue-300"
                onClick={handleBackHome}
              >
                Back To Home
              </button>
              <button
                className="px-3 mx-2 text-blue-400 hover:text-blue-300"
                onClick={handlePlayAgain}
              >
                Play Again
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center px-4 py-2 rounded-t-lg">
              <h2 className="text-[#523889] font-semibold tracking-wide text-4xl">
                {SOAL_QUIZ[questions_name].label}
              </h2>
              <div className="flex justify-between text-lg text-black font-bold">
                <p>Time : {counter}</p>
                <p>Score : {score}</p>
              </div>
            </div>
            <div className="py-8 px-4">
              <div className="pb-2">
                <h1 className="font-semibold text-2xl text-end">
                  <span className="text-lg bg-slate-200 w-fit rounded-lg px-2 py-1 shadow mr-2 text-black">
                    {currentindex + 1} / {SOAL_QUIZ[questions_name].qna.length}{" "}
                  </span>
                </h1>
                <h4 className="text-center">
                  {SOAL_QUIZ[questions_name].qna[currentindex].questionText}
                </h4>
              </div>
              <div className="mt-10 flex flex-col text-left gap-2">
                {SOAL_QUIZ[questions_name].qna[currentindex].answerOptions.map(
                  (answer) => {
                    return (
                      <button
                        className={
                          answer.isCorrect && submit
                            ? "bg-green-500"
                            : answer.answerText === pilihanjawaban &&
                              !answer.isCorrect &&
                              submit
                            ? "bg-red-500"
                            : !submit && answer.answerText === pilihanjawaban
                            ? "bg-purple-500"
                            : ""
                        }
                        onClick={() => handlePilihJawaban(answer.answerText)}
                        key={answer.answerText}
                      >
                        {answer.answerText}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
            <div className="flex justify-center mb-12">
              <button
                className="bg-primary mr-4 rounded-sm"
                onClick={nextQuestion}
                disabled={!submit}
              >
                Next
              </button>

              <button
                className="bg-primary rounded-sm"
                onClick={handleCekJawaban}
                disabled={submit || !pilihanjawaban}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default PlayQuiz;
