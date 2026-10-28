import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Poppins } from "../../../components/ui/Text";
import { Eachable } from "../../../lib/Eachable";
import { platforms } from "../../portal/data/platforms";

// Dropdown link cepat Portal (desktop). Berbeda dengan NavDropdown:
// item di sini adalah tautan eksternal ke subdomain, jadi dirender
// sebagai <a>, bukan NavLink internal — kecuali baris terakhir yang
// mengarah ke halaman /portal itu sendiri.
export const PortalDropdown = () => {
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
        <Poppins>Portal</Poppins>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`
          absolute top-full right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg overflow-hidden z-10
          transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <Eachable
          datas={platforms}
          render={({ id, shortName, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2 transition-colors hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Poppins>{shortName}</Poppins>
              <ArrowUpRight size={16} className="text-gray-400" />
            </a>
          )}
        />
        <div className="border-t border-gray-200">
          <NavLink
            to="/portal"
            className="block px-4 py-2 transition-colors hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <Poppins>Semua Portal</Poppins>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
