import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  WEEKLY_REPORTS,
  DTR_LIST,
  ACTIVITY_PHOTOS,
  NTI_GALLERY,
  NTI_OFFICE_PHOTOS,
  OJT_DOCUMENTATION,
  SAMPLE_WORKS,
  SEMINARS_CONDUCTED,
} from "../constants";
import MissionImg from "../assets/Mission.jpg";
import VisionImg from "../assets/Vision.jpg";

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-12"></div>
);

const OJT = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageArray, setSelectedImageArray] = useState<string[] | null>(null);
  const [selectedWork, setSelectedWork] = useState<(typeof SAMPLE_WORKS)[0] | null>(null);
  const [selectedSeminar, setSelectedSeminar] = useState<(typeof SEMINARS_CONDUCTED)[0] | null>(null);
  const [workImageIndex, setWorkImageIndex] = useState(0);
  const [seminarImageIndex, setSeminarImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"about" | "works" | "docs">("about");
  const [docFilter, setDocFilter] = useState<"all" | "requirements" | "legal" | "company" | "reports">("all");

  // Refs for scrolling to sections
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle tab click with scroll
  const handleTabClick = (tabId: "about" | "works" | "docs") => {
    setActiveTab(tabId);
    // Scroll to content section after state update
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Navigation Cards
  const navigationCards = [
    {
      id: "about",
      title: "About Host Training Establishment",
      description: "Learn about Northgate Technologies and my role",
      icon: "🏢",
    },
    {
      id: "works",
      title: "Sample Works",
      description: "Explore my hands-on projects and tasks",
      icon: "🛠️",
    },
    {
      id: "docs",
      title: "Documentation",
      description: "Download OJT Forms and Certificate",
      icon: "📄",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-24 max-w-5xl mx-auto px-4">
      {/* Main Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        OJT Experience
      </motion.h2>

      {/* Navigation Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      >
        {navigationCards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => handleTabClick(card.id as "about" | "works" | "docs")}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ translateY: -8, scale: 1.02 }}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
              activeTab === card.id
                ? "bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-purple-500 shadow-lg shadow-purple-500/30"
                : "bg-neutral-900/50 border-neutral-700 hover:border-neutral-600"
            }`}
          >
            <div className="text-3xl mb-2">{card.icon}</div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-neutral-400">{card.description}</p>
          </motion.button>
        ))}
      </motion.div>

      {/* Overview Section */}
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-semibold text-neutral-200 mb-6">
          About My OJT Experience
        </h3>

        <p className="text-neutral-400 leading-relaxed text-lg text-justify">
          During my 486-hour On-the-Job Training at Northgate Technologies Inc.,
          I served as a Quality Assurance Intern entrusted with a wide range of
          technical tasks that strengthened my understanding of enterprise-level
          IT operations. My work involved the inspection, testing, and
          validation of various hardware devices, including LG digital signages
          in multiple sizes; monitors from Lenovo, Dell, Samsung, Acer, and
          Asus; TP-Link network switches; and different laptop models such as
          ASUS, ROG, VivoBook, Dell, HP, Acer, and Lenovo. I also assisted in
          performing hardware installations such as RAM and SSD upgrades on
          laptops and desktops, setting up All-in-One and LDS desktop units,
          testing Vertiv UPS units rated at 650VA and 1000VA, installing
          dedicated GPUs on desktop systems, and configuring Dahua digital video
          recorders for CCTV deployment.
        </p>
      </motion.section>

      <Divider />

      {/* Content Sections - Tabbed */}
      <div ref={contentRef}>
        <AnimatePresence mode="wait">
        {/* ==================== ABOUT HTE SECTION ==================== */}
        {activeTab === "about" && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Company Profile */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-neutral-200 mb-6">
                Northgate Technologies Inc.
              </h3>
              <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-700 backdrop-blur-lg">
                <p className="text-neutral-400 text-lg leading-relaxed text-justify mb-4">
                  Northgate Technologies Inc. (NTI) is a Philippine-based IT
                  solutions provider established in 1991, known for delivering
                  innovative, reliable, and enterprise-grade technology services.
                  For more than three decades, NTI has built a strong reputation
                  as a trusted partner for both SMEs and large corporations by
                  consistently adapting to technological advancements and
                  maintaining high standards of quality and customer
                  satisfaction.
                </p>
                <p className="text-neutral-400 text-lg leading-relaxed text-justify">
                  With 75 service partners nationwide, a dedicated 16/5 customer
                  support hotline, and multiple industry awards, NTI continues
                  to be recognized for reliability, excellence, and leadership in
                  the IT landscape.
                </p>
              </div>
            </motion.section>

            <Divider />

            {/* Mission & Vision */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
                Mission & Vision
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-xl cursor-pointer"
                  onClick={() => setSelectedImage(MissionImg)}
                >
                  <img src={MissionImg} className="w-full h-auto object-cover" />
                  <div className="p-4 bg-neutral-900/60 border-t border-neutral-800 flex justify-center">
                    <p className="text-neutral-300 font-semibold text-lg">
                      NTI MISSION
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-xl cursor-pointer"
                  onClick={() => setSelectedImage(VisionImg)}
                >
                  <img src={VisionImg} className="w-full h-auto object-cover" />
                  <div className="p-4 bg-neutral-900/60 border-t border-neutral-800 flex justify-center">
                    <p className="text-neutral-300 font-semibold text-lg">
                      NTI VISION
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <Divider />

            {/* My Role */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-neutral-200 mb-6">
                My Role & Key Responsibilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-neutral-900/50 border border-neutral-700 rounded-2xl shadow-lg backdrop-blur-xl">
                  <h4 className="text-neutral-200 font-semibold mb-4">
                    Primary Responsibilities
                  </h4>
                  <ul className="space-y-3 text-neutral-400">
                    <li className="flex gap-3">
                      <span className="text-purple-400">✓</span>
                      <span>Hardware quality testing and device diagnostics</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400">✓</span>
                      <span>Technical documentation and weekly QA reports</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400">✓</span>
                      <span>Troubleshooting and problem resolution</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400">✓</span>
                      <span>Asset labeling and warranty management</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400">✓</span>
                      <span>QA workflow monitoring and improvements</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-neutral-900/40 border border-neutral-700 rounded-2xl shadow-lg backdrop-blur-xl">
                  <h4 className="text-neutral-200 font-semibold mb-4">
                    What I Learned
                  </h4>
                  <ul className="space-y-3 text-neutral-400">
                    <li className="flex gap-3">
                      <span className="text-pink-400">★</span>
                      <span>Technical understanding of enterprise hardware</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-pink-400">★</span>
                      <span>Professional QA documentation and process</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-pink-400">★</span>
                      <span>Precision and accuracy in IT operations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-pink-400">★</span>
                      <span>Industry-level standards and best practices</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-pink-400">★</span>
                      <span>Professional collaboration and communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <Divider />

            {/* Gallery */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
                Company Photo Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {NTI_OFFICE_PHOTOS.map((photo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ translateY: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative group overflow-hidden rounded-2xl shadow-lg border border-neutral-800 bg-neutral-900/40 cursor-pointer"
                    onClick={() => setSelectedImage(photo.src)}
                  >
                    <img
                      src={photo.src}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-semibold text-white bg-slate-800/90 px-3 py-1 rounded-full inline-block mb-2">
                        {photo.category}
                      </span>
                      <p className="text-neutral-200 font-semibold text-sm">
                        {photo.desc}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>
        )}

        {/* ==================== SAMPLE WORKS SECTION ==================== */}
        {activeTab === "works" && (
          <motion.div
            key="works"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Sample Works Grid */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
                Sample Works & Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SAMPLE_WORKS.map((work, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ translateY: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    {/* External Image */}
                    <div className="relative overflow-hidden rounded-t-2xl shadow-lg border-l border-t border-r border-neutral-700 bg-neutral-900/40 cursor-pointer h-56 mb-0">
                      <img
                        src={work.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage(work.image)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 bg-neutral-900/50 border-b border-l border-r border-neutral-700 rounded-b-2xl shadow-lg backdrop-blur-xl">
                      {/* Title & Category */}
                      <div className="mb-4">
                        <h4 className="text-neutral-200 font-semibold text-lg mb-2">
                          {work.title}
                        </h4>
                        <div className="flex gap-2 items-center">
                          <span className="text-xs font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 px-3 py-1 rounded-full">
                            {work.category}
                          </span>
                          {work.client && (
                            <span className="text-xs text-neutral-400 bg-neutral-800/60 px-3 py-1 rounded-full">
                              {work.client}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                        {work.description}
                      </p>

                      {/* Primary Tasks */}
                      <div className="mb-4">
                        <p className="text-neutral-300 font-semibold text-xs uppercase tracking-wider mb-2">
                          Primary Tasks
                        </p>
                        <ul className="space-y-2">
                          {work.primaryTasks.slice(0, 3).map((task, i) => (
                            <li key={i} className="flex gap-2 text-xs text-neutral-400">
                              <span className="text-purple-400 mt-0.5">✓</span>
                              <span>{task}</span>
                            </li>
                          ))}
                          {work.primaryTasks.length > 3 && (
                            <li className="text-xs text-neutral-500 italic">
                              + {work.primaryTasks.length - 3} more tasks
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* View More Button */}
                      <button
                        onClick={() => {
                          setSelectedWork(work);
                          setWorkImageIndex(0);
                        }}
                        className="w-full px-4 py-2 text-xs font-semibold bg-gradient-to-r from-pink-600/80 to-purple-600/80 hover:from-pink-600 hover:to-purple-600 border border-purple-500/30 rounded-lg text-white transition-all duration-300 shadow-lg"
                      >
                        View More Images
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />

            {/* Seminars Conducted */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
                Events Conducted
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SEMINARS_CONDUCTED.map((seminar, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ translateY: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg border border-neutral-700 bg-neutral-900/40 h-64 mb-4">
                      <img
                        src={seminar.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => {
                          setSelectedSeminar(seminar);
                          setSeminarImageIndex(0);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h4 className="text-neutral-200 font-semibold mb-2">
                      {seminar.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {seminar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />

            {/* DTR */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
                Daily Time Records (DTR)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {DTR_LIST.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    onClick={() => setSelectedImage(src)}
                    className="rounded-xl shadow-lg border border-neutral-800 cursor-pointer hover:scale-105 transition-all object-cover h-32 w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </div>
            </motion.section>
          </motion.div>
        )}

        {/* ==================== DOCUMENTATION SECTION ==================== */}
        {activeTab === "docs" && (
          <motion.div
            key="docs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Header with Document Count */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl font-bold text-neutral-100 mb-4">
                OJT Documentation
              </h3>
              <div className="flex justify-center gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-purple-500/30 rounded-full">
                  <p className="text-neutral-200 font-semibold">
                    <span className="text-2xl text-pink-400">{OJT_DOCUMENTATION.length}</span>
                    <span className="text-neutral-400 ml-2">Total Documents</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center mb-8"
            >
              {[
                { label: "All Documents", value: "all" as const },
                { label: "Requirements", value: "requirements" as const },
                { label: "Legal Documents", value: "legal" as const },
                { label: "Company Info", value: "company" as const },
                { label: "Reports", value: "reports" as const },
              ].map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setDocFilter(filter.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    docFilter === filter.value
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                      : "bg-neutral-800/60 border border-neutral-700 text-neutral-300 hover:border-neutral-600"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>

            {/* All Documents Grid */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {OJT_DOCUMENTATION.filter(
                  (doc) => docFilter === "all" || doc.category === docFilter
                ).map((doc, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ translateY: -8 }}
                    transition={{ duration: 0.2 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 border border-neutral-700 hover:border-purple-500/50 shadow-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 p-6"
                  >
                    {/* Gradient Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 via-transparent to-purple-600/0 group-hover:from-pink-600/10 group-hover:to-purple-600/10 transition-all duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full gap-4">
                      {/* Icon */}
                      <div className="text-5xl">{doc.icon}</div>

                      {/* Title */}
                      <div>
                        <h4 className="text-xl font-bold text-neutral-100 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                          {doc.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-400 leading-relaxed flex-grow">
                        {doc.description}
                      </p>

                      {/* Category Badge */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500">
                          {doc.category}
                        </span>
                        <div className="flex-grow h-px bg-gradient-to-r from-neutral-700 to-transparent"></div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        {/* View Button */}
                        <button
                          onClick={() => setSelectedPDF(doc.file)}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-600/80 to-purple-600/80 hover:from-pink-600 hover:to-purple-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-purple-500/50"
                        >
                          <span>🔍</span>
                          <span>View</span>
                        </button>

                        {/* Download Button */}
                        <a
                          href={doc.file}
                          download
                          className="flex-1 px-4 py-2 bg-neutral-800/60 hover:bg-neutral-700 border border-neutral-600 hover:border-neutral-500 text-neutral-200 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        >
                          <span>⬇️</span>
                          <span>Download</span>
                        </a>
                      </div>
                    </div>

                    {/* Border Animation */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Divider />

            {/* Quick Stats */}
            <motion.section
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: "Requirements", count: OJT_DOCUMENTATION.filter(d => d.category === "requirements").length, icon: "📋" },
                { label: "Legal Docs", count: OJT_DOCUMENTATION.filter(d => d.category === "legal").length, icon: "📝" },
                { label: "Company Info", count: OJT_DOCUMENTATION.filter(d => d.category === "company").length, icon: "🏢" },
                { label: "Reports", count: OJT_DOCUMENTATION.filter(d => d.category === "reports").length, icon: "📊" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileInView={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-neutral-900/50 border border-neutral-700 rounded-xl text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                    {stat.count}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.section>
          </motion.div>
        )}
        </AnimatePresence>
      </div>

      {/* Detailed Work Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="relative bg-neutral-900 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-200 text-3xl z-10 bg-black/40 hover:bg-black/60 rounded-full p-2 w-10 h-10 flex items-center justify-center transition-all"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Left: Image Carousel */}
                <div className="flex flex-col gap-4">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl h-80 bg-neutral-800">
                    <img
                      src={selectedWork.images?.[workImageIndex] || selectedWork.image}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedWork.images && selectedWork.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedWork.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setWorkImageIndex(idx)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            workImageIndex === idx
                              ? "border-pink-500 shadow-lg shadow-pink-500/50"
                              : "border-neutral-700 hover:border-neutral-600"
                          }`}
                        >
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Image Counter */}
                  {selectedWork.images && selectedWork.images.length > 1 && (
                    <div className="text-center text-sm text-neutral-400">
                      Image {workImageIndex + 1} of {selectedWork.images.length}
                    </div>
                  )}
                </div>

                {/* Right: Work Details */}
                <div className="flex flex-col gap-6">
                  {/* Title & Category */}
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-100 mb-3">
                      {selectedWork.title}
                    </h2>
                    <div className="flex gap-3 flex-wrap">
                      <span className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                        {selectedWork.category}
                      </span>
                      {selectedWork.client && (
                        <span className="px-4 py-2 bg-neutral-800 text-neutral-300 text-sm font-medium rounded-full">
                          {selectedWork.client}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-neutral-300 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="text-pink-500">📋</span> Description
                    </h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                      {selectedWork.description}
                    </p>
                  </div>

                  {/* Primary Tasks / Process */}
                  <div>
                    <h3 className="text-neutral-300 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="text-purple-500">⚙️</span> Key Tasks & Process
                    </h3>
                    <div className="space-y-2">
                      {selectedWork.primaryTasks.map((task, idx) => (
                        <div key={idx} className="flex gap-3 text-sm">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            {idx + 1}
                          </div>
                          <p className="text-neutral-300 pt-0.5">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Seminar Modal */}
      <AnimatePresence>
        {selectedSeminar && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSeminar(null)}
          >
            <motion.div
              className="relative bg-neutral-900 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSeminar(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-200 text-3xl z-10 bg-black/40 hover:bg-black/60 rounded-full p-2 w-10 h-10 flex items-center justify-center transition-all"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Left: Image Carousel */}
                <div className="flex flex-col gap-4">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl h-80 bg-neutral-800">
                    <img
                      src={selectedSeminar.images?.[seminarImageIndex] || selectedSeminar.image}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedSeminar.images && selectedSeminar.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedSeminar.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSeminarImageIndex(idx)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            seminarImageIndex === idx
                              ? "border-pink-500 shadow-lg shadow-pink-500/50"
                              : "border-neutral-700 hover:border-neutral-600"
                          }`}
                        >
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Image Counter */}
                  {selectedSeminar.images && selectedSeminar.images.length > 1 && (
                    <div className="text-center text-sm text-neutral-400">
                      Image {seminarImageIndex + 1} of {selectedSeminar.images.length}
                    </div>
                  )}
                </div>

                {/* Right: Seminar Details */}
                <div className="flex flex-col gap-6">
                  {/* Title */}
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-100 mb-3">
                      {selectedSeminar.title}
                    </h2>
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-semibold rounded-full inline-block">
                      Seminar Event
                    </span>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-neutral-300 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="text-pink-500">📋</span> Description
                    </h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                      {selectedSeminar.description}
                    </p>
                  </div>

                  {/* Gallery Info */}
                  <div>
                    <h3 className="text-neutral-300 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="text-purple-500">📸</span> Event Photos
                    </h3>
                    <p className="text-neutral-400 text-sm">
                      Featuring {selectedSeminar.images?.length || 1} photo{(selectedSeminar.images?.length || 1) > 1 ? 's' : ''} from this event. Click the thumbnails to browse through the gallery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedImageArray && selectedImageArray.length > 0 && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageArray(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImageArray[currentImageIndex]}
                className="w-full rounded-2xl shadow-2xl"
              />

              {/* Navigation Buttons */}
              {selectedImageArray.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? selectedImageArray.length - 1 : prev - 1
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) =>
                        prev === selectedImageArray.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                  >
                    →
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedImageArray.length}
                  </div>
                </>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedImageArray(null)}
                className="absolute -top-10 right-0 text-neutral-400 hover:text-neutral-200 text-2xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Single Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-3xl w-full rounded-2xl shadow-2xl"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPDF && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPDF(null)}
          >
            <motion.div
              className="bg-neutral-900/70 p-6 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedPDF(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-200 text-2xl z-10"
              >
                ✕
              </button>
              <iframe src={selectedPDF} className="w-full h-full rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OJT;
