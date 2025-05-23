import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      setResponseMessage(response.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Failed to send the message. Please try again."
      );
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
  };

  return (
    <section id="contact" className="relative z-10 flex items-center justify-center bg-[#000000] text-gray-700 font-inter py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-left mb-10 leading-tight sticky bg-black py-4"
        >
          <span className="text-white">CONTACT</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl hover:shadow-[#60A5FA]/50 transition-all duration-500 rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center h-full"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Let's connect and create something great together!
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-lg text-gray-600 mb-8"
            >
              Feel free to reach out for any collaborations, opportunities, or questions.
            </motion.p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Mail className="w-6 h-6 mr-3 text-gray-500" />,
                  label: "mishrakatyayani391@gmail.com",
                  link: "mailto:mishrakatyayani391@gmail.com",
                  i: 2,
                },
                {
                  icon: <Linkedin className="w-6 h-6 mr-3 text-gray-500" />,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/katyayanim12",
                  i: 3,
                },
                {
                  icon: <Instagram className="w-6 h-6 mr-3 text-gray-500" />,
                  label: "Instagram",
                  link: "https://www.instagram.com/katyayanimishra_12?igsh=MzVnZHBrZjdqM2I5",
                  i: 4,
                },
                {
                  icon: <Github className="w-6 h-6 mr-3 text-gray-500" />,
                  label: "GitHub",
                  link: "https://github.com/Katyayani1875",
                  i: 5,
                },
              ].map(({ icon, label, link, i }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  custom={i}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition"
                >
                  {icon}
                  <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} custom={1}>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-gray-900 bg-transparent text-gray-800 rounded-md px-2"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={2}>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-gray-900 bg-transparent text-gray-800 rounded-md px-2"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={3}>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-gray-900 bg-transparent text-gray-800 rounded-md px-2 resize-y"
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
            </motion.div>

            <motion.div variants={fadeInUp} custom={4}>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md"
              >
                Send Message
              </button>
              {responseMessage && (
                <p
                  className={`mt-4 text-center font-medium ${
                    responseMessage.includes("successfully") ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {responseMessage}
                </p>
              )}
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
