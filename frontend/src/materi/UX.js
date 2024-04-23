import React, { useState } from "react";
import "./leftarrow.css";
import MateriContainer from "../component/MateriContainer";

function UserInterface() {
  const [currentVideo, setCurrentVideo] = useState("");
  // State untuk melacak materi pembelajaran yang harus ditampilkan
  const [lessonToShow, setLessonToShow] = useState(null);

  // Fungsi untuk menampilkan materi pembelajaran yang sesuai dengan tombol yang diklik
  const showLesson = (lesson) => {
    setLessonToShow(lesson);
  };

  const handleVideoPlay = async (url) => {
    try {
      const videoId = new URL(url).searchParams.get("v");
      if (videoId) {
        setCurrentVideo(videoId);
      } else {
        console.error("Invalid YouTube URL");
      }
    } catch (error) {
      console.error("Error parsing YouTube URL:", error);
    }
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
                className="border bg-transparent text-black grid hover:bg-slate-100 focus:bg-primary focus:text-white"
                onClick={() => showLesson("Pengertian & Komponen Utama UX")}
              >
                <span className="text-start">
                  Pengertian & Komponen Utama UX
                </span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid hover:bg-slate-100 focus:bg-primary focus:text-white"
                onClick={() => showLesson("Pengertian & Metode UX Research")}
              >
                <span className="text-start">
                  Pengertian & Metode UX Research
                </span>
              </button>
              <button
                className="border bg-transparent text-black grid hover:bg-slate-100 focus:bg-primary focus:text-white"
                onClick={() => showLesson("Proses UX Research")}
              >
                <span className="text-start">Proses UX Research</span>
              </button>
              <button
                className="border bg-transparent text-black grid hover:bg-slate-100 focus:bg-primary focus:text-white"
                onClick={() =>
                  showLesson("Manfaat dan Implementasi UX Research")
                }
              >
                <span className="text-start">
                  Manfaat dan Implementasi UX Research
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>

          {lessonToShow === "Pengertian & Metode UX Research" && (
            <div>
              <h4>**Pengantar tentang UX Research**</h4>
              <div>
                <p>
                  - Definisi UX Research: Proses memahami pengguna melalui
                  pengumpulan data untuk meningkatkan desain produk.
                </p>
                <p>
                  - Tujuan UX Research: Mengidentifikasi masalah, memahami
                  kebutuhan pengguna, dan menguji desain untuk pengalaman
                  pengguna yang lebih baik.
                </p>
              </div>

              <h4>**Metode-metode UX Research**</h4>
              <div>
                <p>
                  - Observasi Pengguna: Melihat langsung bagaimana pengguna
                  berinteraksi dengan produk.
                </p>
                <p>
                  {" "}
                  - Wawancara Pengguna: Mendengarkan pengguna untuk memahami
                  kebutuhan dan masalah mereka.
                </p>
                <p>
                  - Survei dan Kuesioner: Mengumpulkan data dari sejumlah besar
                  responden untuk menganalisis tren.
                </p>
                <p>
                  - A/B Testing: Membandingkan dua versi produk untuk menentukan
                  yang lebih efektif.
                </p>
                <p>
                  {" "}
                  - Card Sorting: Mengorganisir informasi produk dengan
                  melibatkan pengguna.
                </p>
              </div>
            </div>
          )}

          {lessonToShow === "Pengertian & Komponen Utama UX" && (
            <div>
              <h4>**Apa itu User Experience**</h4>
              <div>
                <p>
                  - UX merupakan keseluruhan interaksi pengguna dengan produk
                  atau sistem, termasuk aspek-aspek fungsional, estetika, dan
                  emosional.{" "}
                </p>
                <p>
                  - UX mencakup bagaimana pengguna merasa, berpikir, dan
                  bertindak saat menggunakan produk atau sistem tersebut.
                </p>
              </div>

              <h4>**Komponen-komponen Utama UX**</h4>
              <div>
                <p>
                  - Kegunaan (Usability): Seberapa mudah produk dapat digunakan
                  oleh pengguna untuk mencapai tujuan mereka.
                </p>
                <p>
                  - Kesenangan (Desirability): Seberapa menarik dan menyenangkan
                  pengalaman menggunakan produk tersebut.
                </p>
                <p>
                  - Kepercayaan (Credibility): Seberapa dapat dipercaya dan aman
                  produk dalam penggunaan pengguna.
                </p>
              </div>
            </div>
          )}

          {lessonToShow === "Proses UX Research" && (
            <p>
              <h4>**Tahapan dalam Proses UX Research**</h4>
              <div>
                <p>
                  - Perencanaan Penelitian: Menetapkan tujuan, mengidentifikasi
                  peserta, dan merancang metode penelitian.
                </p>
                <p>
                  - Pengumpulan Data: Melaksanakan metode penelitian yang
                  dipilih.
                </p>
                <p>
                  - Analisis Data: Menganalisis data yang terkumpul untuk
                  mengidentifikasi pola dan tren.
                </p>
                <p>
                  {" "}
                  - Interpretasi dan Penarikan Kesimpulan: Mengaitkan temuan
                  dengan kebutuhan pengguna dan desain produk.
                </p>
                <p>
                  {" "}
                  - Implementasi Hasil Penelitian: Mengintegrasikan temuan
                  penelitian ke dalam proses desain produk.
                </p>
              </div>

              <h4>**Manfaat UX Research**</h4>
              <div>
                <p>
                  - Memahami pengguna: Mendapatkan wawasan mendalam tentang
                  kebutuhan dan preferensi pengguna.
                </p>
                <p>
                  - Mengurangi risiko: Menghindari pengembangan produk yang
                  tidak sesuai dengan harapan pengguna.
                </p>
                <p>
                  - Meningkatkan kepuasan pengguna: Menghasilkan produk yang
                  lebih intuitif dan mudah digunakan.
                </p>
              </div>

              <h4>**Implementasi UX Research**</h4>
              <div>
                <p>
                  - Menerjemahkan Temuan menjadi Aksi: Mengubah temuan
                  penelitian menjadi rekomendasi desain konkret.
                </p>
                <p>
                  - Iterasi Produk: Menerapkan perubahan desain berdasarkan
                  umpan balik pengguna untuk meningkatkan pengalaman pengguna.
                </p>
              </div>
            </p>
          )}

          {lessonToShow === "Manfaat dan Implementasi UX Research" && (
            <p>
              <h4>**Manfaat UX Research**</h4>
              <div>
                <p>
                  - Memahami pengguna: Mendapatkan wawasan mendalam tentang
                  kebutuhan dan preferensi pengguna.
                </p>
                <p>
                  - Mengurangi risiko: Menghindari pengembangan produk yang
                  tidak sesuai dengan harapan pengguna.
                </p>
                <p>
                  - Meningkatkan kepuasan pengguna: Menghasilkan produk yang
                  lebih intuitif dan mudah digunakan.
                </p>
              </div>

              <h4>**Implementasi UX Research**</h4>
              <div>
                <p>
                  - Menerjemahkan Temuan menjadi Aksi: Mengubah temuan
                  penelitian menjadi rekomendasi desain konkret.
                </p>
                <p>
                  - Iterasi Produk: Menerapkan perubahan desain berdasarkan
                  umpan balik pengguna untuk meningkatkan pengalaman pengguna.
                </p>
              </div>
            </p>
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

export default UserInterface;
