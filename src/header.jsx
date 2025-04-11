import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react'; // Import Moon and Sun icons from lucide-react
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply dark mode class to <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="w-full fixed top-0 bg-[#0F172A] z-50">
      <nav className="p-4 flex justify-between items-center">
        {/* Centered Navigation Links */}
        <ul className="flex flex-row gap-6 text-white mx-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#2563EB] font-black text-2xl transition-colors"
                  : "hover:text-[#2563EB] font-black text-2xl transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#2563EB] font-black text-2xl transition-colors"
                  : "hover:text-[#2563EB] font-black text-2xl transition-colors"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#2563EB] font-black text-2xl transition-colors"
                  : "hover:text-[#2563EB] font-black text-2xl transition-colors"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#2563EB] font-black text-2xl transition-colors"
                  : "hover:text-[#2563EB] font-black text-2xl transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-white p-2 rounded-full transition-colors hover:bg-gray-700"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
