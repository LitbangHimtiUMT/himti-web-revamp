import TeamCarousel from "./TeamCarousel";
import { Poppins } from "../../../global/components/Text";

// Data dosen/kaprodi
const teamMembers = [
  {
    id: "1",
    name: "Yani Sugiyani S.Kom, M.Kom, M.M",
    role: "Kaprodi Teknik Informatika",
    image: "/images/soprodi/dosen-yani.jpg",
    bio: "Dosen ahli di bidang rekayasa perangkat lunak dan manajemen proyek.",
  },
  {
    id: "2",
    name: "Dyas Yudi Priyanggodo S.Kom, M.Kom",
    role: "Sekprodi Teknik Infomatika",
    image: "/images/soprodi/dosen-dyas.jpg",
    bio: "Berfokus pada pengembangan Mobile Apps modern",
  },
  {
    id: "3",
    name: "Faridi S.Kom, M.Kom",
    role: "Ka. Labolatorium",
    image: "/images/soprodi/dosen-faridi.jpg",
    bio: "Spesialis di bidang keamanan siber dan jaringan komputer.",
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
