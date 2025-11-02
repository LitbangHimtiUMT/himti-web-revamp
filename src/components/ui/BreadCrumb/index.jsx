import PropTypes from "prop-types";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Eachable } from "../../Eachable";
import { Poppins } from "../Text";

export const BreadCrumb = ({ items, icon }) => {
  const location = useLocation();

  const shortItems =
    items.length > 3
      ? [items[0], { name: "...", to: "#" }, items[items.length - 1]]
      : items;

  return (
    <div className="flex items-center gap-2 overflow-auto">
      {/* Mobile Version */}
      <div className="flex lg:hidden items-center gap-2">
        <Eachable
          datas={shortItems}
          render={({ name, to }) => (
            <div className="flex items-center gap-2" key={to + name}>
              {icon || <MdArrowBackIosNew className="text-lg" />}
              <Link to={to} className="flex items-center gap-4">
                <Poppins
                  className={`${
                    location.pathname === to ? "font-medium" : "text-gray-500"
                  } text-sm max-w-20 truncate overflow-hidden whitespace-nowrap`}
                >
                  {name}
                </Poppins>
              </Link>
            </div>
          )}
        />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex items-center gap-2">
        <Eachable
          datas={items}
          render={({ name, to }) => (
            <div className="flex items-center gap-2" key={to + name}>
              {icon || <MdArrowBackIosNew className="text-lg" />}
              <Link to={to} className="flex items-center gap-4">
                <Poppins
                  className={`${
                    location.pathname === to ? "font-medium" : "text-gray-500"
                  } text-sm max-w-52 truncate overflow-hidden whitespace-nowrap`}
                >
                  {name}
                </Poppins>
              </Link>
            </div>
          )}
        />
      </div>
    </div>
  );
};

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  icon: PropTypes.node,
};
