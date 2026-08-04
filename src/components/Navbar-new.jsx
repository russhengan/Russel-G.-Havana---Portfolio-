import logo from "../assets/russel.jpg";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "technologies" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "OJT", id: "ojt" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed left-0 right-0 top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40"
          >
            <img className="h-9 w-9 rounded-full border border-cyan-400/30 object-cover" src={logo} alt="Russel Havana logo" loading="lazy" />
            <span className="text-sm font-semibold text-slate-100">Russel Havana</span>
          </button>

          <div className="hidden flex-1 items-center justify-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`whitespace-nowrap border-b-2 pb-1 text-sm font-medium transition ${
                  activeSection === link.id
                    ? "border-cyan-400 text-cyan-300"
                    : "border-transparent text-slate-300 hover:border-cyan-400/50 hover:text-cyan-200"
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 sm:flex">
              {[
                { icon: FaLinkedin, url: "https://www.linkedin.com/in/russel-havana-99017336a/", color: "hover:text-cyan-400" },
                { icon: FaGithub, url: "https://github.com/russhengan", color: "hover:text-slate-200" },
                { icon: FaFacebook, url: "https://www.facebook.com/russhavana24", color: "hover:text-blue-500" },
                { icon: FaInstagram, url: "https://www.instagram.com/yorusswtf/", color: "hover:text-pink-500" },
              ].map(({ icon: Icon, url, color }) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12 }}
                  className={`text-lg text-slate-300 transition ${color}`}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-xl text-slate-300 lg:hidden"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-30 bg-slate-950/70 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-40 h-full w-72 border-l border-white/10 bg-slate-950/95 p-6 pt-24 lg:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    whileTap={{ scale: 0.97 }}
                    className={`border-b border-white/10 pb-2 text-left text-base font-medium transition ${
                      activeSection === link.id ? "text-cyan-300" : "text-slate-300 hover:text-cyan-200"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
