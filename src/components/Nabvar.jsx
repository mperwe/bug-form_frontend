import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemStyle = ({ isActive }) =>
    `px-4 py-2 rounded-md font-medium text-base transition-all duration-200 ${
      isActive
        ? "bg-indigo-600 text-white shadow"
        : "bg-indigo-100 text-indigo-700 hover:bg-indigo-600 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex items-center justify-between z-50">
      {/* Logo Section */}
      <Link to="/" className="flex items-center space-x-3">
        <img
          src="/buganda.png"
          alt="BBECO Logo"
          className="h-12 w-12 object-contain"
        />
        <span className="font-bold text-lg md:text-2xl text-indigo-700 tracking-wide">
          BBECO - GERMANY 2026
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-3">
        <NavLink to="/" className={navItemStyle}>
          HOME
        </NavLink>

        <NavLink to="/tour" className={navItemStyle}>
          VISIT BERLIN
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-indigo-600 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden py-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="w-11/12 text-center px-4 py-2 rounded-md bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-600 hover:text-white transition-all duration-200"
          >
            HOME
          </NavLink>

          <NavLink
            to="/tour"
            onClick={() => setIsOpen(false)}
            className="w-11/12 text-center px-4 py-2 rounded-md bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-600 hover:text-white transition-all duration-200"
          >
            VISIT BERLIN
          </NavLink>
        </div>
      )}
    </nav>
  );
}
