import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import heroBg from "../assets/Hero/HeroImg.png";
import { Link } from "react-router-dom";

// Simple Stat component
function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur">
      <div className="text-2xl font-bold text-red-400">{value}</div>
      <div className="text-sm text-gray-200">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse position to rotation
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center px-4">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nexgen Educare Academy
          </h1>

          <p className="mt-5 max-w-xl text-base text-gray-200 sm:text-lg">
            At our academy, we empower learners with innovative education,
            fostering growth, creativity, and success through personalized
            learning experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="rounded-xl bg-red-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Animated Stats */}
        <motion.div
          className="grid w-full max-w-lg grid-cols-3 gap-3 sm:gap-4 lg:max-w-md p-4 rounded-xl bg-white/10 backdrop-blur-lg"
          style={{
            rotateX: isHovering ? rotateX : 0,
            rotateY: isHovering ? rotateY : 0,
            scale: isHovering ? 1.05 : 1,
            boxShadow: isHovering
              ? "0 20px 40px rgba(0,0,0,0.4)"
              : "0 10px 20px rgba(0,0,0,0.2)",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <Stat label="Courses" value="25+" />
          <Stat label="Clients" value="85" />
          <Stat label="Uptime" value="99.9%" />
          <Stat label="NPS" value="72" />
          <Stat label="Regions" value="14" />
          <Stat label="Services" value="10+" />
        </motion.div>
      </div>
    </section>
  );
}
