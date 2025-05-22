import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg'; // Adjust path as needed based on your project structure
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import social icons

const ProfileSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Animate from left, slightly off-screen
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      // Fixed positioning on the left side
      // Increased width for lg: and xl: screens, adjusted padding and alignment
      className="fixed top-0 left-0 h-screen w-full lg:w-1/3 xl:w-1/4 bg-gray-950 text-white p-8 flex flex-col items-center justify-center z-40
                 border-r border-gray-800 shadow-xl" // Added subtle border and shadow
    >
      {/* Profile Card Content - Now takes full width of the sidebar */}
      <div
        className="bg-gray-900 rounded-2xl p-10 flex flex-col items-center text-center space-y-6 border border-transparent
                   transition-all duration-300 ease-in-out relative group overflow-hidden w-full
                   hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl hover:scale-[1.01]"
      >
        {/* Shining effect on hover (inner glow) */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        bg-gradient-to-br from-indigo-800/10 via-purple-800/10 to-transparent
                        rounded-2xl"></div>

        {/* Content (needs to be z-10 to be above the glow) */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 w-full">
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
          {/* Removed max-w-xs here to allow text to fill more space */}
          <p className="text-gray-400 text-sm">
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSidebar;
