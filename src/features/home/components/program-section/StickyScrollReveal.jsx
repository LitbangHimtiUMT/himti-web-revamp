/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // SOLUSI untuk "page utama ikut ke-scroll":
  //
  // Section ini KEMBALI discroll di dalam dirinya sendiri (container
  // tinggi tetap + overflow-y-auto), bukan lewat scroll halaman.
  // Akibatnya, saat kursor/roda scroll berada di atas section ini,
  // yang bergerak hanya isi section ini — teks bergeser, gambar kanan
  // berganti — sementara halaman utama DIAM di tempat, sampai isi
  // section mencapai ujung atas/bawah, baru setelah itu scroll halaman
  // berlanjut ke section berikutnya. Itu perilaku native nested scroll
  // container di browser, bukan scroll-jacking buatan.
  //
  // Dua keluhan sebelumnya tetap terjaga:
  // - Tidak ada scrollbar kedua yang KELIHATAN: scrollbar container
  //   disembunyikan total lewat `.no-visible-scrollbar` (lihat index.css),
  //   tapi area tetap bisa discroll. Yang kelihatan cuma scrollbar halaman.
  // - Kartu aktif tetap konsisten (perbaikan dari commit sebelumnya):
  //   bukan dari progres section, melainkan per item — item menjadi aktif
  //   tepat saat judulnya masuk pita 35%-45% dari kotak container ini.
  //   Bedanya dengan versi sebelumnya: root observer sekarang container
  //   itu sendiri, bukan viewport halaman.
  //
  // Dan satu hal yang ikut kembali normal: gambar sticky di sini
  // `top-10` (40px dari atas KOTAK container, bukan dari atas viewport),
  // jadi tidak lagi menyelip di bawah navbar fixed seperti pada versi
  // scroll-halaman kemarin.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCard(Number(entry.target.dataset.index));
          }
        });
      },
      { root: container, rootMargin: "-35% 0px -55% 0px", threshold: 0 }
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
      className="h-[30rem] overflow-y-auto no-visible-scrollbar flex justify-center items-start relative space-x-10 rounded-md p-10"
      ref={containerRef}
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
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
