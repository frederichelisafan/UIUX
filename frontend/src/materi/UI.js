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
                  <h4>**Apa itu User Interface**</h4>
                  <div>
                    <p>
                      User Interface (UI) merujuk pada segala sesuatu yang
                      memungkinkan pengguna berinteraksi dengan sebuah produk
                      atau sistem. UI merupakan titik kontak utama antara
                      pengguna dan teknologi, dan memiliki peran penting dalam
                      menentukan kualitas pengalaman pengguna.
                    </p>
                  </div>

                  <h4>**Komponen-komponen Utama UI**</h4>
                  <div>
                    <p>
                      UI merupakan antarmuka antara pengguna dan sistem yang
                      memungkinkan pengguna untuk berinteraksi dengan aplikasi
                      melalui elemen-elemen visual seperti tombol, menu, input
                      fields, gambar, cards, icons dan lain sebagainya.
                    </p>
                  </div>
                </div>
              )}
              {lessonToShow === "Buttons & Input Fields" && (
                <div>
                  <h4>**Tombol (Buttons)**</h4>
                  <div>
                    <p>
                      - Merepresentasikan tindakan yang dapat dilakukan oleh
                      pengguna, seperti "Kirim", "Simpan", atau "Batal".
                    </p>
                    <p>
                      - Penting untuk memberikan tombol dengan label yang jelas
                      dan mudah dimengerti.
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
              {lessonToShow === "Dropdown Menu & Radio Buttons" && (
                <div>
                  <h4>Menu Drop-down (Dropdown Menus)</h4>
                  <div>
                    <p>
                      - Menyediakan pilihan yang dapat dipilih oleh pengguna
                      dengan cara mengklik atau mengarahkan kursor ke menu.
                    </p>
                    <p>
                      - Berguna untuk menyajikan opsi yang luas dalam ruang yang
                      terbatas.
                    </p>
                  </div>

                  <h4>**Tombol Radio(Radio Buttons)**</h4>
                  <div>
                    <p>
                      - Digunakan untuk memungkinkan pengguna memilih satu atau
                      beberapa opsi dari beberapa pilihan.
                    </p>
                    <p>
                      - Checkbox memungkinkan pengguna memilih beberapa opsi,
                      sementara tombol radio memungkinkan pemilihan tunggal.
                    </p>
                  </div>
                </div>
              )}

              {lessonToShow === "Lists & Icons" && (
                <p>
                  <h4>**Daftar (Lists)**</h4>
                  <div>
                    <p>
                      - Menampilkan sejumlah item dalam urutan tertentu, seperti
                      daftar kontak atau hasil pencarian.
                    </p>
                    <p>
                      - Memberikan navigasi dan visibilitas yang baik terhadap
                      item-item yang ditampilkan.
                    </p>
                  </div>

                  <h4>**Ikon (Icons)**</h4>
                  <div>
                    <p>
                      - Merepresentasikan fungsi atau tindakan dengan simbol
                      visual.
                    </p>
                    <p>
                      - Berguna untuk menghemat ruang dan menyediakan informasi
                      dengan cara yang lebih cepat.
                    </p>
                  </div>
                </p>
              )}

              {lessonToShow === "Navigation Bar & Cards" && (
                <p>
                  <h4>**Bilah Navigasi (Navigation Bars)**</h4>
                  <div>
                    <p>
                      - Memberikan akses cepat ke berbagai bagian atau fitur
                      dalam sebuah aplikasi atau situs web.
                    </p>
                    <p>
                      - Penting untuk menjaga konsistensi dalam navigasi untuk
                      memudahkan pengguna dalam berpindah halaman.
                    </p>
                  </div>

                  <h4>**Kartu (Cards)**</h4>
                  <div>
                    <p>
                      - Menyajikan informasi atau konten dalam unit terpisah
                      dengan judul, gambar, dan teks.
                    </p>
                    <p>
                      - Berguna untuk membagi konten menjadi bagian-bagian yang
                      lebih terorganisir dan mudah dinavigasi.
                    </p>
                  </div>
                </p>
              )}
              {lessonToShow === "Alerts & Checkboxes" && (
                <p>
                  <h4>**Pemberitahuan (Alerts)**</h4>
                  <div>
                    <p>
                      - Memberikan informasi penting kepada pengguna, seperti
                      kesalahan validasi formulir atau konfirmasi tindakan.
                    </p>
                    <p>
                      - Perlu diperhatikan agar pemberitahuan tidak mengganggu
                      pengalaman pengguna yang sedang berlangsung.
                    </p>
                  </div>

                  <h4>**Kotak Centang (Checkboxes)</h4>
                  <div>
                    <p>
                      - Digunakan untuk memungkinkan pengguna memilih satu atau
                      beberapa opsi dari beberapa pilihan.
                    </p>
                    <p>
                      - Checkbox memungkinkan pengguna memilih beberapa opsi,
                      sementara tombol radio memungkinkan pemilihan tunggal.
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
