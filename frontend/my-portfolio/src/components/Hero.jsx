import React, { useCallback } from 'react'; // Import useCallback
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles'; // Import Particles
import { loadSlim } from 'tsparticles-slim'; // Import loadSlim

import profilePic from '../assets/profile.jpg'; // Your profile image
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'; // Import social icons and external link icon

const Hero = () => {
  // Callback for initializing tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Callback for particles loaded (optional)
  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white p-6 md:p-12 lg:p-20 relative overflow-hidden"
    >
      {/* Particle Background - Copied from About Page */}
      <Particles
        id="tsparticles-hero" // Unique ID for this section's particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000", // Ensure the background is black
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              grab: {
                distance: 150,
                links: {
                  opacity: 0.1,
                },
              },
            },
          },
          particles: {
            color: {
               value: "#333333",
            },
            links: {
              color: "#333333",
              distance: 150,
              enable: true,
              opacity: 0.1  ,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Main Content Area - mimicking the grid structure */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl z-10">

        {/* Left Sidebar - Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // Start with black background, reveal a darker gray on hover
          className="lg:col-span-1 bg-black rounded-2xl shadow-none p-8 flex flex-col items-center text-center space-y-6 border border-transparent
                      transition-all duration-300 ease-in-out hover:bg-[#1a1a1a] hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-[1.01]"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <img
              src={profilePic}
              alt="Katyayani Mishra"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-white leading-tight">
            Katyayani Mishra
          </h2>
          <p className="text-lg text-indigo-400 font-semibold">
            Full Stack MERN Developer
          </p>
          <p className="text-gray-400 text-sm max-w-xs">
            Results-driven Full Stack Developer with expertise in MERN, Java and Data Structures.
          </p>
          <p className="text-sm text-gray-500">
            Lucknow, Uttar Pradesh, India
          </p>
          <div className="flex space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/katyayanim12" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-200 hover:scale-125">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://github.com/katyayani1875" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-200 hover:scale-125">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/Katyayani__12?t=5xdAG0Qpp0nrJMoaK3wk6g&s=09" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-200 hover:scale-125">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:mishrakatyayani391@gmail.com"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-200 hover:scale-125">
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Text and Description Card - "SOFTWARE DEVELOPER" card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            // Start with black background, reveal a darker gray on hover
            className="bg-black rounded-2xl shadow-none p-8 border border-transparent
                        transition-all duration-300 ease-in-out hover:bg-[#1a1a1a] hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-[1.01]"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              SOFTWARE <br />
              <span className="text-gray-400">DEVELOPER</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-300">
              Results-driven Full Stack Developer specializing in the MERN stack with a proven track record of creating scalable, user-centric web applications. Adept at solving complex problems through Data Structures and Algorithms (DSA) using Java, continuously improving problem-solving skills through platforms like LeetCode. Passionate about leveraging cutting-edge technology to deliver impactful, high-performance solutions.
            </p>
          </motion.div>

          {/* Service Boxes - FULL STACK DEVELOPMENT and JAVA with DSA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* FULL STACK DEVELOPMENT Card */}
            <a
              href="#projects" // Link to projects section
              className="bg-orange-600 hover:bg-orange-700 rounded-2xl shadow-xl p-8 flex items-center justify-between text-white font-bold text-xl relative overflow-hidden transform
                          transition-all duration-300 ease-in-out hover:shadow-orange-500/50 hover:shadow-2xl hover:scale-105 group"
            >
              FULL STACK <br /> DEVELOPMENT
              <span className="text-2xl opacity-75 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <FaExternalLinkAlt size={20} />
              </span>
            </a>

            {/* JAVA with DSA Card */}
            <a
              href="#java-dsa" // Link to relevant section
              className="bg-lime-600 hover:bg-lime-700 rounded-2xl shadow-xl p-8 flex items-center justify-between text-white font-bold text-xl relative overflow-hidden transform
                          transition-all duration-300 ease-in-out hover:shadow-lime-500/50 hover:shadow-2xl hover:scale-105 group"
            >
              JAVA <br /> with DSA
              <span className="text-2xl opacity-75 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <FaExternalLinkAlt size={20} />
              </span>
            </a>
          </motion.div>

          {/* View Resume and Contact Me Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <a
              href="/resume.pdf" // Ensure your resume is in the public folder
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
              // Start with black background, reveal a subtle gray on hover
              className="group bg-black hover:bg-[#2a2a2a] rounded-2xl shadow-none p-8 flex items-center justify-center text-white font-bold text-xl relative overflow-hidden transform
                          transition-all duration-300 ease-in-out hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-105"
            >
              View Resume
              <span className="ml-3 text-2xl opacity-75 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <FaExternalLinkAlt size={20} />
              </span>
            </a>
            <a
              href="#contact" // Link to your contact section
              // Start with black background, reveal a subtle gray on hover
              className="group bg-black hover:bg-[#2a2a2a] rounded-2xl shadow-none p-8 flex items-center justify-center text-white font-bold text-xl relative overflow-hidden transform
                          transition-all duration-300 ease-in-out hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-105"
            >
              Contact Me
              <span className="ml-3 text-2xl opacity-75 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <FaExternalLinkAlt size={20} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;