import PropTypes from "prop-types";
import clsx from "clsx";
import { Poppins } from "../Text";

// Sengaja TANPA varian dark: — situs ini memaksa latar putih di semua
// halaman (lihat GridBackground), jadi badge harus selalu tampil dengan
// latar muda + teks gelap. Sebelumnya, di browser dengan OS dark-mode,
// Tailwind mengaktifkan dark:bg-*-900/30 (tint pastel di atas kartu putih)
// dan dark:text-*-300 (teks muda), sehingga teks badge praktis tidak
// terbaca: latar dan teks sama-sama muda, hanya border gelap yang kelihatan.
// Dengan menghapus dark: sepenuhnya, badge tampil identik di mode terang
// maupun gelap, dan kontrasnya terjaga.
const variantClasses = {
  default:
    "bg-gray-100 text-gray-800 border border-solid border-gray-300",
  primary:
    "bg-blue-100 text-blue-800 border border-solid border-blue-200",
  secondary:
    "bg-purple-100 text-purple-800 border border-solid border-purple-200",
  success:
    "bg-green-100 text-green-800 border border-solid border-green-200",
  warning:
    "bg-amber-100 text-amber-800 border border-solid border-amber-200",
  danger:
    "bg-red-100 text-red-800 border border-solid border-red-200",
  outline:
    "border border-gray-300 text-gray-700 border border-solid border-gray-300",
  ghost:
    "text-gray-700 hover:bg-gray-100 border border-solid border-gray-300",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

const sizeText = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const roundedClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const Badge = ({
  variant = "default",
  className,
  children,
  rounded = "md",
  size = "md",
  icon,
  iconPosition = "left",
}) => {
  return (
    <div
      className={clsx(
        "inline-flex items-center font-medium whitespace-nowrap transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        className,
      )}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-1.5">{icon}</span>
      )}
      <Poppins className={`text-[Poppins] ${sizeText[size]}`}>
        {children}
      </Poppins>
      {icon && iconPosition === "right" && (
        <span className="ml-1.5">{icon}</span>
      )}
    </div>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "outline",
    "ghost",
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};
