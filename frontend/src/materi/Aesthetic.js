import React, { useState } from "react";
import MateriContainer from "../component/MateriContainer";

function Aesthetic() {
  // State untuk melacak materi pembelajaran yang harus ditampilkan
  const [lessonToShow, setLessonToShow] = useState(null);

  // Fungsi untuk menampilkan materi pembelajaran yang sesuai dengan tombol yang diklik
  const showLesson = (lesson) => {
    setLessonToShow(lesson);
  };

  return (
    <MateriContainer>
      <div className="flex justify-center">
        <div className="flex shrink-0 gap-4">
          <div className="container">
            <h2 className="mt-14 font-semibold text-lg">
              Konten belajar
              <hr />
            </h2>

            <div className="math font-raleway grid">
              <button
                className="border bg-transparent text-black grid"
                onClick={() => showLesson("Pengertian & Manfaat Aesthetic")}
              >
                <span className="text-start">
                  Pengertian & Manfaat Aesthetic
                </span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  showLesson("Penerapan & Prinsip Desain Aesthetic")
                }
              >
                <span className="text-start">
                  Penerapan & Prinsip Desain Aesthetic
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>
          {lessonToShow === "Pengertian & Manfaat Aesthetic" && (
            <div>
              <h4>**Pengertian Prinsip Desain Aesthetic**</h4>
              <div>
                <p>
                  - Prinsip desain estetika adalah konsep yang berkaitan dengan
                  penampilan visual produk dan bagaimana hal itu memengaruhi
                  persepsi pengguna terhadap keindahan dan kesan dari produk
                  tersebut. Dalam materi ini, kita akan membahas prinsip desain
                  estetika beserta manfaatnya dan penerapannya dalam menciptakan
                  pengalaman pengguna yang menarik dan memuaskan.
                </p>
                <p>
                  - Prinsip desain estetika berkaitan dengan elemen-elemen
                  visual dan artistik dari produk, seperti rasio, proporsi,
                  warna, tekstur, dan tata letak. Tujuannya adalah untuk
                  menciptakan pengalaman pengguna yang menarik secara visual dan
                  memberikan kesan yang menyenangkan kepada pengguna.
                </p>
              </div>

              <h4>**Manfaat Prinsip Desain Aesthetic**</h4>
              <div>
                <p>
                  **Manfaat Prinsip Desain Estetika** - Menarik Perhatian:
                  Desain estetika yang menarik dapat membantu produk menonjol di
                  antara persaingan dan menarik perhatian pengguna.
                </p>
                <p>
                  {" "}
                  - Meningkatkan Kepuasan Pengguna: Antarmuka yang dirancang
                  dengan indah dapat meningkatkan kepuasan pengguna dan membuat
                  pengalaman pengguna lebih menyenangkan.
                </p>
                <p>
                  - Memperkuat Citra Merek: Desain estetika yang konsisten dan
                  menarik dapat memperkuat citra merek dan memberikan kesan
                  profesionalisme.
                </p>
                <p>
                  - Menginspirasi Kepercayaan: Produk dengan desain estetika
                  yang baik dapat memberikan kesan kualitas dan keandalan kepada
                  pengguna.
                </p>
              </div>
            </div>
          )}

          {lessonToShow === "Penerapan & Prinsip Desain Aesthetic" && (
            <div>
              <h4>**Penerapan Prinsip Desain Aesthetic**</h4>
              <div>
                <p>
                  - Desain Responsif: Memastikan desain terlihat dan berfungsi
                  dengan baik di berbagai perangkat dan ukuran layar untuk
                  menciptakan pengalaman pengguna yang konsisten.
                </p>
                <p>
                  - Desain Minimalis: Menggunakan desain minimalis untuk
                  memusatkan perhatian pada elemen-elemen penting dan
                  menghindari kebingungan.
                </p>
                <p>
                  - Penggunaan Gambar dan Grafis: Menggunakan gambar dan grafis
                  yang menarik untuk memperkuat pesan dan menciptakan kesan yang
                  kuat.
                </p>
                <p>
                  - Penggunaan Ruang Negatif: Memanfaatkan ruang negatif dengan
                  bijaksana untuk meningkatkan keterbacaan dan memberikan napas
                  visual pada desain.
                </p>
              </div>

              <h4>**Prinsip-prinsip Desain Aesthetic**</h4>
              <div>
                <p>
                  - Proporsi dan Keseimbangan: Menggunakan proporsi yang
                  seimbang dan proporsional untuk menciptakan tata letak yang
                  harmonis dan menarik.
                </p>
                <p>
                  - Warna dan Kontras: Menggunakan palet warna yang sesuai dan
                  kontras yang tepat untuk menarik perhatian pengguna dan
                  meningkatkan keterbacaan.
                </p>
                <p>
                  - Tata Letak dan Hirarki: Mengatur tata letak dengan baik dan
                  menggunakan hierarki visual untuk memandu pengguna melalui
                  antarmuka pengguna dengan jelas.
                </p>
                <p>
                  - Detail dan Keselarasan: Memperhatikan detail dan menjaga
                  konsistensi dalam desain untuk menciptakan pengalaman pengguna
                  yang halus dan menyelaraskan.
                </p>
              </div>
            </div>
          )}

          <div>
            <br />
            <br />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </MateriContainer>
  );
}

export default Aesthetic;
