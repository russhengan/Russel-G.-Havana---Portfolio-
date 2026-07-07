import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com", label: "GitHub" },
    { icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950/50">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white mb-2">Russel Havana</h3>
            <p className="text-neutral-400 text-sm">
              QA Intern & Software Developer passionate about creating innovative digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              {["About", "Technologies", "Projects", "OJT", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-purple-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Have a question? Feel free to reach out!
            </p>
            <a
              href="#contact"
              className="inline-block px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-neutral-500">
            © {currentYear} Russel Havana. All rights reserved.
          </p>

          {/* Social Links */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, color: "#a78bfa" }}
                className="text-neutral-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
