import React, { useState } from "react";
import MateriContainer from "../component/MateriContainer";

function Flexibility() {
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
                onClick={() => showLesson("Pengertian & Manfaat Flexibility")}
              >
                <span className="text-start">
                  Pengertian & Manfaat Flexibility
                </span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  showLesson("Penerapan & Prinsip Desain Flexibility")
                }
              >
                <span className="text-start">
                  Penerapan & Prinsip Desain Flexibility
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>
          {lessonToShow === "Pengertian & Manfaat Flexibility" && (
            <div>
              <h4>**Pengertian Prinsip Desain Flexibility**</h4>
              <div>
                <p>
                  - Prinsip desain fleksibilitas adalah konsep dalam
                  pengembangan produk yang menekankan pentingnya membangun
                  antarmuka pengguna yang dapat beradaptasi dengan berbagai
                  kebutuhan dan preferensi pengguna. Dalam materi ini, kita akan
                  menjelaskan prinsip desain flexibility beserta manfaat dan
                  penerapannya dalam menciptakan pengalaman pengguna yang
                  inklusif.
                </p>
                <p>
                  - Prinsip desain fleksibilitas melibatkan pengembangan
                  antarmuka pengguna yang mampu beradaptasi dengan berbagai
                  kondisi dan preferensi pengguna. Ini bisa meliputi kemampuan
                  untuk menyesuaikan tata letak, ukuran teks, warna tema, atau
                  bahasa antarmuka pengguna sesuai dengan kebutuhan individu
                  pengguna.
                </p>
              </div>

              <h4>**Manfaat Prinsip Desain Flexibility**</h4>
              <div>
                <p>
                  - Inklusif: Desain yang fleksibel memungkinkan produk diakses
                  dan digunakan oleh beragam pengguna, termasuk mereka dengan
                  kebutuhan khusus.
                </p>
                <p>
                  {" "}
                  - Personalisasi: Pengguna dapat menyesuaikan antarmuka
                  pengguna sesuai dengan preferensi mereka sendiri, meningkatkan
                  kenyamanan dan kepuasan pengguna.
                </p>
                <p>
                  - Skalabilitas: Antarmuka pengguna yang fleksibel dapat dengan
                  mudah berkembang dan beradaptasi seiring dengan perubahan
                  kebutuhan pengguna atau perkembangan produk.
                </p>
                <p>
                  - Dukungan Multibahasa: Fleksibilitas dalam bahasa antarmuka
                  pengguna memungkinkan produk mencapai pasar global dengan
                  lebih efektif.
                </p>
              </div>
            </div>
          )}

          {lessonToShow === "Penerapan & Prinsip Desain Flexibility" && (
            <div>
              <h4>**Penerapan Prinsip Desain Flexibility**</h4>
              <div>
                <p>
                  - Pengaturan Pengguna: Menyediakan opsi pengaturan yang
                  memungkinkan pengguna untuk menyesuaikan pengalaman mereka
                  sendiri, seperti tema warna, ukuran teks, atau kecepatan
                  animasi.
                </p>
                <p>
                  - Kustomisasi Komponen: Mengizinkan pengguna untuk memilih
                  komponen atau fitur yang ingin mereka aktifkan atau
                  nonaktifkan, sesuai dengan kebutuhan mereka.
                </p>
                <p>
                  - Adaptasi Bahasa: Mendukung banyak bahasa dan menyediakan
                  terjemahan antarmuka pengguna untuk menjangkau pengguna
                  global.
                </p>
                <p>
                  - Mode Pengguna: Menawarkan mode pengguna yang berbeda,
                  seperti mode malam atau mode hemat daya, untuk meningkatkan
                  kenyamanan pengguna dalam situasi tertentu.
                </p>
              </div>

              <h4>**Prinsip-prinsip Desain Flexibility**</h4>
              <div>
                <p>
                  - Personalisasi: Memungkinkan pengguna untuk menyesuaikan
                  antarmuka pengguna sesuai dengan preferensi mereka sendiri,
                  seperti ukuran teks atau tema warna.
                </p>
                <p>
                  - Pengaturan: Memberikan pengguna kontrol atas pengaturan dan
                  preferensi mereka, seperti memilih bahasa antarmuka pengguna
                  atau memilih tata letak yang lebih sederhana atau lebih
                  detail.
                </p>
                <p>
                  - Responsif: Menggunakan desain responsif untuk memastikan
                  antarmuka pengguna terlihat dan berfungsi dengan baik di
                  berbagai perangkat dan ukuran layar.
                </p>
                <p>
                  - Modularitas: Membangun antarmuka pengguna dengan pendekatan
                  modular memungkinkan komponen-komponen untuk disusun ulang
                  atau diganti dengan mudah sesuai kebutuhan.
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

export default Flexibility;
