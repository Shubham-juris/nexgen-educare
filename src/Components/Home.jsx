import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Ui from "./Ui";

// Simple Stat component
function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-red-500/10 p-4 backdrop-blur">
      <div className="text-2xl font-bold text-red-500">{value}</div>
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
    const px = (e.clientX - rect.left) / rect.width; // 0 → 1
    const py = (e.clientY - rect.top) / rect.height; // 0 → 1
    x.set(px);
    y.set(py);
  };

  return (
    <>
    {/* <Ui/> */}
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-gray-100 via-gray-300 to-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center px-4">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-red-500 sm:text-5xl lg:text-6xl">
            Nexgen Educare Academy
          </h1>
          <p className="mt-5 max-w-xl text-base text-black-100/90 sm:text-lg">
            At our academy, we empower learners with innovative education, fostering growth,
            creativity, and success through personalized learning experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#solution"
              className="rounded-xl bg-red-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:translate-y-[-1px] hover:shadow"
            >
              Explore Courses
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-medium text-red-500 backdrop-blur transition hover:bg-red-500/20"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Animated Stats */}
        <motion.div
          className="grid w-full max-w-lg grid-cols-3 gap-3 sm:gap-4 lg:max-w-md p-4 rounded-xl bg-red-500/5 backdrop-blur-lg"
          style={{
            rotateX: isHovering ? rotateX : 0,
            rotateY: isHovering ? rotateY : 0,
            scale: isHovering ? 1.05 : 1,
            boxShadow: isHovering
              ? "0 20px 40px rgba(0,0,0,0.3)"
              : "0 10px 20px rgba(0,0,0,0.15)",
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
    </>
  );
}
