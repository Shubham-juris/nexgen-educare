import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-200 backdrop-blur-lg border-b border-red-500/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-red-500 text-2xl font-bold">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-red-500 hover:text-red-600 text-xl font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white px-4 py-3 space-y-3 shadow-md"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-red-500 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/enroll"
              className="block rounded-lg bg-white px-5 py-2 text-sm font-medium text-red-500 shadow-lg hover:bg-purple-600 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
