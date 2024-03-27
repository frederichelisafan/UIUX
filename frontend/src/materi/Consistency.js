import React, { useState } from "react";
import Navbar from "../component/Navbar";

function Consistency() {
  // State untuk melacak materi pembelajaran yang harus ditampilkan
  const [lessonToShow, setLessonToShow] = useState(null);

  // Fungsi untuk menampilkan materi pembelajaran yang sesuai dengan tombol yang diklik
  const showLesson = (lesson) => {
    setLessonToShow(lesson);
  };

  return (
    <div>
      <Navbar />

      {/*  Main Content */}
      <div className="flex mt-32">
        {/* Tombol-tombol materi pembelajaran */}
        <div className="flex flex-col mr-4">
          <button
            onClick={() =>
              showLesson("Pengertian & Manfaat Prinsip Desain Consistency")
            }
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Pengertian & Manfaat Prinsip Desain Consistency
          </button>
          <button
            onClick={() =>
              showLesson("Penerapan & Macam-macam Prinsip Desain Consistency")
            }
            className="mb-2 py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600"
          >
            Penerapan & Macam-macam Prinsip Desain Consistency
          </button>
        </div>

        {/* Materi pembelajaran yang ditampilkan di sebelah kanan tombol */}
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Consistency;
