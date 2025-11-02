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
      

export const ParallaxScroll = ({ items, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"], // Animate from the start to the end of the container
  });

  // Transform untuk kolom kiri (bergerak ke atas)
  const translateUp = useTransform(scrollYProgress, [0, 1], [0, -150]);
  // Transform untuk kolom kanan (bergerak ke bawah)
  const translateDown = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Membagi item menjadi dua kolom berdasarkan index (genap/ganjil)
  const leftColumnItems = items.filter((_, index) => index % 2 === 0);
  const rightColumnItems = items.filter((_, index) => index % 2 !== 0);

  return (
    // Container dengan tinggi tetap dan scrollable, ini adalah kunci efek parallax
    <div
      ref={gridRef}
      className={cn("h-[45rem] w-full overflow-y-auto", className)}
    >
      {/* Padding di dalam agar ada ruang untuk scroll */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-start max-w-5xl mx-auto gap-8 px-4 py-20"
      >
        {/* Kolom Kiri */}
        <div className="grid gap-8">
          {leftColumnItems.map((item, idx) => (
            <motion.div
              style={{ y: translateUp }} // Terapkan animasi bergerak ke atas
              key={`prestasi-left-${idx}`}
            >
              <Card item={item} />
            </motion.div>
          ))}
        </div>

        {/* Kolom Kanan */}
        <div className="grid gap-8">
          {rightColumnItems.map((item, idx) => (
            <motion.div
              style={{ y: translateDown }} // Terapkan animasi bergerak ke bawah
              key={`prestasi-right-${idx}`}
            >
              <Card item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};