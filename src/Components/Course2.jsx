import React from "react";
import accounting from "../assets/account.jpg";
import erp from "../assets/erp.jpg";
import busy from "../assets/busy.jpg";
import quick from "../assets/quick.png";


const accountsCourses = [
  {
    title: "Industrial Accounting",
    image: accounting,
    description: "Learn the fundamentals of industrial accounting to manage financial records effectively.",
  },
  {
    title: "Tally Prime/ERP 9",
    image: erp,
    description: "Master Tally Prime and ERP 9 for efficient accounting and business management.",
  },
  {
    title: "Busy Software",
    image: busy,
    description: "Get hands-on experience with Busy Software for comprehensive accounting solutions.",
  },
  {
    title: "Quick Books",
    image: quick,
    description: "Learn to use Quick Books for streamlined financial management and accounting tasks.",
  },
];

export default function AccountsCourses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-black text-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Accounts Courses</h1>
        <p className="mt-4 text-black text-lg">
          Master essential accounting tools and skills to excel in the finance industry.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {accountsCourses.map((course, index) => (
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
