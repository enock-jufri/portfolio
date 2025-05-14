import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="w-full fixed top-0 bg-gray-800 z-50 shadow-md">
      <nav className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Site Name */}
        <div className="text-white text-2xl font-extrabold tracking-tight select-none">
          Enock Jufri
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row gap-6 text-white absolute md:static top-16 left-0 w-full md:w-auto bg-[#0F172A] md:bg-transparent p-4 md:p-0 transition-all duration-200`}
        >
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2563EB] font-bold text-lg md:text-xl transition-colors"
                  : "hover:text-[#2563EB] font-bold text-lg md:text-xl transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2563EB] font-bold text-lg md:text-xl transition-colors"
                  : "hover:text-[#2563EB] font-bold text-lg md:text-xl transition-colors"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2563EB] font-bold text-lg md:text-xl transition-colors"
                  : "hover:text-[#2563EB] font-bold text-lg md:text-xl transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
