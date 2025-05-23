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
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: FaHome, label: 'Home', glowColor: 'red-500' },
    { id: 'about', icon: FaUser, label: 'About', glowColor: 'red-500' },
    { id: 'skills', icon: FaBriefcase, label: 'Skills', glowColor: 'red-500' },
    { id: 'projects', icon: FaGraduationCap, label: 'Projects', glowColor: 'red-500' },
    { id: 'education', icon: FaFileAlt, label: 'Education', glowColor: 'red-500' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact', glowColor: 'red-500' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center"
    >
      {/* Desktop */}
      <div className="hidden md:flex bg-gray-900/60 backdrop-blur-md rounded-full py-2 px-4 space-x-4 border border-gray-700 shadow-xl">
        {navItems.map(({ id, icon: Icon, label, glowColor }) => (
          <Link
            key={id}
            to={id}
            smooth={true}
            duration={500}
            offset={id === 'skills' ? -80 : 0}
            onClick={() => handleLinkClick(id)}
            className="relative group flex items-center justify-center w-12 h-12 cursor-pointer"
            aria-label={label}
          >
            {activeSection === id && (
              <motion.div
                layoutId="active-glow"
                className={`absolute w-14 h-14 rounded-full border-2 border-${glowColor} bg-${glowColor}/20 animate-pulse z-0`}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={`z-10 flex items-center justify-center w-12 h-12 rounded-full 
                ${activeSection === id ? `bg-gray-800 border-2 border-${glowColor}` : 'bg-transparent border border-gray-700'}
                text-white transition-all duration-300 ease-in-out`}
            >
              <Icon size={22} className={activeSection === id ? `text-${glowColor}` : 'text-gray-400 group-hover:text-white'} />
            </motion.div>
            <span className="absolute top-full mt-4 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex w-full justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
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
              {navItems.map(({ id, icon: Icon, label, glowColor }) => (
                <Link
                  key={id}
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={id === 'skills' ? -80 : 0}
                  onClick={() => handleLinkClick(id)}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 cursor-pointer"
                >
                  <Icon className={`mr-3 ${activeSection === id ? `text-${glowColor}` : ''}`} /> {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
