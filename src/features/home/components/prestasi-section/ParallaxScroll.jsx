/* eslint-disable react/prop-types */
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../../lib/utils";
import { Poppins } from "../../../../components/ui/Text";

// Card component
const Card = ({ item }) => {
  return (
    <div className="h-96 w-full relative rounded-lg overflow-hidden group block">
      {/* Gambar dan Gradient Overlay */}
      <img
        src={item.src}
        className="h-full w-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out"
        alt={item.title}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Konten Teks */}
       <div className="absolute bottom-0 left-0 p-6 text-white flex flex-col justify-end h-full w-full">
        <div>
          {/* Garis Pemisah dengan Animasi */}
          <div className="relative w-full mb-3">
            <div className="h-1 rounded-full w-1/4 bg-yellow-400 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <Poppins className="text-sm text-gray-300 line-clamp-3">
            {item.description}
          </Poppins>
        </div>
      </div>
    </div>
  );
};

// AUDIT (mencegah masalah yang sama seperti di Program Pembelajaran):
// Parallax versi sebelumnya dihitung dari progres SELURUH section
// (useScroll target section, offset ["start end", "end start"]): semua
// kartu di satu kolom digeser dengan nilai y yang SAMA di saat yang
// sama, padahal kartu atas sudah lewat viewport sementara kartu bawah
// belum masuk — jadi gerakannya tidak pernah konsisten dengan kartu
// yang sedang dilihat, dan geseran 150px searah itu juga membuat kartu
// melayang jauh dari slot grid-nya. Versi ini: tiap kartu punya
// useScroll-nya sendiri (target = kartu itu sendiri), jadi geserannya
// selalu berbanding lurus dengan posisi kartu itu di viewport:
// di tengah viewport y = 0 (posisi natural), di tepi viewport bergeser
// maksimal 40px (kolom kiri ke atas, kolom kanan ke bawah). Total
// geseran 80px, jauh di bawah tinggi kartu, jadi tidak ada kartu yang
// menumpuk kartu lain atau meluber ke section berikutnya.
const ParallaxItem = ({ direction, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [40, -40] : [-40, 40]
  );

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export const ParallaxScroll = ({ items, className }) => {
  // Membagi item menjadi dua kolom berdasarkan index (genap/ganjil)
  const leftColumnItems = items.filter((_, index) => index % 2 === 0);
  const rightColumnItems = items.filter((_, index) => index % 2 !== 0);

  return (
    // Tinggi natural mengikuti isi (tidak lagi 45rem + overflow-y-auto):
    // section ini ikut discroll halaman, bukan discroll di dalam dirinya.
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start max-w-5xl mx-auto gap-8 px-4 py-20">
        {/* Kolom Kiri */}
        <div className="grid gap-8">
          {leftColumnItems.map((item, idx) => (
            <ParallaxItem key={`prestasi-left-${idx}`} direction="up">
              <Card item={item} />
            </ParallaxItem>
          ))}
        </div>

        {/* Kolom Kanan */}
        <div className="grid gap-8">
          {rightColumnItems.map((item, idx) => (
            <ParallaxItem key={`prestasi-right-${idx}`} direction="down">
              <Card item={item} />
            </ParallaxItem>
          ))}
        </div>
      </div>
    </div>
  );
};
