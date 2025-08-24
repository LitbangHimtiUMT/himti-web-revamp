import PropTypes from "prop-types";
import clsx from "clsx";
import { Poppins } from "../Text";

const variantClasses = {
  default:
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-solid border-gray-800",
  primary:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-solid border-blue-800",
  secondary:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-solid border-purple-800",
  success:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-solid border-green-800",
  warning:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-solid border-amber-800",
  danger:
    "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-solid border-red-800",
  outline:
    "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 border border-solid border-gray-700",
  ghost:
    "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 border border-solid border-gray-700",
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
