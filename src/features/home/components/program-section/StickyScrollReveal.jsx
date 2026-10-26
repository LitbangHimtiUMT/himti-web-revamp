/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const itemRefs = useRef([]);

  // AKAR INKONSISTENSI SEBELUMNYA (2 hal, keduanya diperbaiki di sini):
  //
  // 1. Kartu aktif dulu dihitung dari progres SELURUH section
  //    (useScroll target + offset ["start start", "end end"], breakpoint
  //    index / jumlahKartu = 0, 0.25, 0.5, 0.75). Progres itu dinormalisasi
  //    ke (tinggiSection - tinggiViewport), sedangkan jarak antar item
  //    di kolom kiri jauh lebih besar — jadi kartu aktif berganti 2x
  //    lebih cepat daripada item yang benar-benar lewat di layar, dan
  //    gambar di kanan tidak pernah sejajar dengan teks yang sedang
  //    dibaca. Sekarang kartu aktif ditentukan per item: sebuah item
  //    menjadi aktif tepat saat judulnya masuk ke pita 35%-45% tinggi
  //    viewport (rootMargin "-35% 0px -55% 0px"). Dengan begitu, ganti
  //    gambar selalu bertepatan dengan item yang sedang dibaca, tidak
  //    peduli berapa tinggi item, tinggi section, atau tinggi viewport.
  //
  // 2. Gambar sticky dulu top-10 (40px), sedangkan navbar fixed di
  //    top-4 (16px) + tinggi ~64px = ujung bawahnya di ~80px. Jadi
  //    gambar sticky selalu menyelip 40px DI BAWAH navbar (terlihat
  //    kepotong/blur di screenshot). Sekarang top-24 (96px) = ujung
  //    bawah navbar + jarak 16px, jadi gambar selalu utuh di bawah
  //    navbar.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCard(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content.length]);

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="flex justify-center items-start relative space-x-10 rounded-md p-10"
    >
      <div className="div relative flex text-center md:text-left px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20"
              data-index={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-500"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-700 max-w-sm mt-10"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-24 overflow-hidden",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
