  import React, { useEffect, useState } from "react";
  import { motion,animate } from "framer-motion"; // Re-added motion import
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
        } catch (err) {
          console.error("Error fetching projects:", err);
          setError("Failed to load projects. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    }, []);

   return (
    <section id="projects" className="py-20 bg-[#0a0a0a] text-gray-200 min-h-screen">
      <div className="container px-6 md:px-20 max-w-6xl relative z-10 ">
        {/* Heading - Framer Motion is applied here */}
         <motion.h2
                  initial={{ opacity: 0, x: -100 }} // Start further left
                  whileInView={{ opacity: 1, x: 0 }} // Animate to its position
                  transition={{ duration: 1, ease: "easeOut" }} // Added easeOut effect
                  viewport={{ once: true, amount: 0.5 }}
                  // Adjusted text styling and alignment
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-left mb-10 leading-tight" // Changed text-center to text-left
                >
                  <span className="text-white">PROJECTS</span> 
                </motion.h2>

        {/* Content */}
        {loading ? (
          <p className="text-center text-gray-400">
            Loading projects...
          </p>
        ) : error ? (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400">
            No projects to display.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gray-950 shadow-lg rounded-xl p-6 flex flex-col justify-between w-full
                           border border-gray-700 transition-all duration-300 ease-in-out
                           hover:bg-gray-800 hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1"
              >
                <div>
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  {/* Project Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-900 rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Links */}
                <div className="mt-auto flex justify-start space-x-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 font-medium"
                    >
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
