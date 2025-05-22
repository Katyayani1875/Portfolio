import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const About = () => {
  // Animation variants for staggered appearance of cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Callback for initializing tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Callback for particles loaded (optional)
  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
    <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Particle Background - Same as Hero Page */}
      <Particles
        id="tsparticles-about" // Unique ID for this section's particles
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
              opacity: 0.05,
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

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        {/* Section Header - Adjusted for the requested style */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }} // Start further left
          whileInView={{ opacity: 1, x: 0 }} // Animate to its position
          transition={{ duration: 1, ease: "easeOut" }} // Added easeOut effect
          viewport={{ once: true, amount: 0.5 }}
          // Adjusted text styling and alignment
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-left mb-10 leading-tight" // Changed text-center to text-left
        >
          <span className="text-white">ABOUT</span> <br />
          <span className="text-gray-400">ME</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="md:w-1/2 space-y-6 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              Hi! I’m a passionate <span className="font-bold text-indigo-400">Full Stack MERN Developer</span> who loves building scalable and efficient web applications. With a knack for problem-solving and an eye for clean design, I strive to create impactful digital experiences.
            </p>
            <p className="text-lg leading-relaxed">
              I value <span className="font-bold text-indigo-400">clean code</span>, <span className="font-bold text-indigo-400">user-centric design</span>, and continuous learning. Whether it's optimizing backend logic or crafting pixel-perfect UIs, I approach every challenge with curiosity and determination.
            </p>
          </motion.div>

          {/* Values or Traits Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Card 1: Clean Code */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 relative group overflow-hidden border border-transparent
                  transition-all duration-300 ease-in-out hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Shining effect on hover (inner glow) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                bg-gradient-to-br from-indigo-800/10 via-purple-800/10 to-transparent
                                rounded-lg"></div>
              {/* Content (needs to be z-10 to be above the glow) */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">Clean Code</h3>
                <p className="text-gray-400">I write modular, maintainable code that adheres to industry standards and best practices.</p>
              </div>
            </motion.div>

            {/* Card 2: Problem Solving */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 relative group overflow-hidden border border-transparent
                  transition-all duration-300 ease-in-out hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Shining effect on hover (inner glow) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                bg-gradient-to-br from-indigo-800/10 via-purple-800/10 to-transparent
                                rounded-lg"></div>
              {/* Content (needs to be z-10 to be above the glow) */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">Problem Solving</h3>
                <p className="text-gray-400">I thrive on tackling complex challenges and delivering efficient, innovative solutions.</p>
              </div>
            </motion.div>

            {/* Card 3: User-Centric Design */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 relative group overflow-hidden border border-transparent
                  transition-all duration-300 ease-in-out hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Shining effect on hover (inner glow) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                bg-gradient-to-br from-indigo-800/10 via-purple-800/10 to-transparent
                                rounded-lg"></div>
              {/* Content (needs to be z-10 to be above the glow) */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">User-Centric Design</h3>
                <p className="text-gray-400">Crafting intuitive interfaces and seamless experiences is at the core of my work.</p>
              </div>
            </motion.div>

            {/* Card 4: Continuous Learning */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 relative group overflow-hidden border border-transparent
                  transition-all duration-300 ease-in-out hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Shining effect on hover (inner glow) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                bg-gradient-to-br from-indigo-800/10 via-purple-800/10 to-transparent
                                rounded-lg"></div>
              {/* Content (needs to be z-10 to be above the glow) */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">Continuous Learning</h3>
                <p className="text-gray-400">I stay ahead of trends by consistently exploring new technologies and methodologies.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;