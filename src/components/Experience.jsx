import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
  <motion.h2
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5 }}
    className="my-20 text-center text-4xl font-bold"
  >
    Project Experiences
  </motion.h2>

  <div className="max-w-5xl mx-auto px-4">
    {EXPERIENCES.map((experience, index) => (
      <div key={index} className="mb-16 flex flex-col gap-6 lg:flex-row">
        {/* Year */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/5 flex-shrink-0"
        >
          <p className="text-sm text-neutral-400 font-semibold">{experience.year}</p>
        </motion.div>

        {/* Experience Details */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-4/5"
        >
          <h6 className="mb-3 font-semibold text-lg text-neutral-200">
            {experience.role} -{" "}
            <span className="text-purple-400">
              {experience.company}
            </span>
          </h6>

          <p className="mb-5 text-neutral-400 text-justify leading-relaxed">{experience.description}</p>

          {/* Tags container */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-neutral-900/50 border border-neutral-700 px-3 py-1.5 text-xs font-medium text-purple-400 hover:border-purple-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Experience;
