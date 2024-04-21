import React, { useState } from "react";
import MateriContainer from "../component/MateriContainer";

function ClearFunctionality() {
  // State untuk melacak materi pembelajaran yang harus ditampilkan
  const [lessonToShow, setLessonToShow] = useState(null);

  // Fungsi untuk menampilkan materi pembelajaran yang sesuai dengan tombol yang diklik
  const showLesson = (lesson) => {
    setLessonToShow(lesson);
  };

  return (
    <MateriContainer>
      <div className="flex justify-center gap-4">
        <div className="flex shrink-0 gap-4">
          <div className="container">
            <h2 className="mt-14 font-semibold text-lg">
              Konten belajar
              <hr />
            </h2>

            <div className="math font-raleway grid">
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  showLesson("Pengertian & Manfaat Clear Functionality")
                }
              >
                <span className="text-start">
                  Pengertian & Manfaat Clear Functionality
                </span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  showLesson("Penerapan & Prinsip Desain Clear Functionality")
                }
              >
                <span className="text-start">
                  Penerapan & Prinsip Desain Clear Functionality
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>
          {lessonToShow === "Pengertian & Manfaat Clear Functionality" && (
            <div>
              <h4>**Pengertian Prinsip Desain Clear Functionality**</h4>
              <div>
                <p>
                  - Prinsip desain clear functionality adalah konsep penting
                  dalam pengembangan produk yang menekankan kejelasan dan
                  keterbacaan fungsionalitas produk. Dalam materi ini, kita akan
                  membahas prinsip desain functionality beserta manfaatnya dan
                  penerapannya dalam menciptakan pengalaman pengguna yang
                  efisien dan intuitif.
                </p>
                <p>
                  - Prinsip desain clear functionality berkaitan dengan
                  penyajian fungsionalitas produk secara jelas dan mudah
                  dimengerti oleh pengguna. Ini melibatkan pengaturan dan
                  penampilan elemen-elemen antarmuka pengguna dengan cara yang
                  memudahkan pengguna untuk mengidentifikasi, memahami, dan
                  menggunakan fitur-fitur yang tersedia.
                </p>
              </div>

              <h4>**Manfaat Prinsip Desain Clear Functionality**</h4>
              <div>
                <p>
                  - Meningkatkan Kepuasan Pengguna: Dengan memudahkan pengguna
                  untuk menemukan dan menggunakan fitur-fitur produk,
                  keseluruhan pengalaman pengguna menjadi lebih memuaskan.
                </p>
                <p>
                  {" "}
                  - Meningkatkan Efisiensi Penggunaan: Penyajian fungsionalitas
                  yang jelas membantu pengguna menavigasi produk dengan lebih
                  cepat dan efisien, menghemat waktu dan usaha mereka.
                </p>
                <p>
                  - Mengurangi Kesalahan Pengguna: Fungsionalitas yang jelas
                  mengurangi risiko kesalahan pengguna, karena pengguna dapat
                  dengan mudah memahami cara menggunakan produk.
                </p>
                <p>
                  - Meningkatkan Ketercapaian Produk: Dengan memastikan
                  fungsionalitas yang jelas, produk lebih mungkin mencapai
                  tujuan pengguna dengan lebih baik.
                </p>
              </div>
            </div>
          )}

          {lessonToShow ===
            "Penerapan & Prinsip Desain Clear Functionality" && (
            <div>
              <h4>**Penerapan Prinsip Desain Clear Functionality**</h4>
              <div>
                <p>
                  - Pengujian Pengguna: Melakukan pengujian pengguna untuk
                  mengidentifikasi potensi kebingungan atau kesulitan dalam
                  menggunakan fitur-fitur produk.
                </p>
                <p>
                  - Desain Iteratif: Melakukan iterasi desain berdasarkan umpan
                  balik pengguna untuk memastikan fungsionalitas yang jelas dan
                  efisien.
                </p>
                <p>
                  - Dokumentasi yang Jelas: Menyediakan dokumentasi yang jelas
                  dan mudah diakses tentang fitur-fitur produk untuk membantu
                  pengguna memahami cara penggunaannya.
                </p>
                <p>
                  - Pendidikan Pengguna: Menyediakan panduan atau tutorial untuk
                  membantu pengguna mempelajari dan memahami fitur-fitur baru
                  produk.
                </p>
              </div>

              <h4>**Prinsip-prinsip Desain Clear Functionality**</h4>
              <div>
                <p>
                  - Keterbacaan: Menyajikan teks dan informasi terkait
                  fungsionalitas secara jelas dan mudah dimengerti oleh
                  pengguna.
                </p>
                <p>
                  - Nomenclature yang Konsisten: Menggunakan istilah dan
                  kata-kata yang konsisten dalam menyebut fitur-fitur produk
                  untuk menghindari kebingungan pengguna.
                </p>
                <p>
                  - Pengelompokan yang Logis: Mengelompokkan fitur-fitur yang
                  serupa atau terkait secara logis untuk memudahkan pengguna
                  dalam menavigasi produk.
                </p>
                <p>
                  - Tanda Visual: Menggunakan tanda visual seperti ikon atau
                  tombol untuk membedakan dan menyoroti fitur-fitur produk.
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

export default ClearFunctionality;
