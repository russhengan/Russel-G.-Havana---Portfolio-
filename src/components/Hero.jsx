import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/grad-1.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["QA & Testing Enthusiast", "Application Developer", "Software Developer"];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
      }, 1400);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setIsPaused(true);
          setIsDeleting(true);
        }
      } else if (text.length > 0) {
        setText(currentRole.slice(0, text.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 48 : 85);

    return () => clearTimeout(timer);
  }, [text, isDeleting, isPaused, roleIndex]);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/RUSSEL-HAVANA-RESUME-FINAL.pdf";
    link.download = "RUSSEL-G-HAVANA-RESUME.pdf";
    link.click();
  };

  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-8 sm:pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-[10%] h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-2 sm:px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
            Available for entry-level opportunities
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            I’m Russel Havana,
            <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
              {text || ""}
              <span className="ml-1 inline-block h-[0.9em] w-[0.5ch] animate-pulse rounded-sm bg-current align-middle" />
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 text-justify">
            {HERO_CONTENT}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Projects
            </button>
            <button
              type="button"
              onClick={downloadResume}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-200"
            >
              Download Resume
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: "4+", label: "Projects built" },
              { value: "486h", label: "OJT experience" },
              { value: "BSIT", label: "Academic background" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-cyan-950/40">
            <img
              src={profilePic}
              alt="Russel Havana"
              loading="lazy"
              className="h-[360px] w-full rounded-[1.5rem] object-cover object-top sm:h-[420px]"
            />
            <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Focused on</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Building practical web and mobile solutions</li>
                <li>• QA-driven development and clean testing habits</li>
                <li>• Strong communication and teamwork in fast-paced environments</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
