import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiPhp, SiBootstrap, SiMysql, SiMongodb, SiExpress, SiExpo, SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: AiOutlineHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: DiCss3, color: "text-blue-500" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-slate-300" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
    ],
  },
  {
    title: "Mobile & QA",
    items: [
      { name: "React Native", icon: RiReactjsLine, color: "text-cyan-300" },
      { name: "Expo", icon: SiExpo, color: "text-white" },
      { name: "Testing mindset", icon: SiBootstrap, color: "text-fuchsia-400" },
      { name: "UI/UX polish", icon: SiBootstrap, color: "text-purple-500" },
    ],
  },
];

const Technologies = () => {
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Core skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">My practical toolkit for modern product and QA-focused work.</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                      <Icon className={`text-lg ${item.color}`} />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
