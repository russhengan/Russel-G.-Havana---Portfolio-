import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import AutoSlider from "../components/AutoSlider";
import PhoneSlider from "../components/PhoneSlider";

const Projects = () => {
  return (
    <div className="border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Selected work</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">My projects that reflect both technical execution and user-centered thinking.</h2>
        </motion.div>

        <div className="grid gap-8">
          {PROJECTS.map((project, index) => {
            const githubHref = project.githubLink || "https://github.com/russhengan";
            const demoHref = project.demoLink || "#contact";
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70"
              >
                <div className="p-4 sm:p-6">
                  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={githubHref} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200">GitHub</a>
                      <a href={demoHref} target={demoHref.startsWith("http") ? "_blank" : undefined} rel={demoHref.startsWith("http") ? "noreferrer" : undefined} className="rounded-full bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Demo / Contact</a>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/40 p-2">
                    {project.type === "mobile" ? <PhoneSlider images={project.images} /> : <AutoSlider images={project.images} />}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
