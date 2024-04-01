import React, { useState } from "react";

function Consistency() {
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
                onClick={() =>
                  showLesson("Pengertian & Manfaat Prinsip Desain Consistency")
                }
              >
                <span className="text-start">
                  Pengertian & Manfaat Prinsip Desain Consistency
                </span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  showLesson(
                    "Penerapan & Macam-macam Prinsip Desain Consistency"
                  )
                }
              >
                <span className="text-start">
                  Penerapan & Macam-macam Prinsip Desain Consistency
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-8">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>
          {lessonToShow && (
            <div className="p-4 border border-gray-300 rounded-md">
              {/* Judul materi pembelajaran */}
              <h2 className="text-xl font-semibold mb-2">{lessonToShow}</h2>
              {/* Isi materi pembelajaran */}
              {lessonToShow ===
                "Pengertian & Manfaat Prinsip Desain Consistency" && (
                <div>
                  <h4>**Pengertian Prinsip Desain Consistency**</h4>
                  <div>
                    <p>
                      - Desain Konsistensi adalah prinsip dasar dalam
                      pengembangan produk yang menekankan pentingnya menjaga
                      keseragaman dalam seluruh elemen desain. Hal ini membantu
                      menciptakan pengalaman pengguna yang harmonis dan mudah
                      dipahami. Dalam materi ini, kita akan menjelaskan prinsip
                      desain konsistensi beserta manfaat dan penerapannya.
                    </p>
                    <p>
                      - Desain konsistensi mengacu pada penggunaan elemen-elemen
                      desain yang seragam di seluruh produk atau sistem. Ini
                      termasuk penggunaan warna, font, tata letak, ikon, dan
                      interaksi, yang memungkinkan pengguna untuk merasa
                      familiar dan nyaman saat berinteraksi dengan produk.
                    </p>
                  </div>

                  <h4>**Manfaat Prinsip Desain Consistency**</h4>
                  <div>
                    <p>
                      1. **Memperkuat Citra Merek**: Konsistensi dalam desain
                      membantu membangun citra merek yang kuat dan mudah
                      dikenali oleh pengguna.
                    </p>
                    <p>
                      2. **Meningkatkan Pengalaman Pengguna**: Pengguna akan
                      merasa lebih nyaman dan efisien dalam menggunakan produk
                      jika desainnya konsisten di seluruh platform.
                    </p>
                    <p>
                      3. **Memudahkan Pembelajaran**: Keseragaman memungkinkan
                      pengguna untuk dengan cepat memahami cara menggunakan
                      fitur-fitur baru dalam produk.
                    </p>
                    <p>
                      4. **Meningkatkan Retensi Pengguna**: Pengalaman yang
                      konsisten membuat pengguna lebih cenderung untuk tetap
                      menggunakan produk dalam jangka panjang.
                    </p>
                  </div>
                </div>
              )}
              {lessonToShow ===
                "Penerapan & Macam-macam Prinsip Desain Consistency" && (
                <div>
                  <h4>**Penerapan Prinsip Desain Konsistensi**</h4>
                  <div>
                    <p>
                      1. **Pembuatan Guidelines Desain**: Membuat panduan desain
                      yang merinci penggunaan warna, font, ikon, dan tata letak
                      yang konsisten.
                    </p>
                    <p>
                      2. **Pelatihan Tim Desain**: Melatih anggota tim desain
                      tentang pentingnya dan cara menerapkan desain konsistensi
                      dalam setiap proyek.
                    </p>
                    <p>
                      3. **Penggunaan Template dan Komponen**: Menggunakan
                      template dan komponen desain yang telah ditentukan untuk
                      memastikan konsistensi di seluruh produk.
                    </p>
                    <p>
                      4. **Pengujian dan Iterasi**: Melakukan pengujian pengguna
                      untuk mengidentifikasi masalah konsistensi dan melakukan
                      iterasi desain sesuai kebutuhan.
                    </p>
                  </div>

                  <h4>**Kolom Input (Input Fields)**</h4>
                  <div>
                    <p>
                      - Memungkinkan pengguna untuk memasukkan teks, angka, atau
                      data lainnya.
                    </p>
                    <p>
                      {" "}
                      - Berbagai jenis kolom input termasuk teks, angka,
                      tanggal, dan area teks multi-baris.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          <div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consistency;
