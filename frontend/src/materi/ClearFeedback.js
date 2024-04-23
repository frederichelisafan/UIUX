import React, { useState } from "react";
import MateriContainer from "../component/MateriContainer";

function ClearFeedback() {
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
                className="border bg-transparent text-black grid hover:bg-slate-100 focus:bg-primary focus:text-white"
                onClick={() =>
                  showLesson("Pengertian & Manfaat Clear Feedback")
                }
              >
                <span className="text-start">
                  Pengertian & Manfaat Clear Feedback
                </span>
                <div className="flex"></div>
              </button>

              <button
                className="border bg-transparent text-black grid hover:bg-slate-100 focus:bg-primary focus:text-white"
                onClick={() =>
                  showLesson("Penerapan & Prinsip Desain Clear Feedback")
                }
              >
                <span className="text-start">
                  Penerapan & Prinsip Desain Clear Feedback
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h1 className="font-raleway mt-9 mb-3">Choose and Learn with Fun</h1>
          {lessonToShow === "Pengertian & Manfaat Clear Feedback" && (
            <div>
              <h4>**Pengertian Prinsip Desain Clear Feedback**</h4>
              <div>
                <p>
                  - Prinsip desain clear feedback merupakan aspek penting dalam
                  pengembangan produk yang bertujuan untuk memberikan respons
                  yang jelas dan tepat kepada pengguna setiap kali mereka
                  berinteraksi dengan produk. Dalam materi ini, kita akan
                  menjelaskan prinsip desain clear feedback beserta manfaat dan
                  penerapannya dalam menciptakan pengalaman pengguna yang
                  memuaskan.
                </p>
                <p>
                  - Prinsip desain clear feedback mengacu pada memberikan
                  respons yang jelas dan langsung kepada pengguna setiap kali
                  mereka melakukan tindakan atau interaksi dengan produk. Ini
                  melibatkan penggunaan elemen-elemen desain yang memberikan
                  umpan balik visual, auditif, atau bahkan haptic kepada
                  pengguna, memberi mereka informasi yang jelas tentang hasil
                  dari tindakan mereka.
                </p>
              </div>

              <h4>**Manfaat Prinsip Desain Clear Feedback**</h4>
              <div>
                <p>
                  - Memperkuat Pengalaman Pengguna: Respons yang jelas
                  memberikan pengguna pemahaman yang lebih baik tentang apa yang
                  sedang terjadi dalam produk, meningkatkan kepercayaan dan
                  kepuasan mereka.
                </p>
                <p>
                  {" "}
                  - Meminimalkan Ketidakpastian: Pengguna akan merasa lebih
                  yakin dalam menggunakan produk jika mereka mendapatkan umpan
                  balik yang tepat setiap kali mereka melakukan tindakan.
                </p>
                <p>
                  - Meningkatkan Efisiensi Penggunaan: Dengan mendapatkan
                  respons yang jelas, pengguna dapat dengan cepat menilai apakah
                  tindakan mereka berhasil atau tidak, meningkatkan efisiensi
                  penggunaan produk.
                </p>
                <p>
                  - Meningkatkan Retensi Pengguna: Pengguna cenderung tetap
                  menggunakan produk jika mereka merasa terbantu dan mendapatkan
                  umpan balik yang berguna.
                </p>
              </div>
            </div>
          )}

          {lessonToShow === "Penerapan & Prinsip Desain Clear Feedback" && (
            <div>
              <h4>**Penerapan Prinsip Desain Clear Feedback**</h4>
              <div>
                <p>
                  - Animasi: Menggunakan animasi untuk memberikan umpan balik
                  visual, seperti animasi tombol yang ditekan atau transisi
                  antara halaman.
                </p>
                <p>
                  - Notifikasi: Menggunakan notifikasi atau pemberitahuan untuk
                  memberi tahu pengguna tentang hasil dari tindakan mereka,
                  seperti suksesnya pengiriman formulir atau kegagalan koneksi
                  internet.
                </p>
                <p>
                  - Pesan teks: Menampilkan pesan teks yang jelas dan deskriptif
                  untuk memberi tahu pengguna tentang apa yang terjadi, seperti
                  pesan kesalahan atau konfirmasi.
                </p>
                <p>
                  - Suara atau Getaran: Menggunakan suara atau getaran untuk
                  memberikan umpan balik auditif atau haptic kepada pengguna,
                  terutama dalam situasi di mana respons visual tidak
                  memungkinkan.
                </p>
              </div>

              <h4>**Prinsip-prinsip Desain Clear Feedback**</h4>
              <div>
                <p>
                  - Keterlihatan: Umpan balik harus mudah dilihat dan
                  ditempatkan di lokasi yang mudah diakses oleh pengguna.
                </p>
                <p>
                  - Konsistensi: Respons harus konsisten dalam desain dan
                  perilaku di seluruh produk.
                </p>
                <p>
                  - Relevansi: Umpan balik harus relevan dengan tindakan yang
                  dilakukan oleh pengguna, memberikan informasi yang tepat pada
                  waktu yang tepat.
                </p>
                <p>
                  - Jelas dan Tepat: Respons harus jelas dan langsung, tidak
                  menyebabkan kebingungan atau ketidakpastian bagi pengguna.
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

export default ClearFeedback;
