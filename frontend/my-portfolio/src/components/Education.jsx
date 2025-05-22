import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Dr. A.P.J Abdul Kalam Technical University, Lucknow",
    duration: "Sep 2022 - May 2026",
    degree: "Bachelor of Technology in Computer Science",
  },
  {
    institution: "Rani Laxmi Bai Memorial School, Lucknow",
    duration: "April 2018 - Mar 2022",
    degree: "High School and Intermediate",
  },
];

const certificationsData = [
  {
    title: "Tata Cybersecurity Security Analyst",
    date: "February 2025",
    description:
      "Completed a job simulation on Identity and Access Management (IAM) with Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.",
  },
  {
    title: "Java Web Development with AI – HCL Tech",
    date: "March 2025",
    description:
      "Gained expertise in developing, debugging, and executing Java-based applications with AI integration.",
  },
  {
    title: "Coding Ninjas 21 Days Coding Challenge - Level 3 Certificate",
    date: "",
    description: "",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 md:px-20">
        {/* Education Section */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-indigo-400 mb-10"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 shadow-lg rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-200">{edu.institution}</h3>
              <p className="text-sm text-indigo-400">{edu.duration}</p>
              <p className="text-gray-400 mt-2">{edu.degree}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-indigo-400 mb-10"
        >
          Certifications & Training
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 shadow-lg rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-200">{cert.title}</h3>
              {cert.date && <p className="text-sm text-indigo-400">{cert.date}</p>}
              {cert.description && <p className="text-gray-400 mt-2">{cert.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
