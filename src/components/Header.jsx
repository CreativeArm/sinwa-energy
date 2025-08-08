// src/components/Header.jsx

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="Logo/logo.png"
            alt="Sinwaenergy Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
          <Link to="/training" className="text-primary font-semibold">
            Training
          </Link>
          <Link to="/contact">
            <button
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-primary text-white px-4 py-2 rounded-md shadow-custom hover:bg-blue-600 transition-all"
            >
              Contact Us
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow-md">
          <Link to="/" className="block py-2 text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-700 hover:text-primary"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="block py-2 text-gray-700 hover:text-primary"
          >
            Services
          </Link>
          <Link
            to="/training"
            className="block py-2 text-primary font-semibold"
          >
            Training
          </Link>
          <Link to="/contact" className="block py-2">
            <button className="w-full bg-primary text-white py-2 rounded-md shadow-custom hover:bg-blue-600 transition">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
