import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/about-22.jpg";
import { motion, useMotionValue } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // 3D Tilt for profile picture
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const handleTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    tiltX.set(y * -0.03);
    tiltY.set(x * 0.03);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <div
      className="border-b border-neutral-900 pb-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 🌟 COMET PARTICLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse absolute top-10 left-1/3 w-1 h-1 bg-purple-400 rounded-full blur-sm"></div>
        <div className="animate-ping absolute bottom-20 right-1/4 w-2 h-2 bg-pink-400 rounded-full"></div>
        <div className="animate-bounce absolute top-1/2 right-1/3 w-1 h-1 bg-blue-300 rounded-full"></div>
      </div>

      {/* 🌟 SPOTLIGHT FOLLOWING MOUSE */}
      <motion.div
        className="pointer-events-none absolute -inset-0 bg-gradient-to-r from-purple-800/10 via-pink-500/10 to-transparent opacity-40 blur-[100px]"
        style={{ x: mouseX, y: mouseY }}
      />

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* GLASSMORPHISM BACK CARD */}
            <motion.div
              className="absolute -top-8 -left-6 w-[380px] h-[220px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pb-4 font-thin tracking-tight text-[clamp(40px,6vw,90px)] leading-[0.95]"
            >
              Russel Havana
            </motion.h1>

            {/* JOB TITLE — ANIMATED GRADIENT + TYPING */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-transparent bg-clip-text bg-gradient-to-r 
              from-pink-400 via-purple-400 to-blue-400 
              animate-gradient-x text-[clamp(20px,3vw,36px)] font-light"
            >
              <Typewriter
                words={[
                  "QA Intern in Northgate Technologies Inc.",
                  "Software Developer",
                  "Mobile Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </motion.span>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 max-w-xl font-light tracking-tight leading-relaxed text-justify"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* DOWNLOAD CV BUTTON */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
              text-white font-medium rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Havana, Russel G. - Resume.pdf";
                link.download = "Russel-Havana_Resume.pdf";
                link.click();
              }}
            >
              Download CV
            </motion.button>
          </div>

          {/* RIGHT SIDE — FLOATING + 3D TILT PROFILE PIC */}
          <motion.div
            className="flex justify-center lg:justify-end"
            style={{ rotateX: tiltX, rotateY: tiltY }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <img
                src={profilePic}
                className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-2xl border border-white/20"
              />

              {/* FIXED SMOOTH GLOW — NO MORE LINES */}
              <div
                className="absolute inset-0 
      bg-gradient-radial from-purple-500/25 via-pink-400/20 to-transparent
      rounded-3xl blur-3xl -z-10 scale-150"
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
