import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Poppins } from "../../../components/ui/Text";
import { Eachable } from "../../../lib/Eachable";

export const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-gray-600 hover:text-yellow-300 transition flex items-center gap-1.5 focus:outline-none"
      >
        <Poppins>{title}</Poppins>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`
          absolute top-full right-0 mt-2 w-38 bg-white text-black rounded-lg shadow-lg overflow-hidden z-10
          transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <Eachable
          datas={items}
          render={({ name, to }) => (
            <NavLink
              to={to}
              className={({ isActive }) =>
                `block px-4 py-2 transition-colors ${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"}`
              }
              onClick={() => setIsOpen(false)}
            >
              <Poppins>{name}</Poppins>
            </NavLink>
          )}
        />
      </div>
    </div>
  );
};
