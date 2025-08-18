import { useState } from "react";
import { Button } from "../../global/components/Button/index";
import { Drawer } from "../../global/components/Drawer/index";
import { Eachable } from "../../global/components/Eachable/index";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Mengimpor ikon

// Daftar menu navigasi
const navLinks = [
  { name: "Home", to: "/" },
  { name: "Sharing", to: "/sharing" },
  { name: "Study Group", to: "/study-group" },
  { name: "About", to: "/about" },
];

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">
            <a href="/">HIMTI UMT</a>
          </h1>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <Eachable
            datas={navLinks}
            render={({ name, to }) => (
              <a
                key={to}
                href={to}
                className="text-gray-600 hover:text-blue-700 transition-colors"
              >
                <h1>{name}</h1>
              </a>
            )}
          />
        </div>

        {/* Tombol Aksi Desktop */}
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <Button variant="secondary" size="md">
            Login
          </Button>
          <Button variant="primary" size="md">
            Sign Up
          </Button>
        </div>

        {/* Tombol Menu Mobile */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-gray-600 hover:text-blue-700"
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt3 size={28} />
          </button>
        </div>
      </div>

      {/* Drawer Menu Mobile */}
      <Drawer
        show={isDrawerOpen}
        onHide={() => setIsDrawerOpen(false)}
        position="right"
        close={{
            icon: <HiX size={24} />,
            title: "Close Menu"
        }}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Eachable
            datas={navLinks}
            render={({ name, to }) => (
              <a
                key={to}
                href={to}
                className="text-gray-700 hover:bg-gray-100 p-2 rounded-md"
              >
                <h1 className="text-lg">{name}</h1>
              </a>
            )}
          />
          <div className="border-t border-gray-200 pt-4 space-y-2">
             <Button variant="secondary" size="lg">
                Login
             </Button>
             <Button variant="primary" size="lg">
                Sign Up
             </Button>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};