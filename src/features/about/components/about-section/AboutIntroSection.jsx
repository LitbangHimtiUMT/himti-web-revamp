import { useRef, useState } from "react";
import { Poppins } from "../../../global/components/Text";
import { Cover } from "./Cover";
import { motion } from "framer-motion";
import { DraggableCard } from "./DraggableCard";

// Data card angkatan
const initialAngkatanData = [
  {
    title: "Bootcamp Angkatan 2021",
    image: "/images/bootcamp/himti-bootcamp21.jpg",
  },
  {
    title: "Bootcamp Angkatan 2022",
    image: "/images/bootcamp/himti-bootcamp22.jpg",
  },
  {
    title: "Bootcamp Angkatan 2023",
    image: "/images/bootcamp/himti-bootcamp23.jpg",
  },
  {
    title: "Bootcamp Angkatan 2024",
    image: "/images/bootcamp/himti-bootcamp24.jpg",
  },
];

export default function AboutIntroSection() {
  const constraintsRef = useRef(null);
  const [cards, setCards] = useState(initialAngkatanData);

  const handleCardClick = (clickedIndex) => {
    const newCards = [...cards];
    const clickedCard = newCards.splice(clickedIndex, 1);
    newCards.push(clickedCard[0]);
    setCards(newCards);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start"
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            Our Story <Cover>About HIMTI</Cover>
          </h1>

          <Poppins className="text-lg text-gray-700 max-w-xl">
            Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah
            Tangerang (HIMTI-UMT) adalah wadah pengembangan diri mahasiswa, yang
            tidak hanya berfokus pada organisasi, tetapi juga mendorong prestasi
            akademik.
          </Poppins>

          <div className="text-gray-600 space-y-4 max-w-xl border-l-4 border-yellow-400 pl-4">
            <Poppins>
              Sejak berdiri pada 09 Oktober 2011, HIMTI UMT hadir untuk
              mendukung mahasiswa Teknik Informatika agar lebih berkembang baik
              dalam ranah akademik maupun non-akademik.
            </Poppins>
            <Poppins>
              Didirikan oleh Muhammad Jonni, S.Kom., M.Kom., HIMTI UMT
              berkomitmen menjadi ruang belajar, berkolaborasi, dan
              berkontribusi dalam menghadapi tantangan teknologi masa kini.
            </Poppins>
          </div>
        </motion.div>

        {/* --- Kolom Kanan Card--- */}
        <div
          ref={constraintsRef}
          className="relative w-full h-[450px] flex items-center justify-center"
        >
          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              className="absolute cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              onTap={() => handleCardClick(index)}
              style={{ transformOrigin: "bottom center" }}
              animate={{
                x: (cards.length - 1 - index) * 10,
                y: (cards.length - 1 - index) * 10,
                scale: 1 - (cards.length - 1 - index) * 0.05,
                zIndex: index,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <DraggableCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
