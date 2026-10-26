import { Poppins } from "../../../components/ui/Text";
import PortalCard from "../components/PortalCard";
import { platforms, mainPlatforms, internalPlatforms } from "../data/platforms";
import himtiLogo from "../../../core/assets/images/himti-logo.png";

// Animasi halaman ini sengaja dibuat sebagai animasi masuk (entrance),
// BUKAN loading yang memblokir: konten langsung bisa dibaca dan diklik,
// logo + kartu hanya muncul berurutan ~700ms. Pengguna yang mengatur
// prefers-reduced-motion tidak mendapat animasi sama sekali
// (lihat aturan di src/index.css).

const PortalPage = () => {
  const featured = platforms.find((item) => item.featured);
  const restMain = mainPlatforms.filter((item) => !item.featured);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={himtiLogo}
            alt="HIMTI"
            className="h-20 mx-auto animate-fade-in-up"
          />
          <Poppins className="mt-6 text-white font-semibold bg-gradient-to-r from-[#4C76A3] to-[#203D5D] px-6 py-2 rounded-full tracking-wider uppercase text-sm mx-auto w-fit">
            Portal HIMTI
          </Poppins>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Satu Pintu ke Platform HIMTI
          </h1>
          <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Setiap platform di bawah ini punya sistemnya sendiri. Portal ini
            hanya mengarahkan, bukan menyimpan katalog, materi, atau data
            voting — jadi tidak ada dua tempat yang harus dirawat.
          </Poppins>
        </div>
      </section>

      {/* Layanan utama: Danus featured, lalu LMS + Election */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featured && (
            <PortalCard platform={featured} featured style={{ animationDelay: "100ms" }} />
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {restMain.map((platform, index) => (
              <PortalCard
                key={platform.id}
                platform={platform}
                style={{ animationDelay: `${200 + index * 120}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Area pengurus: sengaja dipisah dan dibuat lebih kalem,
          bukan dipajang sejajar dengan layanan publik. */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8">
            <Poppins className="font-semibold text-gray-900 tracking-wider uppercase text-sm">
              Area Pengurus
            </Poppins>
            <Poppins className="mt-2 text-gray-600">
              Platform internal di bawah ini hanya untuk pengurus HIMTI.
            </Poppins>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {internalPlatforms.map((platform) => (
                <PortalCard key={platform.id} platform={platform} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catatan akses */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Poppins className="text-gray-600">
            Tautan di atas hanya mengarahkan ke platform masing-masing.
            Kalau kamu belum punya akses (misalnya belum jadi anggota,
            belum jadi pengurus, atau belum di-invite admin Election),
            silakan hubungi pengurus HIMTI — portal ini tidak bisa
            memberikan akses tersebut.
          </Poppins>
        </div>
      </section>
    </div>
  );
};

export default PortalPage;
