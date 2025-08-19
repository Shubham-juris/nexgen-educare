import React from "react";
import graphic from "../assets/graphic.jpg";
import fullstack from "../assets/fullStack.jpg";  
import web from "../assets/web.jpg";
import python from "../assets/python.jpg";
import video from "../assets/video.jpg";
import seo from "../assets/seo.jpg";
import digital from "../assets/digital.jpg";
import content from "../assets/content.jpg";
const courses = [
  {
    title: "Graphic Design",
    image: graphic,
    description: "Explore the world of graphic design with our comprehensive courses.",
  },
  {
    title: "Full Stack Developer",
    image: fullstack,
    description: "Become a full stack developer with our hands-on training and projects.",
  },
  {
    title: "Web Designing",
    image: web,
    description: "Learn the principles of web design and create stunning websites.",
  },
  {
    title: "Python Crash Course",
    image: python,
    description: "Get started with Python programming through our crash course designed for beginners.",
  },
  {
    title: "Video Editing",
    image: video,
    description: "Master video editing techniques and software to create professional-quality videos.",
  },
  {
    title: "SEO Management",
    image: seo,
    description: "Learn how to optimize websites for search engines and improve online visibility.",
  },
  {
    title: "Digital Marketing",
    image: digital,
    description: "Dive into the world of digital marketing and learn strategies to grow your business online.",
  },
  {
    title: "Content Writing",
    image: content,
    description: "Enhance your writing skills and learn how to create engaging content for various platforms.",
  },
];

export default function Course1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-black text-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
       
         <h1 className="text-4xl sm:text-5xl font-bold mt-24">Our Courses</h1>
        <p className="mt-4 text-black text-xl">
          Learn from our range of professional courses and upgrade your skills.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course, index) => (
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
