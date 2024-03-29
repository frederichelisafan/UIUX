import { useState, useEffect, useContext } from "react";
import cross from "../assets/cross.png";
import checked from "../assets/checked.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import GameOver from "../component/GameOver";
import { QuizContext } from "../helpers/Context";
import { Progress } from "@material-tailwind/react";

const UIQuiz = () => {
  const questions = [
    {
      questionText: "Apa yang dimaksud dengan ui",
      answerOptions: [
        {
          answerText:
            "Antarmuka Pengguna adalah perangkat keras yang digunakan untuk berinteraksi dengan komputer.",
          isCorrect: false,
        },
        {
          answerText:
            "UI adalah bagian dari sistem komputer yang mengatur komunikasi antara pengguna dan perangkat keras.",
          isCorrect: false,
        },
        {
          answerText:
            "UI adalah segala sesuatu yang memungkinkan pengguna berinteraksi dengan sebuah program komputer.",
          isCorrect: true,
        },
        {
          answerText:
            "UI merujuk pada desain grafis yang diterapkan dalam pembuatan situs web.",
          isCorrect: false,
        },
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
      questionText: "Apa fungsi dari komponen UI Navigation Bar?",
      answerOptions: [
        {
          answerText: "Menampilkan daftar item dalam bentuk kartu.",
          isCorrect: false,
        },
        {
          answerText: "Mengumpulkan input dari pengguna dalam bentuk formulir.",
          isCorrect: false,
        },
        {
          answerText:
            "Menampilkan ikon atau gambar kecil yang mewakili fungsi tertentu.",
          isCorrect: false,
        },
        {
          answerText:
            "Memberikan navigasi antara berbagai halaman atau bagian dalam aplikasi atau situs web.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Apa itu tata letak (layout) dalam desain UI?",
      answerOptions: [
        {
          answerText:
            "Tata letak merujuk pada warna dan tipografi yang digunakan dalam desain UI.",
          isCorrect: false,
        },
        {
          answerText:
            "Tata letak adalah metode untuk mengatur komponen-komponen UI dalam sebuah halaman atau antarmuka.",
          isCorrect: true,
        },
        {
          answerText:
            "Tata letak merujuk pada animasi yang digunakan untuk meningkatkan interaksi pengguna.",
          isCorrect: false,
        },
        {
          answerText:
            "Tata letak adalah teknik untuk menguji responsivitas dari sebuah desain UI.",
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
      questionText:
        "Manakah dari berikut yang merupakan prinsip yang penting dalam penggunaan tipografi dalam desain UI?",
      answerOptions: [
        {
          answerText: "Pemilihan warna yang cerah dan mencolok.",
          isCorrect: false,
        },
        {
          answerText:
            "Penggunaan berbagai jenis huruf untuk menambah keunikan.",
          isCorrect: false,
        },
        {
          answerText:
            "Menjaga konsistensi dalam ukuran, spasi, dan konsistensi huruf.",
          isCorrect: true,
        },
        {
          answerText:
            "Menggunakan tipografi yang sangat kecil agar teks terlihat rapi.",
          isCorrect: false,
        },
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
      questionText:
        "Manakah dari berikut yang merupakan prinsip desain yang mendukung desain UI yang ramah pengguna?",
      answerOptions: [
        {
          answerText:
            "Memperkenalkan banyak gangguan visual untuk menarik perhatian pengguna.",
          isCorrect: false,
        },
        {
          answerText: "Menyediakan navigasi yang rumit dan sulit dipahami.",
          isCorrect: false,
        },
        {
          answerText:
            "Menyediakan umpan balik yang jelas dan memudahkan navigasi.",
          isCorrect: true,
        },
        {
          answerText:
            "Mengabaikan kebutuhan pengguna dan fokus pada kepentingan pengembang.",
          isCorrect: false,
        },
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

  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(0);
  const [currentindex, setCurrentIndex] = useState(0);
  const [quizfinished, setQuizFinished] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [pilihanjawaban, setPilihanJawaban] = useState("");

  const handleCekJawaban = () => {
    const a = questions[currentindex].answerOptions.find(
      (q) => q.answerText === pilihanjawaban
    );
    console.log(a);

    if (a.isCorrect) {
      setScore((value) => value + 1);

      setPoint((p) => p + 100);
    }
    setSubmit(true);
    // if (!submit) {
    //   setCounter(15);
    // }
  };

  const handlePilihJawaban = (answerText) => {
    setPilihanJawaban(answerText);
  };

  const nextQuestion = () => {
    if (currentindex === questions.length - 1) {
      setQuizFinished(true);

      if (score > 7) {
        // toast("test");
        Swal.fire({
          title: "Sweet!",
          text: "Modal with a custom image.",
          imageUrl: {},
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
        {/* <div class="h-2 rounded-full bg-orange-500" style="width: 50%"></div> */}
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
                User Interface (UI)
              </h2>
              <p>{score}</p>
              <p>{point}</p>
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
