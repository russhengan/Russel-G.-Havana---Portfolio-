import logo from "../assets/russel.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Technologies", id: "technologies" },
    { name: "Project Experiences", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "OJT Experience", id: "ojt" },
    { name: "Contact Me", id: "contact" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (let link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8}}
        className="mb-20 flex items-center justify-between py-6"
      >
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-12 rounded-full border-2 border-purple-600 shadow-lg" src={logo} alt="logo"/>
        </div>

        {/* Navigation Links - Center (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-medium transition-all duration-300 pb-1 border-b-2 ${
                activeSection === link.id
                  ? "text-purple-400 border-purple-500"
                  : "text-neutral-300 border-transparent hover:text-purple-400"
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Social Icons + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl">
            {/* LinkedIn */}
            <motion.a 
              href="https://www.linkedin.com/in/russel-havana-99017336a/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-neutral-300 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin/>
            </motion.a>
            
            {/* GitHub */}
            <motion.a 
              href="https://github.com/russhengan" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-neutral-300 hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
            
            {/* Facebook */}
            <motion.a 
              href="https://www.facebook.com/russhavana24" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-neutral-300 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook />
            </motion.a>
            
            {/* Instagram */}
            <motion.a 
              href="https://www.instagram.com/yorusswtf/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-neutral-300 hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram/>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-2xl text-neutral-300 hover:text-purple-400 transition-colors"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            
            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-neutral-900 border-l border-neutral-800 z-50 lg:hidden pt-20 px-6"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`text-left text-lg font-medium transition-all duration-300 pb-2 border-b-2 ${
                      activeSection === link.id
                        ? "text-purple-400 border-purple-500"
                        : "text-neutral-300 border-transparent hover:text-purple-400"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-4 text-2xl mt-8 pt-8 border-t border-neutral-800">
                <motion.a 
                  href="https://www.linkedin.com/in/russel-havana-99017336a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-neutral-300 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin/>
                </motion.a>
                <motion.a 
                  href="https://github.com/russhengan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-neutral-300 hover:text-gray-400 transition-colors"
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/russhavana24" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-neutral-300 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/yorusswtf/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-neutral-300 hover:text-pink-500 transition-colors"
                >
                  <FaInstagram/>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar