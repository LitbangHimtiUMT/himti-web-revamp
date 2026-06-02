/* eslint-disable react/prop-types */
import React from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "../../../components/ui/Text";
import successAnimation from "../../../core/assets/animation/succes.json";
import { ExternalLink } from "lucide-react";

export const SuccessModal = ({
  onClose,
  show,
  title = "Pendaftaran Berhasil!",
  message = "Selamat! Pendaftaran Anda berhasil diproses.",
  link = "", 
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex flex-col items-center rounded-3xl bg-white p-8 sm:p-10 text-center shadow-2xl max-w-md w-full relative overflow-hidden"
          >
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500" />

            {/* Glowing Lottie container */}
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-2xl scale-75 animate-pulse" />
              <div className="relative bg-emerald-50 rounded-full p-4 ring-8 ring-emerald-50/50">
                <Lottie
                  animationData={successAnimation}
                  loop={true}
                  className="w-28 h-28"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              {title}
            </h3>

            {/* Message/Description */}
            <Poppins className="mb-8 text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              <p>{message}</p>
              {link && (
                <p className="mt-3 text-xs sm:text-sm text-slate-400 font-normal italic">
                  Dapatkan informasi penting dan update terbaru dengan bergabung ke grup WhatsApp resmi di bawah ini.
                </p>
              )}
            </Poppins>

            {/* Call to Actions */}
            <div className="w-full flex flex-col gap-3">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <ExternalLink size={18} className="stroke-[2.5]" />
                  Gabung Grup WhatsApp
                </a>
              )}
              <button
                onClick={onClose}
                className={`w-full py-3.5 px-6 font-bold rounded-xl transition-all duration-300 active:scale-[0.98] cursor-pointer ${
                  link
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800"
                    : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg shadow-blue-600/20"
                }`}
              >
                Tutup
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
