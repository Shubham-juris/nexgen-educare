import React, { useState } from "react";
import { motion } from "framer-motion";

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
    alert("Message sent successfully!");
    // You can integrate backend or email service here
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-gray-100 via-gray-300 to-black"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-500">
            Get in Touch
          </h2>
          <p className="mt-4 text-black-100/90 text-lg">
            Have questions, need support, or want to collaborate?  
            We’re here to help you every step of the way.
          </p>

          <div className="mt-8 space-y-3 text-gray-900">
            <p>
              📍 <span className="text-red-500">Address:</span> 418 Broadway Ste R, Albany, NY, 12207
            </p>
            <p>
              📞 <span className="text-red-500">Phone:</span> +1 (555) 123-4567
            </p>
            <p>
              ✉️ <span className="text-red-500">Email:</span> contact@nexgeneducare.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg bg-red-500/5 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg"
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
