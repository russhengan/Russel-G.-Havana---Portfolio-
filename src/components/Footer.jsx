import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/russel-havana-99017336a/", label: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com/russhengan", label: "GitHub" },
    { icon: FaFacebook, url: "https://www.facebook.com/russhavana24", label: "Facebook" },
    { icon: FaInstagram, url: "https://www.instagram.com/yorusswtf/", label: "Instagram" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <h3 className="text-lg font-semibold text-white">Russel Havana</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">Developer and QA-focused problem solver building practical, polished digital experiences.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
            <h3 className="text-lg font-semibold text-white">Quick links</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="transition hover:text-cyan-200">About</a></li>
              <li><a href="#technologies" className="transition hover:text-cyan-200">Skills</a></li>
              <li><a href="#projects" className="transition hover:text-cyan-200">Projects</a></li>
              <li><a href="#contact" className="transition hover:text-cyan-200">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
            <h3 className="text-lg font-semibold text-white">Let’s connect</h3>
            <div className="mt-3 flex gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {currentYear} Russel Havana. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
