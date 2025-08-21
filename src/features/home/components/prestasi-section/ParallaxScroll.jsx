/* eslint-disable react/prop-types */
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../../lib/utils";
import { Poppins } from "../../../global/components/Text";
import { ArrowUpRight } from "lucide-react";

// Komponen Card dalam grid
const Card = ({ item }) => {
  return (
    <div className="h-80 w-full relative rounded-lg overflow-hidden group">
      <img
        src={item.src}
        className="h-full w-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out"
        alt={item.title}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6 text-white flex flex-col justify-end h-full">
        <span className="inline-block w-17 bg-yellow-500 text-black px-3 py-1 text-xs font-semibold rounded-full mb-2">
          {item.badge}
        </span>
        <h3 className="text-xl font-bold">{item.title}</h3>
        <Poppins className="text-sm mt-1 text-gray-300">
          {item.description}
        </Poppins>
        <a
          href="#"
          className="flex items-center gap-1 mt-4 text-yellow-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Read More <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

export const ParallaxScroll = ({ items, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(items.length / 3);
  const firstPart = items.slice(0, third);
  const secondPart = items.slice(third, 2 * third);
  const thirdPart = items.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((item, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <Card item={item} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((item, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Card item={item} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((item, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Card item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
