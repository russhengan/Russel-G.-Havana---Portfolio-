import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import AutoSlider from "../components/AutoSlider";
import PhoneSlider from "../components/PhoneSlider"; // new component

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-24">

        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col items-center text-center">

            {/* SLIDER */}
            {project.type === "mobile" ? (
              <PhoneSlider images={project.images} />
            ) : (
              <AutoSlider images={project.images} />
            )}

            {/* TEXT CONTENT */}
            <div className="mt-8 max-w-3xl px-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-neutral-400 mb-6 text-justify">{project.description}</p>

              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
