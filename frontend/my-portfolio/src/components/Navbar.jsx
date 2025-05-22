import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleLinkClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentActive = 'home';
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementMidpoint = rect.top + rect.height / 2;
          const viewportMidpoint = window.innerHeight / 2;
          const distance = Math.abs(elementMidpoint - viewportMidpoint);

          if (distance < minDistance) {
            minDistance = distance;
            currentActive = section;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center"
    >
      <div className="hidden md:flex bg-gray-900/60 backdrop-blur-md rounded-full py-2 px-4 space-x-4 border border-gray-700 shadow-xl">
        {/* Desktop Icon Menu Items with Hover Labels */}

        {/* Home Icon */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick('home')}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer
                      ${activeSection === 'home' ? 'bg-gray-700 border-2 border-gray-500' : 'bg-transparent border border-gray-800'}
                      text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110`}
          aria-label="Home"
        >
          <FaHome size={22} className={activeSection === 'home' ? 'text-white' : 'text-gray-400 group-hover:text-white'} />
          <span className="absolute top-full mt-4 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Home
          </span>
        </Link>

        {/* About Icon */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick('about')}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer
                      ${activeSection === 'about' ? 'bg-gray-700 border-2 border-gray-500' : 'bg-transparent border border-gray-800'}
                      text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110`}
          aria-label="About"
        >
          <FaUser size={22} className={activeSection === 'about' ? 'text-white' : 'text-gray-400 group-hover:text-white'} />
          <span className="absolute top-full mt-4 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            About
          </span>
        </Link>

        {/* Skills Icon */}
        <Link
          to="skills"
          smooth={true}
          duration={500}
           offset={-80}
          onClick={() => handleLinkClick('skills')}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer
                      ${activeSection === 'skills' ? 'bg-gray-700 border-2 border-gray-500' : 'bg-transparent border border-gray-800'}
                      text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110`}
          aria-label="Skills"
        >
          <FaBriefcase size={22} className={activeSection === 'skills' ? 'text-white' : 'text-gray-400 group-hover:text-white'} />
          <span className="absolute top-full mt-4 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Skills
          </span>
        </Link>

        {/* Projects Icon */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick('projects')}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer
                      ${activeSection === 'projects' ? 'bg-gray-700 border-2 border-gray-500' : 'bg-transparent border border-gray-800'}
                      text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110`}
          aria-label="Projects"
        >
          <FaGraduationCap size={22} className={activeSection === 'projects' ? 'text-white' : 'text-gray-400 group-hover:text-white'} />
          <span className="absolute top-full mt-4 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Projects
          </span>
        </Link>

        {/* Contact Icon */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => handleLinkClick('contact')}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer
                      ${activeSection === 'contact' ? 'bg-gray-700 border-2 border-gray-500' : 'bg-transparent border border-gray-800'}
                      text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110`}
          aria-label="Contact"
        >
          <FaEnvelope size={22} className={activeSection === 'contact' ? 'text-white' : 'text-gray-400 group-hover:text-white'} />
          <span className="absolute top-full mt-4 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Contact
          </span>
        </Link>
      </div>

      <div className="md:hidden flex w-full justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md pb-4 border-b border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile text links with icons */}
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('home')}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 cursor-pointer"
              >
                <FaHome className="mr-3" /> Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('about')}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 cursor-pointer"
              >
                <FaUser className="mr-3" /> About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('skills')}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 cursor-pointer"
              >
                <FaBriefcase className="mr-3" /> Skills
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('projects')}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 cursor-pointer"
              >
                <FaGraduationCap className="mr-3" /> Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick('contact')}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 cursor-pointer"
              >
                <FaEnvelope className="mr-3" /> Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;