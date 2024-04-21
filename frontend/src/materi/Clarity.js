import React, { useState } from "react";
import MateriContainer from "../component/MateriContainer";

function Clarity() {
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
                onClick={() => showLesson("Pengertian & Manfaat Clarity")}
              >
                <span className="text-start">Pengertian & Manfaat Clarity</span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid"
                onClick={() => showLesson("Penerapan & Prinsip Desain Clarity")}
              >
                <span className="text-start">
                  Penerapan & Prinsip Desain Clarity
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>
          {lessonToShow === "Pengertian & Manfaat Clarity" && (
            <div>
              <h4>**Pengertian Prinsip Desain Clarity**</h4>
              <div>
                <p>
                  - Prinsip Desain Klaritas adalah aspek penting dalam
                  pengembangan produk yang bertujuan untuk menciptakan
                  pengalaman pengguna yang jelas dan mudah dimengerti. Dalam
                  materi ini, kita akan menjelaskan prinsip desain clarity
                  beserta manfaat dan penerapannya dalam menciptakan antarmuka
                  pengguna yang efektif.
                </p>
                <p>
                  - Prinsip desain clarity berfokus pada penyampaian informasi
                  dengan cara yang jelas dan mudah dimengerti bagi pengguna. Ini
                  melibatkan penggunaan elemen-elemen desain yang membantu
                  pengguna memahami tujuan dan fungsi produk dengan cepat dan
                  tanpa kebingungan.
                </p>
              </div>

              <h4>**Manfaat Prinsip Desain Clarity**</h4>
              <div>
                <p>
                  - Meningkatkan Pemahaman Pengguna: Desain yang jelas membantu
                  pengguna memahami bagaimana menggunakan produk dan mencapai
                  tujuan mereka dengan lebih baik.
                </p>
                <p>
                  {" "}
                  - Mengurangi Kebingungan: Kesederhanaan dalam penyampaian
                  informasi mengurangi risiko kebingungan dan kesalahan pengguna
                  saat berinteraksi dengan produk.
                </p>
                <p>
                  - Mempercepat Penggunaan: Pengguna dapat menemukan informasi
                  yang mereka butuhkan dengan cepat, meningkatkan efisiensi
                  penggunaan produk.
                </p>
                <p>
                  - Meningkatkan Kepercayaan Pengguna: Desain yang jelas dan
                  teratur menciptakan kesan profesional dan dapat diandalkan
                  bagi pengguna.
                </p>
              </div>
            </div>
          )}

          {lessonToShow === "Penerapan & Prinsip Desain Clarity" && (
            <div>
              <h4>**Penerapan Prinsip Desain Clarity**</h4>
              <div>
                <p>
                  - Desain Responsif: Menyesuaikan antarmuka pengguna untuk
                  berbagai perangkat dan ukuran layar untuk memastikan
                  keterbacaan dan jelasnya informasi.
                </p>
                <p>
                  - Pemilihan Warna yang Tepat: Menggunakan palet warna yang
                  sesuai dan kontras untuk meningkatkan keterbacaan dan
                  memperjelas informasi.
                </p>
                <p>
                  - Tata Letak yang Teratur: Mengatur elemen-elemen antarmuka
                  pengguna secara teratur dan logis untuk memudahkan navigasi
                  dan memahami alur kerja.
                </p>
                <p>
                  - Penggunaan Ikon yang Dapat Dipahami: Memilih ikon yang jelas
                  dan mudah dipahami untuk memperjelas fungsi dan tindakan yang
                  tersedia.
                </p>
              </div>

              <h4>**Prinsip-prinsip Desain Clarity**</h4>
              <div>
                <p>
                  - Konsistensi: Menjaga keseragaman dalam elemen-elemen desain
                  seperti warna, font, dan tata letak untuk mengurangi
                  kebingungan pengguna.
                </p>
                <p>
                  - Keterbacaan: Memastikan teks dan informasi dapat dibaca
                  dengan jelas tanpa kesulitan.
                </p>
                <p>
                  - Simplicity: Menghilangkan kebingungan dengan menyederhanakan
                  antarmuka pengguna dan menghindari kelebihan informasi.
                </p>
                <p>
                  - Pengaturan Hierarki: Menggunakan ukuran, warna, dan
                  penekanan yang tepat untuk mengatur hierarki informasi dan
                  membantu pengguna fokus pada hal-hal yang paling penting.
                </p>
              </div>
            </div>
          )}

          {/* <div className="video-player">
            {showLesson ? (
              // <VideoPlayer videoId={currentVideo} />
              ""
            ) : (
              <div>
                <p>Click on button to Play Video</p>
                <div id="arrowAnim">
                  <div class="arrowSliding">
                    <div class="arrow"></div>
                  </div>
                  <div class="arrowSliding delay1">
                    <div class="arrow"></div>
                  </div>
                  <div class="arrowSliding delay2">
                    <div class="arrow"></div>
                  </div>
                  <div class="arrowSliding delay3">
                    <div class="arrow"></div>
                  </div>
                </div>
              </div>
            )}
          </div> */}
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

export default Clarity;
