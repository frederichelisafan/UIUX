import React, { useState } from "react";
import MateriContainer from "../component/MateriContainer";

function UI() {
  // State untuk melacak materi pembelajaran yang harus ditampilkan
  const [lessonToShow, setLessonToShow] = useState(null);

  // Fungsi untuk menampilkan materi pembelajaran yang sesuai dengan tombol yang diklik
  const showLesson = (lesson) => {
    setLessonToShow(lesson);
  };

  return (
    <MateriContainer>
      {/*  Main Content */}

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
                onClick={() => showLesson("Pengertian & Komponen Utama UI")}
              >
                <span className="text-start">
                  Pengertian & Komponen Utama UI
                </span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid"
                onClick={() => showLesson("Buttons & Input Fields")}
              >
                <span className="text-start">Buttons & Input Fields</span>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() => showLesson("Dropdown Menu & Radio Buttons")}
              >
                <span className="text-start">
                  Dropdown Menu & Radio Buttons
                </span>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() => showLesson("Lists & Icons")}
              >
                <span className="text-start">Lists & Icons</span>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() => showLesson("Navigation Bar & Cards")}
              >
                <span className="text-start">Navigation Bar & Cards</span>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() => showLesson("Alerts & Checkboxes")}
              >
                <span className="text-start">Alerts & Checkboxes</span>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>
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

          <div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </MateriContainer>
  );
}

export default UI;
