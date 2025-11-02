import PropTypes from "prop-types";

const Shimmer = ({ children, className, ...props }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-md font-medium text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
      {...props}
    >
      {/* Lapisan animasi background */}
      <span
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)`,
          backgroundSize: "200% 100%",
          animation: "loading 2s infinite ease-in-out",
        }}
      ></span>
      {/* Konten (teks) tombol */}
      <span className="relative z-10 px-6 py-3">{children}</span>
    </button>
  );
};

Shimmer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Shimmer;