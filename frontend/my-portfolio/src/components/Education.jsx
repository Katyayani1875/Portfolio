import React from "react";
import { motion } from "framer-motion"; // Importing motion for animations

const educationData = [
  {
    institution: "Dr. A.P.J Abdul Kalam Technical University, Lucknow",
    duration: "Sep 2022 - May 2026",
    degree: "Bachelor of Technology in Computer Science",
    location: "Lucknow, India",
  },
  {
    institution: "Rani Laxmi Bai Memorial School, Lucknow",
    duration: "April 2018 - Mar 2022",
    degree: "High School and Intermediate",
    location: "Lucknow, India",
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
    <section id="education" className="py-20 bg-black text-gray-200 min-h-screen">
      <div className="container px-6 md:px-20 max-w-6xl">
        {/* Education Section Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -100 }} // Start further left
            whileInView={{ opacity: 1, x: 0 }} // Animate to its position when in view
            transition={{ duration: 1, ease: "easeOut" }} // Added easeOut effect
            viewport={{ once: true, amount: 0.5 }} // Animate only once when 50% in view
            // Adjusted text styling, alignment, and added sticky positioning
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-left mb-10 leading-tight
                      sticky  bg-black py-4 " // Made sticky, top-0, higher z-index, and added background/padding for readability
          >
            <span className="text-white">ACADEMIC</span> <br /> {/* White text for "TECHNICAL" */}
            <span className="text-gray-400">QUALIFICATION</span> {/* Gray-400 text for "SKILLS" */}
          </motion.h2>

        <div className="grid grid-cols-1 gap-10 mb-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="
                bg-gray-800 rounded-xl p-6 flex flex-col justify-between w-full
                border border-transparent transition-all duration-300 ease-in-out
                hover:bg-gray-700 hover:scale-[1.01] hover:-translate-y-1
                hover:border-indigo-700 hover:shadow-indigo-500/50 hover:shadow-2xl
                transform-gpu
              "
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                <p className="text-sm text-gray-400">{edu.duration}</p>
              </div>
              <p className="text-orange-400 mt-1">{edu.degree}</p>
              <p className="text-gray-400 text-sm mt-1">{edu.location}</p>
            </div>
          ))}
        </div>

        {/* Certifications Section Heading */}
         <motion.h2
                   initial={{ opacity: 0, x: -100 }} // Start further left
                   whileInView={{ opacity: 1, x: 0 }} // Animate to its position when in view
                   transition={{ duration: 1, ease: "easeOut" }} // Added easeOut effect
                   viewport={{ once: true, amount: 0.5 }} // Animate only once when 50% in view
                   // Adjusted text styling, alignment, and added sticky positioning
                   className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-left mb-10 leading-tight
                             sticky  bg-black py-4 " // Made sticky, top-0, higher z-index, and added background/padding for readability
                 >
                   <span className="text-white">CERTIFICATIONS</span>  {/* Gray-400 text for "SKILLS" */}
                 </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="
                bg-gray-800 rounded-xl p-6 flex flex-col justify-between w-full
                border border-transparent transition-all duration-300 ease-in-out
                hover:bg-gray-700 hover:scale-[1.01] hover:-translate-y-1
                hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl
                transform-gpu
              "
            >
              <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-gray-400 mt-1">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
