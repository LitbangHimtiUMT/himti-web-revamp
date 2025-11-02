import { XCircle } from "lucide-react";
import { Poppins } from "../ui/Text";
import PropTypes from "prop-types";

export const StatusError = ({
  title = "Terjadi Kesalahan",
  message = "Ups! Ada yang salah. Silakan coba lagi nanti.",
  ctaText = "Coba Lagi",
  onCtaClick,
  showCta = true,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <XCircle className="h-20 w-20 text-red-600 mt-16" />

      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mt-4">
        {title}
      </h1>

      {/* Pesan */}
      <Poppins className="mt-2 max-w-md text-gray-500">{message}</Poppins>

      {/* CTA Button */}
      {showCta && (
        <button
          onClick={onCtaClick}
          className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow hover:bg-red-700 transition"
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

StatusError.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
  showCta: PropTypes.bool,
};
