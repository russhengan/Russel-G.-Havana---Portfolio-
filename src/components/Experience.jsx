import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">My timeline of practical projects and technical responsibility.</h2>
        </motion.div>

        <div className="relative ml-1 space-y-8 border-l border-cyan-400/20 pl-6">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{experience.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-400">{experience.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-300">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
