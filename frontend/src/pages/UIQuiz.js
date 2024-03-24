import { useState, useEffect, useContext } from "react";
import cross from "../assets/cross.png";
import checked from "../assets/checked.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import badge1 from "../assets/badge/image 8.png";
import GameOver from "../component/GameOver";
import { QuizContext } from "../helpers/Context";
import { Progress } from "@material-tailwind/react";

const UIQuiz = () => {
  const questions = [
    {
      questionText: "Apa yang dimaksud dengan ui",
      answerOptions: [
        { answerText: "Unified Interaction", isCorrect: false },
        { answerText: "User Interface", isCorrect: true },
        { answerText: "Universal Integration", isCorrect: false },
        { answerText: "User Interaction", isCorrect: false },
      ],
    },
    {
      questionText:
        "Apa fungsi utama dari UI dalam pengembangan perangkat lunak?",
      answerOptions: [
        { answerText: "Meningkatkan keamanan", isCorrect: false },
        { answerText: "Memproses data", isCorrect: false },
        {
          answerText: "Membuat interaksi pengguna yang efektif",
          isCorrect: true,
        },
        { answerText: "Menghasilkan kode sumber", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan Wireframe dalam UI design?",
      answerOptions: [
        {
          answerText: "Sebuah kerangka kerja untuk aplikasi web",
          isCorrect: true,
        },
        {
          answerText:
            "Representasi visual sederhana dari layout halaman atau antarmuka pengguna",
          isCorrect: true,
        },
        { answerText: "Alat untuk memprogram UI", isCorrect: false },
        { answerText: "Proses pengujian UI", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan Accessibility dalam UI?",
      answerOptions: [
        {
          answerText: "Kemudahan penggunaan sebuah aplikasi",
          isCorrect: false,
        },
        {
          answerText: "Kemampuan sebuah sistem untuk diakses secara online",
          isCorrect: false,
        },
        {
          answerText:
            "Kesesuaian sebuah produk dengan standar aksesibilitas untuk pengguna dengan disabilitas",
          isCorrect: true,
        },
        {
          answerText: "Kemampuan mengakses UI dari berbagai perangkat",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan Responsive Design dalam UI?",
      answerOptions: [
        {
          answerText: "Desain yang memperhatikan preferensi pengguna",
          isCorrect: false,
        },
        {
          answerText:
            "Desain yang menyesuaikan diri dengan perangkat dan layar yang digunakan pengguna",
          isCorrect: true,
        },
        {
          answerText: "Desain yang merespons cepat terhadap input pengguna",
          isCorrect: false,
        },
        {
          answerText: "Desain yang responsif terhadap perubahan tampilan",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan UI Patterns",
      answerOptions: [
        {
          answerText: "Pola yang digunakan dalam memprogram UI",
          isCorrect: false,
        },
        {
          answerText:
            "Model desain yang sering digunakan untuk menyelesaikan masalah desain UI yang umum",
          isCorrect: true,
        },
        { answerText: "Panduan desain UI", isCorrect: false },
        { answerText: "Teknik untuk menguji UI", isCorrect: false },
      ],
    },
    {
      questionText:
        "Apa peran utama dari UI Prototype dalam pengembangan produk?",
      answerOptions: [
        {
          answerText:
            "Memvisualisasikan ide-ide awal menjadi produk yang dapat diuji",
          isCorrect: true,
        },
        { answerText: "Membuat kode sumber untuk UI", isCorrect: false },
        { answerText: "Mengumpulkan data pengguna", isCorrect: false },
        { answerText: "Menerapkan fitur keamanan", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan UI Elements?",
      answerOptions: [
        { answerText: "Bagian-bagian dari kode sumber UI", isCorrect: false },
        {
          answerText: "Elemen visual yang membentuk antarmuka pengguna",
          isCorrect: true,
        },
        { answerText: "Alat untuk menguji UI", isCorrect: false },
        { answerText: "Komponen penyimpanan data", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan UI Testing?",
      answerOptions: [
        { answerText: "Menguji kinerja sistem", isCorrect: false },
        {
          answerText: "Menguji kesesuaian UI dengan standar desain",
          isCorrect: false,
        },
        {
          answerText: "Menguji fungsionalitas antarmuka pengguna",
          isCorrect: true,
        },
        { answerText: "Menguji keamanan sistem", isCorrect: false },
      ],
    },
    {
      questionText: "Apa yang dimaksud dengan UI Animation?",
      answerOptions: [
        {
          answerText: "Animasi yang digunakan untuk menghibur pengguna",
          isCorrect: false,
        },
        {
          answerText: "Animasi yang digunakan untuk menghibur pengguna",
          isCorrect: false,
        },
        {
          answerText:
            "Animasi yang membantu mengkomunikasikan interaksi dan perubahan di antarmuka pengguna",
          isCorrect: true,
        },
        {
          answerText: "Animasi yang hanya untuk dekorasi visual",
          isCorrect: false,
        },
      ],
    },
  ];

  const { setGameState, selectedTopic, setSelectedTopic } =
    useContext(QuizContext);

  const [counter, setCounter] = useState(15);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (counter === 0) {
      setGameState("gameOver");
    }
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (selectedTopic === "HTML") {
      return;
    }
  });

  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(100);
  const [currentindex, setCurrentIndex] = useState(0);
  const [quizfinished, setQuizFinished] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [pilihanjawaban, setPilihanJawaban] = useState("");

  const handleCekJawaban = () => {
    const a = questions[currentindex].answerOptions.find(
      (q) => q.answerText === pilihanjawaban
    );

    if (a.isCorrect) {
      setScore((value) => value + 1);
      setPoint((p) => p + 100);
    }

    setSubmit(true);
  };

  const handlePilihJawaban = (answerText) => {
    setPilihanJawaban(answerText);
  };

  const nextQuestion = () => {
    if (currentindex === questions.length - 1) {
      setQuizFinished(true);
      if (score > 1) {
        // toast("test");
        Swal.fire({
          title: "Sweet!",
          text: "Modal with a custom image.",
          imageUrl: { badge1 },
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        // console.log(score);
      }
    } else {
      setCurrentIndex((value) => value + 1);
    }
    setCounter(15);
    setPilihanJawaban("");
    setSubmit(false);
  };

  return (
    <>
      <p>{counter}</p>
      <div class="mb-5 h-2 rounded-full bg-gray-200">
        <div class="h-2 rounded-full bg-orange-500" style="width: 50%"></div>
      </div>
      <p>t</p>
      <div className="z-30">
        {quizfinished ? (
          <div className="text-center px-4 py-8">
            <img
              src={score < 7 ? cross : checked}
              className="w-14 m-auto"
              alt=""
            />
            <h3 className="text-2xl mt-4">
              {" "}
              You scored <b>{score}</b> out of <b>{questions.length}</b>
            </h3>

            <h3 className="text-2xl mt-4">
              {" "}
              Your point <b>{point}</b>
            </h3>
            <div className="flex items-center justify-center py-1 mt-8">
              <button
                className="px-3 mx-2 text-blue-400 hover:text-blue-300"
                // onClick={handleBackToHome}
              >
                Back To Home
              </button>
              <button
                className="px-3 mx-2 text-blue-400 hover:text-blue-300"
                // onClick={handlePlayAgain}
              >
                Play Again
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-blue-400 text-center px-4 py-2 rounded-t-lg">
              <h2 className="text-2xl text-white font-semibold tracking-wide">
                Basic HTML
              </h2>
              <p>{score}</p>
            </div>
            <div className="py-8 px-4">
              <div className="pb-2">
                <h3 className="font-semibold text-lg">
                  <span className="text-lg bg-slate-200 w-fit rounded-lg px-2 py-1 shadow mr-2 text-black">
                    {currentindex + 1} / {questions.length}{" "}
                  </span>
                  {questions[currentindex].questionText}
                </h3>
              </div>
              <div className="mt-2 flex flex-col text-left">
                {questions[currentindex].answerOptions.map((answer, e) => {
                  return (
                    <button
                      // className="mt-2 bg-slate-200 rounded-lg border border-slate-300 py-2 px-4 hover:bg-slate-300"
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
                })}
              </div>
            </div>
            <button
              className="bg-primary"
              onClick={nextQuestion}
              disabled={!submit}
            >
              Next
            </button>

            <button
              className="bg-primary"
              onClick={handleCekJawaban}
              disabled={submit || !pilihanjawaban}
            >
              Submit
            </button>
          </div>
        )}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default UIQuiz;
