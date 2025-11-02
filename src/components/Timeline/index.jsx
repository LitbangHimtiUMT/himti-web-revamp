/* eslint-disable react/prop-types */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export const TimelineItem = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const eventDate = new Date(item.startTime);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="relative flex items-start gap-4 sm:gap-6 pl-5 sm:pl-6">
      <div className="absolute left-10 sm:left-12 top-5 h-full w-px bg-gray-200"></div>
      <div className="z-10 flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400 text-white shadow-md">
        <CalendarDays size={24} />
      </div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex-grow pb-12"
      >
        {/* Kontainer Kartu Layout Responsif */}
        <div className="flex flex-col md:flex-row overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
          
          {/* Wadah Gambar */}
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="aspect-[4/5] w-full object-cover md:max-h-96"
              loading="lazy"
            />
          </div>

          {/* Wadah Teks */}
          <div className="p-6 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    tag === "Pendaftaran Dibuka"
                      ? "bg-green-100 text-green-800 animate-pulse"
                      : "bg-blue-100 text-blue-800"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mt-4 text-2xl font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-yellow-500" />
                  <p className="text-sm font-medium">{item.date}, {item.time}</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-yellow-500" />
                  <p className="text-sm font-medium">{item.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};