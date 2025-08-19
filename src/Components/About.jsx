import React from "react";
import logo from "../assets/Logo.png"; 

export default function IntroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-red-500 mt-10">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
        
        {/* Left Side - Image */}
      

        {/* Right Side - Content */}
        <div className="space-y-6 order-1 md:order-2 mt-16">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <span className="text-sm font-semibold uppercase tracking-wide">
             Nexgen Educare Acadamy
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            Introduction
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Welcome to our company, where we transform ideas into cutting-edge
            technologies. Our mission is to revolutionize industries by providing
            bespoke technological solutions that empower businesses and
            individuals to achieve their full potential. From AI-driven insights to
            seamless digital transformations, we are committed to driving progress
            and fostering innovation. Join us on a journey to the future, where
            your vision becomes reality with our expertise and passion for
            technology.
          </p>

          {/* Search Box */}
          <div className="bg-red-500 rounded-full overflow-hidden flex items-center shadow-lg w-full max-w-md">
            <input
              type="text"
              placeholder="www.NexgenEducare.com"
              className="px-5 py-3 w-full text-gray-800 outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-5 py-3 text-red-500 font-medium">
              🔍
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
