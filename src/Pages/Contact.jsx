import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `Thank you, ${formData.name}! 🎉`,
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "Okay",
      background: "#f3f4f6",
      color: "#1f2937",
      confirmButtonColor: "#ef4444",
      customClass: {
        popup: "rounded-2xl shadow-2xl backdrop-blur-lg",
        title: "text-2xl font-bold text-red-500",
        confirmButton: "px-6 py-2 rounded-lg font-medium",
      },
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative mt-16 overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-gray-100 via-gray-300 to-black"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-500">
            Get in Touch
          </h2>
          <p className="text-black/90 text-lg">
            Have questions, need support, or want to collaborate?  
            We’re here to help you every step of the way.
          </p>
        {/* Google Map */}
       <div className="rounded-xl overflow-hidden shadow-lg h-32 sm:h-60 lg:h-72">
  <iframe
    title="Nexgen Educare Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.153022602342!2d76.6572!3d30.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee6c7b43f6a7%3A0x5e35e40e8a7fdb6!2sSunny%20Enclave%2C%20Sector%20125%2C%20Kharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1692345678901"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


          {/* Address + Phone + Email */}
          <div className="space-y-3 text-gray-900">
            <p>
              📍 <span className="text-red-500 font-semibold">Address:</span>{" "}
              SCO 4-5, Second Floor, New Sunny Enclave, Sector-125, Mohali, Punjab - 140301
            </p>
            <p>
              📞{" "}
              <span className="text-red-500 font-semibold">Phone:</span>{" "}
              <a
                href="tel:+919056729370"
                className="text-red-600 hover:underline"
              >
                +91 9056729370
              </a>
            </p>
            <p>
              ✉️{" "}
              <span className="text-red-500 font-semibold">Email:</span>{" "}
              <a
                href="mailto:nexgeneducareacademy@gmail.com"
                className="text-red-600 hover:underline"
              >
                nexgeneducareacademy@gmail.com
              </a>
            </p>
          </div>

          
          
        </div>

        {/* Right Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 bg-red-500/5 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg mt-20"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-red-500 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-red-500/20 bg-transparent p-3 text-gray-900 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-red-500 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-red-500/20 bg-transparent p-3 text-gray-900 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-red-500 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-red-500/20 bg-transparent p-3 text-gray-900 focus:border-red-500 focus:outline-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full rounded-lg bg-red-500 px-5 py-3 text-white font-medium shadow-sm hover:translate-y-[-1px] hover:shadow transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
