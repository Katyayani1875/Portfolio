import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaCloud, FaTools, FaCogs } from "react-icons/fa";
import axios from "axios";

// Icon Mapping
const iconMap = {
  frontend: <FaHtml5 className="text-orange-600" />,
  programming: <FaJsSquare className="text-yellow-500" />,
  frameworks: <FaReact className="text-indigo-400" />,
  backend: <FaNodeJs className="text-green-600" />,
  databases: <FaDatabase className="text-green-700" />,
  cloud: <FaCloud className="text-blue-400" />,
  devops: <FaCogs className="text-yellow-400" />,
  tools: <FaTools className="text-gray-500" />,
  default: <FaReact className="text-indigo-400" />,
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("/api/skills");
        setSkills(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load skills.");
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-20 bg-black text-gray-200">
      <div className="container mx-auto px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-indigo-400 mb-10"
        >
          Skills
        </motion.h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading skills...</p>
        ) : error ? (
          <p className="text-center text-red-500 mb-6">{error}</p>
        ) : skills.length === 0 ? (
          <p className="text-center text-gray-400">No skills to display.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill._id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
              >
                <div className="text-5xl mb-4">
                  {iconMap[skill.category?.toLowerCase()] || iconMap.default}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
