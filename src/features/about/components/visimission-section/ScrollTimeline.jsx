/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "../../../../lib/utils";
import { Poppins } from "../../../global/components/Text";

export const ScrollTimeline = ({ events, className }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newIndex = Math.floor(v * events.length);
      if (newIndex >= 0 && newIndex < events.length) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length]);

  return (
    <div ref={scrollRef} className={cn("relative w-full py-12", className)}>
      <div className="relative max-w-3xl mx-auto px-4">
        {/* Garis Timeline */}
        <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-slate-200" />
        <motion.div
          className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-0 w-1 bg-blue-500"
          style={{ height: progressHeight }}
        />

        {/* Konten Timeline */}
        <div className="relative z-10 space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative flex items-center lg:items-start"
            >
              {/* Titik Ikon di Tengah */}
              <motion.div
                className="absolute top-0 lg:top-1/2 -translate-y-1/2 left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 border-4 flex items-center justify-center"
                animate={{
                  borderColor: index <= activeIndex ? "#3b82f6" : "#e1e3e7ff",
                  scale: index === activeIndex ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {event.icon}
              </motion.div>

              {/* Kartu Konten */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={cn(
                  "w-[calc(100%-4rem)] ml-auto lg:w-[calc(50%-40px)] p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg",
                  index % 2 === 0 ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0",
                )}
              >
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <Poppins className="mt-2 text-slate-300">
                  {event.description}
                </Poppins>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
