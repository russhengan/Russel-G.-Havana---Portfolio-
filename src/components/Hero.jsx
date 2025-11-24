import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/about-22.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const buttonVariant = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 1.5 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/public/Havana, Russel G. - Resume.pdf"; // Now served from public/
    link.download = "Russel-Havana_Resume.pdf"; // Name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-15 lg:text-8xl"
            >
              Russel Havana
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              QA Intern in Northgate Technologies Inc. | Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Download CV Button */}
            <motion.button
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={handleDownloadCV}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Download CV
            </motion.button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Russel Havana"
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-gray-600/50"
            />
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 via-slate-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10 transform scale-110"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
