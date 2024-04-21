import React, { useState } from "react";
import MateriContainer from "../component/MateriContainer";

function Simplicity() {
  // State untuk melacak materi pembelajaran yang harus ditampilkan
  const [lessonToShow, setLessonToShow] = useState(null);

  // Fungsi untuk menampilkan materi pembelajaran yang sesuai dengan tombol yang diklik
  const showLesson = (lesson) => {
    setLessonToShow(lesson);
  };

  return (
    <MateriContainer>
      <div className="flex justify-center gap-4">
        <div className="flex shrink-0">
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

        <div class="w-full">
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

export default Simplicity;
