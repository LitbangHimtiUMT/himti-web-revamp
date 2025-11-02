/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const FramedPhoto = ({ imageUrl, altText, size }) => {

  const sizeClass = size
    ? size
    : "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg";

  return (
  <motion.div
  className={`relative w-full mx-auto group ${sizeClass}`}
  whileHover={{ scale: 1.05, rotate: -2 }} 
  transition={{ type: "spring", stiffness: 300, damping: 15 }}
>

      {/* Background glow */}
      <div 
        className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-yellow-400 to-blue-600 blur-sm 
                   transition-all duration-500 group-hover:blur-md group-hover:-inset-3" 
      />

      <div className="relative p-2 bg-white rounded-2xl shadow-lg">
        {/* Foto dengan inner shadow */}
        <img
          src={imageUrl}
          alt={altText}
          className="w-full aspect-[6/4] object-cover rounded-lg shadow-inner"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};
