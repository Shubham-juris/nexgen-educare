import { desc } from "framer-motion/client";
import React from "react";
import sign from "../assets/sign.jpg";
import french from "../assets/french.jpg";
import translator from "../assets/translator.jpg";

import ielts from "../assets/ielts.png"

const languageCourses = [
  {
    title: "French Level 2",
    image: french,
    description: "Advance your French skills with our Level 2 course, focusing on conversation and grammar.",
  },
  {
    title: "Translator Courses",
    image: translator,
    description: "Become a professional translator with our comprehensive courses covering multiple languages.",
  },
  {
    title: "Sign Language",
    image: sign,
    description: "Learn the fundamentals of sign language to enhance your communication skills with the hearing impaired.",
  },
  {
    title: "IELTS/TOEFL/PTE",
    image: ielts,
    description: "Prepare for your English proficiency exams with our expert-led courses for IELTS, TOEFL, and PTE.",
  },
];

export default function LanguageCourses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-black text-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Language Courses</h1>
        <p className="mt-4 text-black text-lg">
          Enhance your communication skills with our professional language programs.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {languageCourses.map((course, index) => (
          <div
            key={index}
            className="bg-red-500/10 rounded-xl overflow-hidden shadow-lg backdrop-blur-md border border-red-500/10 hover:scale-105 transform transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-5 flex flex-col items-center text-center">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="mt-2 text-black text-sm">{course.description}</p>
              {/* <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-red-500 text-sm rounded-lg transition">
                  DETAILS
                </button>
                <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-red-500 text-sm rounded-lg transition">
                  BUY NOW
                </button> 
              </div>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
