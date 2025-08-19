import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // to track current route

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-200 backdrop-blur-lg border-b border-red-500/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo (Left) */}
        <Link to="/" className="text-red-500 text-2xl font-bold">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 relative">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`text-xl font-medium transition-colors ${
                    isActive
                      ? "text-red-600"
                      : "text-red-500 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
                {/* Animated underline */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] bg-red-500 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Side Call Button */}
        <div className="hidden md:flex">
          <a
            href="tel:+919056729370"
            className="rounded-lg bg-white px-5 py-2 text-lg font-medium text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition"
          >
            Call us Now
          </a>
        </div>

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
                className={`block transition-colors ${
                  location.pathname === item.path
                    ? "text-red-600 font-semibold"
                    : "text-red-500 hover:text-red-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Call Button for Mobile */}
            <a
              href="tel:+919056729370"
              className="block rounded-lg bg-white px-5 py-2 text-sm font-medium text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Call us Now
            </a>

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
