import { ParallaxScroll } from "./ParallaxScroll";
import { Poppins } from "../../../global/components/Text";

export default function PrestasiSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center animate-fade-in-up">
        <Poppins className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
          Pencapaian Kami
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Jejak Prestasi HIMTI UMT
        </h2>
        <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Beberapa dari sekian banyak pencapaian yang telah diraih oleh anggota
          dan tim HIMTI dalam berbagai kompetisi nasional.
        </Poppins>
      </div>

      <ParallaxScroll items={prestasiItems} />

      <div className="text-center pb-20" />
    </section>
  );
}

const prestasiItems = [
  {
    title: "Lomba Startup Inovation",
    description:
      "Diadakan oleh PERMIKOMNAS Wilayah IV Banten (10-11 April 2021).",
    badge: "Juara II",
    src: "/images/prestasi/lomba-startup.jpg",
  },
  {
    title: "Lomba Short Movie",
    description: "Diadakan oleh BEM Global Institute (21 April 2021).",
    badge: "Juara II",
    src: "/images/prestasi/lomba-shortmovie.jpg",
  },
  {
    title: "Lomba Design Grafis",
    description: "Diadakan oleh Universitas Darma Persada, Jakarta Timur.",
    badge: "Juara II",
    src: "/images/prestasi/lomba-design.jpg",
  },
  {
    title: "Lomba Poster",
    description: "Diadakan oleh PERMIKOMNAS wilayah 4 Banten.",
    badge: "Juara III",
    src: "/images/prestasi/lomba-poster.jpg",
  },
  {
    title: "Hackathon Nasional",
    description: "Kompetisi 24 jam membangun aplikasi inovatif.",
    badge: "Juara I",
    src: "/images/prestasi/lomba-hackathon.jpg",
  },
  {
    title: "UI/UX Competition",
    description: "Kompetisi desain antarmuka tingkat nasional.",
    badge: "Finalis",
    src: "/images/prestasi/lomba-uiux.jpg",
  },
];
