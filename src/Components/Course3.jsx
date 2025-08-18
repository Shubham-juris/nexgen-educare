import React from "react";
import upsc from "../assets/upsc.jpeg";
import nurse from "../assets/nurse.jpeg";
import bank from "../assets/banking.jpeg";
import clat from "../assets/clat.jpeg";
import neet from "../assets/neet.jpeg";

const competitiveCourses = [
  {
    title: "Defiance (UPSC)",
    image: upsc,
    description: "Prepare for the UPSC Civil Services Exam with our comprehensive Defiance course.",
  },
  {
    title: "Banking",
    image: bank,
    description: "Ace your banking exams with our expert-led courses covering all essential topics.",
  },
  {
    title: "Neet",
    image: neet,
    description: "Get ready for the NEET exam with our specialized coaching and practice materials.",
  },
  {
    title: "CLAT",
    image: clat,
    description: "Prepare for the CLAT exam with our focused curriculum and expert guidance.",
  },
  {
    title: "Nursing",
    image: nurse,
    description: "Enhance your nursing skills and knowledge with our professional nursing courses.",
  },
];

export default function CompetitiveCourses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-black text-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Competitive Exam Courses</h1>
        <p className="mt-4 text-black text-lg">
          Prepare for your dream career with our expert-led competitive exam courses.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {competitiveCourses.map((course, index) => (
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
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
