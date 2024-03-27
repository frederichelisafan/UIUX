import React, { useState } from "react";

function UI() {
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

      {/*  Main Content */}
      <div className="flex mt-20">
        {/* Tombol-tombol materi pembelajaran */}
        <div className="flex flex-col mr-4">
          <button
            onClick={() => showLesson("Pengertian & Komponen Utama UI")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Pengertian & Komponen Utama UI
          </button>
          <button
            onClick={() => showLesson("Buttons & Input Fields")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Buttons & Input Fields
          </button>
          <button
            onClick={() => showLesson("Dropdown Menu & Radio Buttons")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Dropdown Menu & Radio Buttons
          </button>
          <button
            onClick={() => showLesson("Lists & Icons")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Lists & Icons
          </button>
          <button
            onClick={() => showLesson("Navigation Bar & Cards")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Navigation Bar & Cards
          </button>
          <button
            onClick={() => showLesson("Alerts & Checkboxes")}
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Alerts & Checkboxes
          </button>
        </div>

        {/* Materi pembelajaran yang ditampilkan di sebelah kanan tombol */}
        <div>
          {lessonToShow && (
            <div className="p-4 border border-gray-300 rounded-md">
              {/* Judul materi pembelajaran */}
              <h2 className="text-xl font-semibold mb-2">{lessonToShow}</h2>
              {/* Isi materi pembelajaran */}
              {lessonToShow === "Pengertian & Komponen Utama UI" && (
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
              {lessonToShow === "Buttons & Input Fields" && (
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
              {lessonToShow === "Dropdown Menu & Radio Buttons" && (
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

              {lessonToShow === "Lists & Icons" && (
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

              {lessonToShow === "Navigation Bar & Cards" && (
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
              {lessonToShow === "Alerts & Checkboxes" && (
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
    </div>
  );
}

export default UI;
