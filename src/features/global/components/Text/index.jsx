import clsx from "clsx";

// eslint-disable-next-line react/prop-types
export const Poppins = ({ children, ...rest }) => {
  return (
    <p
      id="poppins"
      {...rest}
      className={clsx("font-[Poppins]", rest.className)}
    >
      {children}
    </p>
  );
};
