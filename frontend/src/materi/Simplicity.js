import React, { useState } from "react";
import Navbar from "../component/Navbar";

function Simplicity() {
  // State untuk melacak materi pembelajaran yang harus ditampilkan
  const [lessonToShow, setLessonToShow] = useState(null);

  // Fungsi untuk menampilkan materi pembelajaran yang sesuai dengan tombol yang diklik
  const showLesson = (lesson) => {
    setLessonToShow(lesson);
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

      <div className="flex justify-center">
        <div className="flex">
          <div className="container">
            <h2 className="mt-14 font-semibold text-lg">
              Konten belajar
              <hr />
            </h2>

            <div className="math font-raleway grid">
              <button
                className="border bg-transparent text-black grid"
                onClick={() => showLesson("Pengertian & Manfaat Simplicity")}
              >
                <span className="text-start">
                  Pengertian & Manfaat Simplicity
                </span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  showLesson("Penerapan & Prinsip Desain Simplicity")
                }
              >
                <span className="text-start">
                  Penerapan & Prinsip Desain Simplicity
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-8">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>
          {lessonToShow === "Pengertian & Manfaat Simplicity" && (
            <div>
              <h4>**Pengertian Prinsip Desain Simplicity**</h4>
              <div>
                <p>
                  - Prinsip desain simplicity adalah pendekatan untuk mengurangi
                  kompleksitas dan menyederhanakan elemen-elemen produk untuk
                  menciptakan pengalaman pengguna yang intuitif dan mudah
                  dipahami. Ini melibatkan penghapusan elemen-elemen yang tidak
                  perlu dan fokus pada hal-hal yang paling penting bagi
                  pengguna.
                </p>
              </div>

              <h4>**Manfaat Prinsip Desain Simplicity**</h4>
              <div>
                <p>
                  - Meningkatkan Ketercapaian Produk: Pengguna lebih mungkin
                  untuk mencapai tujuan mereka dengan cepat dan efisien jika
                  produk memiliki antarmuka yang sederhana.
                </p>
                <p>
                  {" "}
                  - Meminimalkan Kesalahan Pengguna: Semakin kompleks desain,
                  semakin besar kemungkinan pengguna membuat kesalahan.
                  Kesederhanaan membantu mengurangi risiko kesalahan.
                </p>
                <p>
                  - Meningkatkan Kepuasan Pengguna: Pengguna cenderung lebih
                  puas dengan produk yang mudah digunakan dan tidak
                  membingungkan.
                </p>
                <p>
                  - Mempercepat Pembelajaran Pengguna: Kesederhanaan
                  memungkinkan pengguna untuk dengan cepat memahami cara
                  menggunakan produk tanpa perlu melalui kurva pembelajaran yang
                  curam.
                </p>
              </div>
            </div>
          )}

          {lessonToShow === "Penerapan & Prinsip Desain Simplicity" && (
            <div>
              <h4>**Penerapan Prinsip Desain Simplicity**</h4>
              <div>
                <p>
                  - Pemetaan Alur Pengguna: Memahami bagaimana pengguna
                  berinteraksi dengan produk dan menghilangkan hambatan-hambatan
                  yang tidak perlu dalam alur kerja mereka.
                </p>
                <p>
                  - Pengujian Pengguna: Melakukan pengujian pengguna untuk
                  mengidentifikasi area-area dalam antarmuka pengguna yang
                  membingungkan atau tidak intuitif.
                </p>
                <p>
                  - Konsistensi Desain: Menjaga konsistensi dalam desain
                  antarmuka pengguna untuk membuatnya lebih mudah dipahami oleh
                  pengguna.
                </p>
                <p>
                  - Iterasi dan Perbaikan: Melakukan iterasi desain secara
                  teratur berdasarkan umpan balik pengguna untuk meningkatkan
                  kesederhanaan dan efektivitas produk.
                </p>
              </div>

              <h4>**Prinsip-prinsip Desain Simplicity**</h4>
              <div>
                <p>
                  - Menghilangkan yang Tidak Perlu: Identifikasi dan hapus
                  elemen-elemen yang tidak memberikan nilai tambah bagi
                  pengguna.
                </p>
                <p>
                  - Klaritas dan Keterbacaan: Pastikan antarmuka pengguna jelas
                  dan mudah dipahami tanpa kebingungan.
                </p>
                <p>
                  - Minimalkan Pilihan: Terlalu banyak pilihan dapat membuat
                  pengguna kebingungan. Batasi jumlah opsi untuk membuat
                  keputusan lebih mudah.
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
    </div>
  );
}

export default Simplicity;
