import React, { useState } from "react";

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
    <div>
      <nav className="flex justify-between px-20 py-4 items-center bg-white shadow">
        <img src="logoUI.png" alt="logo ui" />
        <div className="flex items-center">
          <ul className="flex items-center space-x-6 my-auto font-raleway cursor-pointer">
            <li className="font-semibold text-gray-700">Quiz</li>
            <li className="font-semibold text-gray-700">Materi</li>
            <li className="font-semibold text-gray-700">Leaderboard</li>
            <li className="font-semibold text-gray-700">Profile</li>
            <li className="font-semibold text-white bg-red-500 px-4 py-2 border rounded">
              Log out
            </li>
          </ul>
        </div>
      </nav>

      {/*  Main Content */}
      <div className="flex mt-20">
        {/* Tombol-tombol materi pembelajaran */}
        <div className="flex flex-col mr-4">
          <button
            onClick={() => showLesson("Pengertian & Komponen Utama UX")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Pengertian & Komponen Utama UX
          </button>
          <button
            onClick={() => showLesson("Pengertian & Metode UX Research")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Pengertian & Metode UX Research
          </button>
          <button
            onClick={() => showLesson("Proses UX Research")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Proses UX Research
          </button>
          <button
            onClick={() => showLesson("Manfaat dan Implementasi UX Research")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Manfaat dan Implementasi UX Research
          </button>
        </div>

        {/* Materi pembelajaran yang ditampilkan di sebelah kanan tombol */}
        <div>
          {lessonToShow && (
            <div className="p-4 border border-gray-300 rounded-md">
              {/* Judul materi pembelajaran */}
              <h2 className="text-xl font-semibold mb-2">{lessonToShow}</h2>
              {/* Isi materi pembelajaran */}
              {lessonToShow === "Pengertian & Komponen Utama UX" && (
                <div>
                  <h4>**Apa itu User Experience**</h4>
                  <div>
                    <p>
                      - UX merupakan keseluruhan interaksi pengguna dengan
                      produk atau sistem, termasuk aspek-aspek fungsional,
                      estetika, dan emosional.{" "}
                    </p>
                    <p>
                      - UX mencakup bagaimana pengguna merasa, berpikir, dan
                      bertindak saat menggunakan produk atau sistem tersebut.
                    </p>
                  </div>

                  <h4>**Komponen-komponen Utama UX**</h4>
                  <div>
                    <p>
                      - Kegunaan (Usability): Seberapa mudah produk dapat
                      digunakan oleh pengguna untuk mencapai tujuan mereka.
                    </p>
                    <p>
                      - Kesenangan (Desirability): Seberapa menarik dan
                      menyenangkan pengalaman menggunakan produk tersebut.
                    </p>
                    <p>
                      - Kepercayaan (Credibility): Seberapa dapat dipercaya dan
                      aman produk dalam penggunaan pengguna.
                    </p>
                  </div>
                </div>
              )}
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
                      - Survei dan Kuesioner: Mengumpulkan data dari sejumlah
                      besar responden untuk menganalisis tren.
                    </p>
                    <p>
                      - A/B Testing: Membandingkan dua versi produk untuk
                      menentukan yang lebih efektif.
                    </p>
                    <p>
                      {" "}
                      - Card Sorting: Mengorganisir informasi produk dengan
                      melibatkan pengguna.
                    </p>
                  </div>
                </div>
              )}
              {lessonToShow === "Proses UX Research" && (
                <p>
                  <h4>**Tahapan dalam Proses UX Research**</h4>
                  <div>
                    <p>
                      - Perencanaan Penelitian: Menetapkan tujuan,
                      mengidentifikasi peserta, dan merancang metode penelitian.
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
                      umpan balik pengguna untuk meningkatkan pengalaman
                      pengguna.
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
                      umpan balik pengguna untuk meningkatkan pengalaman
                      pengguna.
                    </p>
                  </div>
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex justify-center">
       
        <div className="flex">
          <div className="container">
            <h2 className="mt-14 font-semibold text-lg">
              Konten belajar
              <hr />
            </h2>

            
            <div className="math font-raleway grid">
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  handleVideoPlay(
                    "https://www.youtube.com/watch?v=c9Wg6Cb_YlU&pp=ygUUbGVhcm4gdXNlciBpbnRlcmZhY2U%3D"
                  )
                }
              >
                <span className="text-start">
                  Using place value to add 3-digitn..
                </span>
                <div className="flex"></div>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  handleVideoPlay(
                    "https://www.youtube.com/watch?v=9McJ3GobPaY&list=PLSQl0a2vh4HDsruFoOhyeLDr4w1o9dhe6"
                  )
                }
              >
                <span className="text-start">
                  Addition and subtraction within..
                </span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  handleVideoPlay(
                    "https://www.youtube.com/watch?v=9McJ3GobPaY&list=PLSQl0a2vh4HDsruFoOhyeLDr4w1o9dhe6"
                  )
                }
              >
                <span className="text-start">
                  Addition and subtraction within..
                </span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  handleVideoPlay("https://www.youtube.com/watch?v=9hM32lsQ4aI")
                }
              >
                <span className="text-start">Adding 3-digit numbers</span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
              <button
                className="border bg-transparent text-black mb-16 grid"
                onClick={() =>
                  handleVideoPlay(
                    "https://www.youtube.com/watch?v=ZgzpTx-s9Zo&list=PLSQl0a2vh4HDsruFoOhyeLDr4w1o9dhe6&index=5"
                  )
                }
              >
                <span className="text-start">Add 7 + 6</span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        

        
        <div class="col-8 text-center">
          <h1 className="font-raleway mt-9 mb-3">Watch and Learn with Fun</h1>

          <div className="video-player">
            {currentVideo ? (
              <VideoPlayer videoId={currentVideo} />
            ) : (
              //   <p>Click on button to Play Video</p>
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
          </div>
          <div>
            <br />
            <br />
          </div>
        </div>
      </div> */}

      {/* <Footer /> */}
    </div>
  );
}

export default UserInterface;
