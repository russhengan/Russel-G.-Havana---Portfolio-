import aboutImg from "../assets/russ-home.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    { title: "Education", value: "BS Information Technology", detail: "Pamantasan ng Lungsod ng Valenzuela" },
    { title: "Current focus", value: "Software Development", detail: "QA and testing with a product mindset" },
    { title: "Strength", value: "Detail-oriented", detail: "I enjoy building polished, reliable experiences" },
    { title: "Goal", value: "Growth-minded", detail: "Ready to contribute in real-world engineering teams" },
  ];

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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About me</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A developer who values clarity, quality, and user impact.</h2>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-3"
          >
            <img
              src={aboutImg}
              alt="Russel Havana"
              loading="lazy"
              className="h-[360px] w-full rounded-[1.4rem] object-cover object-center sm:h-[440px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-8 text-slate-300 text-justify">{ABOUT_TEXT}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.title}</p>
                  <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
