import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load projects.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-indigo-400 mb-10"
        >
          Projects
        </motion.h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-500 mb-6">{error}</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects to display.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-indigo-500 text-white rounded px-2 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline mr-4">
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                      GitHub Repository
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
