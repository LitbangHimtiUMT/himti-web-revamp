import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MoveUpRight as ArrowIcon } from "lucide-react";
import { Poppins } from "../../../../components/ui/Text";
import { Link } from "react-router-dom";
import himti21 from "../../../../core/assets/images/bootcamp/himti-bootcamp21.jpg";
import himti22 from "../../../../core/assets/images/bootcamp/himti-bootcamp22.jpg";
import himti23 from "../../../../core/assets/images/bootcamp/himti-bootcamp23.jpg";
import himti24 from "../../../../core/assets/images/bootcamp/himti-bootcamp24.jpg";

// Updated data to be more relevant
const visualData = [
  {
    key: 1,
    url: himti21,
    label: "Galeri Angkatan 2021",
  },
  {
    key: 2,
    url: himti22,
    label: "Galeri Angkatan 2022",
  },
  {
    key: 3,
    url: himti23,
    label: "Galeri Angkatan 2023",
  },
  {
    key: 4,
    url: himti24,
    label: "Galeri Angkatan 2024",
  },
];

export default function ImageReveal() {
  const [focusedItem, setFocusedItem] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  // Ukuran preview, dipakai untuk menjepit posisinya ke dalam viewport.
  const PREVIEW_WIDTH = 300;
  const PREVIEW_HEIGHT = 400;
  const PREVIEW_MARGIN = 16;
  // Jepit posisi akhir (setelah spring) agar gambar TIDAK PERNAH keluar
  // viewport: untuk baris terbawah, gambar bergeser ke atas, bukan
  // kepotong di bawah. window dibaca di tiap pemanggilan transform,
  // jadi tetap benar walau ukuran jendela berubah.
  const previewX = useTransform(smoothX, (v) =>
    Math.min(
      Math.max(v, PREVIEW_MARGIN),
      Math.max(PREVIEW_MARGIN, window.innerWidth - PREVIEW_WIDTH - PREVIEW_MARGIN)
    )
  );
  const previewY = useTransform(smoothY, (v) =>
    Math.min(
      Math.max(v, PREVIEW_MARGIN),
      Math.max(PREVIEW_MARGIN, window.innerHeight - PREVIEW_HEIGHT - PREVIEW_MARGIN)
    )
  );

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const onMouseTrack = (e) => {
    // Targetnya pojok kiri-atas gambar (bukan tengah), supaya jepitan
    // di previewX/previewY langsung bekerja pada tepi gambar.
    cursorX.set(e.clientX - PREVIEW_WIDTH / 2);
    cursorY.set(e.clientY - PREVIEW_HEIGHT / 2);
  };

  const onHoverActivate = (item) => {
    setFocusedItem(item);
  };

  const onHoverDeactivate = () => {
    setFocusedItem(null);
  };

  return (
    <div
      className="relative mx-auto w-full min-h-80 bg-background rounded-md border overflow-hidden"
      onMouseMove={onMouseTrack}
      onMouseLeave={onHoverDeactivate}
    >
      {visualData.map((item) => (
        <Link
          to="/tentang#angkatan-gallery" // Points to the About page and a specific section
          key={item.key}
          className="p-2 cursor-pointer relative sm:flex items-center justify-between"
          onMouseEnter={() => onHoverActivate(item)}
        >
          {!isLargeScreen && (
            <img
              src={item.url}
              className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
              alt={item.label}
              loading="lazy"
            />
          )}

          <Poppins
            className={`newFont uppercase md:text-4md sm:text-2xl text-xl font-semibold sm:py-1 py-2 leading-[100%] relative transition-colors duration-300 ${
              focusedItem?.key === item.key
                ? "mix-blend-difference z-20 text-gray-300"
                : "text-foreground"
            }`}
          >
            {item.label}
          </Poppins>

          <button
            className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out ${
              focusedItem?.key === item.key
                ? "mix-blend-difference z-20 bg-white text-black"
                : ""
            }`}
          >
            <ArrowIcon className="w-8 h-8" />
          </button>

          {/* underline animasi */}
          <div
            className={`h-[2px] bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
              focusedItem?.key === item.key ? "w-full" : "w-0"
            }`}
          />
        </Link>
      ))}

      {/* gambar preview — dirender lewat portal ke <body>, BUKAN di dalam
          container ini. Alasannya dua lapis, dan keduanya penyebab
          kepotongnya foto baris terbawah (2023/2024):
          1. Section induk punya `overflow-hidden` + animasi fade-in-up
             yang fill-mode-nya `both`, sehingga transform-nya menempel
             selamanya dan section itu menjadi containing block untuk
             `position: fixed` — gambar yang tadinya fixed ke viewport
             malah terjepit ke kotak section dan kepotong di bawahnya.
          2. Gambar lama dipusatkan di kursor (y: -50%, tinggi 400px),
             jadi untuk baris terbawah setengah gambar jatuh di bawah
             section/viewport.
          Dengan portal + jepitan viewport di atas, gambar selalu utuh
          di dalam layar, menggeser ke atas kalau kursor dekat bawah. */}
      {isLargeScreen && focusedItem &&
        createPortal(
          <motion.img
            src={focusedItem.url}
            alt={focusedItem.label}
            className="fixed z-30 object-cover w-[300px] h-[400px] rounded-lg pointer-events-none shadow-2xl dark:bg-gray-950 bg-white"
            style={{
              left: previewX,
              top: previewY,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />,
          document.body
        )}
    </div>
  );
}