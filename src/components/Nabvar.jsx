import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg py-4 px-6 flex items-center justify-between">
      {/* Logo Section */}
      <Link to="/" className="flex items-center space-x-3">
        <img
          src="/buganda.png"
          alt="BBECO Logo"
          className="h-12 w-12 object-contain"
        />
        <span className="font-bold text-2xl text-indigo-700 tracking-wide">
          BBECO BERLIN CHAPTER
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="space-x-8 flex items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-700 hover:text-indigo-600 font-semibold transition-colors duration-200 ${
              isActive ? "text-indigo-600 underline" : ""
            }`
          }
        >
          HOME
        </NavLink>
      </div>
    </nav>
  );
}
