import logo from "../assets/russel.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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

      {/* Navigation Links - Center */}
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

      {/* Social Icons - Right */}
      <div className="m-8 flex items-center gap-4 text-2xl">
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
    </motion.nav>
  );
};

export default Navbar