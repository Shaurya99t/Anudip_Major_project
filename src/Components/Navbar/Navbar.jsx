import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap justify-between items-center text-white px-10 py-4 md:px-20 bg-[#171d32] shadow-lg">
      <a href="#" className="text-xl font-bold tracking-wide">
        Portfolio
      </a>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </div>
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex md:items-center md:gap-6 mt-4 md:mt-0`}
      >
        <div className="text-center md:flex gap-6 bg-black bg-opacity-30 md:bg-transparent rounded-xl p-4 md:p-0">
          <a href="#About" onClick={() => setMenuOpen(false)}>
            <li className="text-md hover:text-gray-300 transition-all duration-300 p-1 md:p-0">
              About
            </li>
          </a>
          <a href="#Experience" onClick={() => setMenuOpen(false)}>
            <li className="text-md hover:text-gray-300 transition-all duration-300 p-1 md:p-0">
              Experience
            </li>
          </a>
          <a href="#Projects" onClick={() => setMenuOpen(false)}>
            <li className="text-md hover:text-gray-300 transition-all duration-300 p-1 md:p-0">
              Projects
            </li>
          </a>
          <a href="#Footer" onClick={() => setMenuOpen(false)}>
            <li className="text-md hover:text-gray-300 transition-all duration-300 p-1 md:p-0">
              Contact
            </li>
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;