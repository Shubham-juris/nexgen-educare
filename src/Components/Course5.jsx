import { desc } from "framer-motion/client";
import React from "react";
import call from "../assets/call.jpg";
import make from "../assets/makeup.jpg";
import saloon from "../assets/saloon.jpg";
import legal from "../assets/legal.jpeg";
import child from "../assets/child.jpeg"

const othersCourses = [
  {
    title: "Call Center Training",
    image: call,
    description: "Enhance your communication skills and customer service techniques with our Call Center Training course.",
  },
  {
    title: "Make Up",
    image: make,
    description: "Learn the art of makeup application, from basic techniques to advanced styles.",
  },
  {
    title: "Saloon",
    image: saloon,
    description: "Master the skills needed for a successful career in the beauty and salon industry.",
  },
  {
    title: "Legal Drafting",
    image: legal,
    description: "Develop your legal writing skills with our comprehensive Legal Drafting course.",
  },
  {
    title: "Parenting & Child Care",
    image: child,
    description: "Gain insights into effective parenting and child care practices with our specialized course.",
  },
];

export default function OthersCourses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-black text-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Others Courses</h1>
        <p className="mt-4 text-black text-lg">
          Explore a variety of skill-based and professional development courses.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {othersCourses.map((course, index) => (
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
                  ENROLL
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
