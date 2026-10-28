import { ArrowUpRight, LayoutDashboard } from "lucide-react";
import { Poppins } from "../../../components/ui/Text";
import { Badge } from "../../../components/ui/Badges";
import { Button } from "../../../components/ui/Button";
import PortalCard from "../components/PortalCard";
import { mainPlatforms, internalPlatforms } from "../data/platforms";
import himtiLogo from "../../../core/assets/images/himti-logo.png";

// Animasi halaman ini sengaja dibuat sebagai animasi masuk (entrance),
// BUKAN loading yang memblokir: konten langsung bisa dibaca dan diklik,
// logo + kartu hanya muncul berurutan ~700ms. Pengguna yang mengatur
// prefers-reduced-motion tidak mendapat animasi sama sekali
// (lihat aturan di src/index.css).

const PortalPage = () => {
  const internal = internalPlatforms[0];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 animate-fade-in-up">
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
            Semua layanan HIMTI ada di satu tempat ini. Mau belanja,
            belajar, atau ikut voting, tinggal klik kartunya aja, nanti
            kamu langsung sampai ke layanannya.
          </Poppins>
        </div>
      </section>

      {/* Layanan utama: grid seragam, semua kartu sama tinggi.
          Store tetap dibedakan lewat garis kuning di atas kartu dan
          tombol kuningnya, bukan lagi lewat kartu selebar penuh. */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPlatforms.map((platform, index) => (
              <PortalCard
                key={platform.id}
                platform={platform}
                featured={platform.featured}
                style={{ animationDelay: `${100 + index * 120}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Area pengurus: satu baris horizontal, bukan kartu grid yang
          menggantung sendirian. Sengaja dipisah dan dibuat lebih kalem,
          bukan dipajang sejajar dengan layanan publik. */}
      {internal && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8">
              <Poppins className="font-semibold text-gray-900 tracking-wider uppercase text-sm">
                Area Pengurus
              </Poppins>
              <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="p-3 bg-white rounded-full shrink-0 w-fit">
                  <LayoutDashboard className="h-6 w-6 text-gray-800" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {internal.name}
                    </h3>
                    <Badge variant={internal.badgeVariant} rounded="full" size="sm">
                      {internal.audience}
                    </Badge>
                  </div>
                  <Poppins className="mt-1 text-sm text-gray-600">
                    {internal.description}
                  </Poppins>
                  <Poppins className="mt-1 text-sm text-gray-500">
                    {internal.accessNote}
                  </Poppins>
                </div>
                <a
                  href={internal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Button variant="primary" size="md" rounded="full">
                    <span className="flex items-center gap-2 px-4">
                      <span>Buka {internal.shortName}</span>
                      <ArrowUpRight size={18} />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Catatan akses */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Poppins className="text-gray-600">
            Tiap layanan di atas punya aturan sendiri soal siapa yang
            bisa masuk. Ada yang terbuka untuk umum, ada yang khusus
            anggota, pengurus, atau yang sudah diundang. Kalau kamu perlu
            akses ke salah satunya, hubungi pengurus HIMTI aja.
          </Poppins>
        </div>
      </section>
    </div>
  );
};

export default PortalPage;
