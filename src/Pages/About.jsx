import React from 'react';
import { motion } from 'framer-motion'; // ✅ Import motion
import img1 from '../assets/Logo.png'; // ✅ Import your image

const About = () => {
  const offerings = [
    {
      title: "Academic Excellence Programs",
      details: [
        "Comprehensive curriculum support for school students from Grade 1 to Grade 12.",
        "Tailored coaching for CBSE, ICSE, State Boards, and International Boards.",
        "Regular progress tracking and performance evaluations to ensure continuous improvement.",
      ],
    },
    {
      title: "Competitive Exam Training",
      details: [
        "Expert guidance for entrance exams such as JEE, NEET, SAT, GRE, GMAT, and more.",
        "Structured study plans, mock tests, and practice sessions for exam readiness.",
        "In-depth analysis of past papers and focus on high-yield topics.",
      ],
    },
    {
      title: "Skill Development & Professional Courses",
      details: [
        "Public speaking and communication skills workshops.",
        "Leadership development, teamwork, and problem-solving exercises.",
        "Practical training in coding, robotics, and digital literacy for future-ready skills.",
      ],
    },
    {
      title: "Career Counseling & Guidance",
      details: [
        "Personalized career coaching to identify strengths and interests.",
        "Assistance in choosing academic pathways and professional courses.",
        "Sessions on resume building, interview skills, and personality development.",
      ],
    },
    {
      title: "Online Learning Solutions",
      details: [
        "Interactive online classes for all courses with access to expert educators.",
        "Recorded sessions, e-books, and digital resources for flexible learning.",
        "24/7 student support for doubt resolution and assignment help.",
      ],
    },
    {
      title: "Extracurricular Activities",
      details: [
        "Art, music, and drama classes to foster creativity.",
        "Sports training to promote physical fitness and teamwork.",
        "Participation in national and international academic and cultural competitions.",
      ],
    },
    {
      title: "Our Achievements",
      details: [
        "Consistently high results in board exams and competitive tests.",
        "Alumni placed in prestigious universities and organizations worldwide.",
        "Recipient of numerous awards for excellence in education.",
        "Collaboration with reputed institutions for advanced learning programs.",
      ],
    },
    {
      title: "Why Choose NexGen Educare Academy?",
      details: [
        "Proven Track Record: Decades of experience in shaping successful students.",
        "Comprehensive Curriculum: Balancing academics with skill development.",
        "Advanced Teaching Methods: Integration of technology and traditional techniques.",
        "Holistic Development: Focusing on academic, emotional, and social growth.",
        "Strong Community: A network of supportive peers, parents, and educators.",
      ],
    },
    {
      title: "State-of-the-Art Infrastructure",
      details: [
        "Smart classrooms with audio-visual aids for interactive learning.",
        "Well-equipped science and computer labs for practical education.",
        "Comfortable and safe learning spaces with a student-first approach.",
      ],
    },
    {
      title: "Expert Faculty",
      details: [
        "A team of highly qualified and experienced educators.",
        "Regular training for teachers to stay updated with the latest educational trends.",
        "Mentors who are dedicated to inspiring and guiding students.",
      ],
    },
    {
      title: "Student-Centric Approach",
      details: [
        "Individualized attention to address unique learning needs.",
        "Regular parent-teacher meetings for collaborative growth.",
        "Focus on mental health and well-being through counseling support.",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-gray-100 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-4">
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nexgen Educare Academy is a leading educational institution
              committed to delivering exceptional learning experiences that
              empower students to achieve academic excellence and personal
              growth. Founded on the principles of innovation, integrity, and
              inclusivity, Nexgen Educare Academy serves as a beacon of quality
              education, shaping future leaders and problem-solvers.
            </p>
          </motion.div>

          {/* Right Image */}
<motion.img
  src={img1}
  alt="About Nexgen"
  className="rounded-2xl shadow-lg max-w-xs w-full mx-auto transition-transform duration-300"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
/>

        </div>

        {/* Offerings Section */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-red-500">What We Offer</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-white border border-red-500/20 rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <h4 className="text-lg font-bold text-red-500 mb-3">
                {offer.title}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {offer.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
