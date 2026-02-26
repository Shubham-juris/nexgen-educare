import React from "react";
import medical from "../assets/Courses/health/health.avif";
import nursing from "../assets/Courses/health/nursing.jpg";
import pharmacy from "../assets/Courses/health/pharmacy.webp";
import technology from "../assets/Courses/health/healthcare.jpg";

const medicalTechCourses = [
  {
    title: "Medical Laboratory Technology",
    image: medical,
    description:
      "Learn advanced diagnostic techniques and laboratory procedures used in modern healthcare facilities.",
  },
  {
    title: "Nursing & Patient Care",
    image: nursing,
    description:
      "Develop professional nursing skills and patient care expertise for hospitals and healthcare centers.",
  },
  {
    title: "Pharmacy Technician",
    image: pharmacy,
    description:
      "Gain knowledge of medicines, prescriptions, and pharmaceutical practices in clinical settings.",
  },
  {
    title: "Healthcare Technology",
    image: technology,
    description:
      "Explore medical equipment handling, hospital management systems, and healthcare IT solutions.",
  },
];

export default function MedicalTechnologyCourses() {
  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 from-gray-100 via-gray-300 to-black text-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Medical & Technology Courses
        </h1>
        <p className="mt-4 text-black text-lg">
          Build your future in healthcare and technology with our professional training programs.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {medicalTechCourses.map((course, index) => (
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
              <p className="mt-2 text-black text-sm">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
