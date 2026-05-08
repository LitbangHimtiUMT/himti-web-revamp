import TeamCarousel from "./TeamCarousel";
import { Poppins } from "../../../../components/ui/Text";
import kaProdi from "../../../../core/assets/images/soprodi/dosen-arief.jpg";
import sekProdi from "../../../../core/assets/images/soprodi/dosen-sukri.jpg";
import kaLab from "../../../../core/assets/images/soprodi/dosen-faridi.jpg";


// Data dosen/kaprodi
const teamMembers = [
  {
    id: "1",
    name: "Arief Herdiansah, M.TI",
    role: "Ketua Prodi Teknik Informatika",
    image: kaProdi,
    bio: "Memimpin pengembangan akademik Program Studi Teknik Informatika periode 2026 – 2030 dengan fokus pada inovasi dan kualitas pendidikan.",
  },
  {
    id: "2",
    name: "Sukri Harli, M.TI",
    role: "Sekretaris Prodi Teknik Informatika",
    image: sekProdi,
    bio: "Berperan dalam pengelolaan administrasi akademik dan pengembangan program kerja Prodi Teknik Informatika.",
  },
  {
    id: "3",
    name: "Faridi, M.Kom",
    role: "Kepala Laboratorium Komputer",
    image: kaLab,
    bio: "Berfokus pada pengembangan laboratorium komputer, praktikum, serta penguatan kompetensi teknologi mahasiswa.",
  },
];

export default function SoProdiSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <Poppins className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
          Dukungan Akademik
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Struktural Program Studi
        </h2>
        <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
          Di bawah bimbingan para ahli di bidangnya, HIMTI UMT terus didukung
          untuk mencapai keunggulan akademik dan organisasi.
        </Poppins>
      </div>
      <div className="mt-12">
        <TeamCarousel members={teamMembers} />
      </div>
    </section>
  );
}
