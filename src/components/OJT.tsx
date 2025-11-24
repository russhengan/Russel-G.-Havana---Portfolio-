import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  WEEKLY_REPORTS,
  DTR_LIST,
  ACTIVITY_PHOTOS,
  NTI_GALLERY,
} from "../constants";
import MissionImg from "../assets/Mission.jpg";
import VisionImg from "../assets/Vision.jpg";

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-16"></div>
);

const OJT = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  return (
    <div className="border-b border-neutral-900 pb-24 max-w-5xl mx-auto px-4">
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        OJT Experience
      </motion.h2>

      {/* INTRODUCTION SECTION */}
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
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
          recorders for CCTV deployment. These experiences allowed me to develop
          strong technical competencies, refine my attention to detail, and gain
          firsthand exposure to the disciplined QA processes required in a
          professional IT environment. The internship not only enhanced my
          practical skills but also gave me a deeper appreciation for the
          standards, precision, and systematic workflow necessary in ensuring
          the quality and reliability of modern technology solutions.
        </p>
      </motion.section>

      <Divider />

      {/* COMPANY PROFILE */}
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-semibold text-neutral-200 mb-6">
          Northgate Technologies Inc.
        </h3>

        <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-700 backdrop-blur-lg">
          <p className="text-neutral-400 text-lg leading-relaxed text-justify">
            Northgate Technologies Inc. (NTI) is a Philippine-based IT solutions
            provider established in 1991, known for delivering innovative,
            reliable, and enterprise-grade technology services. For more than
            three decades, NTI has built a strong reputation as a trusted
            partner for both SMEs and large corporations by consistently
            adapting to technological advancements and maintaining high
            standards of quality and customer satisfaction. The company offers a
            wide range of integrated solutions, including IT hardware and
            peripherals, data center systems, structured cabling, storage,
            network security, cloud solutions, enterprise networking, and
            infrastructure technologies that strengthen business connectivity
            and operations. NTI also provides specialized systems such as
            digital signages, public announcement systems, fire detection and
            alarm systems, and various security solutions like surveillance and
            access control. In addition, NTI delivers service-focused solutions
            such as managed print services, document management systems, POS and
            retail systems, and self-ordering kiosks. With 75 service partners
            nationwide, a dedicated 16/5 customer support hotline, and multiple
            industry awards, NTI continues to be recognized for reliability,
            excellence, and leadership in the IT landscape. Guided by its
            mission and vision, NTI remains committed to empowering
            organizations through strategic technology implementation and
            high-quality solutions that support modern business needs.
          </p>
        </div>
      </motion.section>

      <Divider />

      {/* MISSION & VISION */}
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
          Mission & Vision
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MISSION IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 
            bg-neutral-900/50 backdrop-blur-xl cursor-pointer"
            onClick={() => setSelectedImage(MissionImg)}
          >
            <img src={MissionImg} className="w-full h-auto object-cover" />
            <div className="p-4 bg-neutral-900/60 border-t border-neutral-800 flex justify-center items-center">
              <p className="text-neutral-300 font-semibold text-lg text-center">
                NTI MISSION
              </p>
            </div>
          </motion.div>

          {/* VISION IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 
            bg-neutral-900/50 backdrop-blur-xl cursor-pointer"
            onClick={() => setSelectedImage(VisionImg)}
          >
            <img src={VisionImg} className="w-full h-auto object-cover" />
            <div className="p-4 bg-neutral-900/60 border-t border-neutral-800 flex justify-center items-center">
              <p className="text-neutral-300 font-semibold text-lg text-center">
                NTI VISION
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Divider />

      {/* RESPONSIBILITIES */}
      <section className="mb-20">
        <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
          My Responsibilities
        </h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            "Hardware Quality Testing",
            "UPS Load Simulation",
            "Digital Signage Inspection and Imaging",
            "Laptop and Desktop Diagnostics",
            "Documentation & Weekly QA Reports",
            "Asset Labeling and Warranty Tagging",
            "Hardware Troubleshooting",
            "QA Workflow Monitoring",
          ].map((task, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 bg-neutral-900/50 border border-neutral-700 rounded-2xl shadow-md backdrop-blur-lg hover:border-neutral-500 transition-all"
            >
              <p className="text-neutral-300 font-medium">{task}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Divider />

      <section className="mb-20">
        <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
          What I Learned
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Strengthened my technical understanding of enterprise hardware.",
            "Improved my diagnostic and troubleshooting workflow.",
            "Learned proper QA documentation, imaging, and report creation.",
            "Developed discipline in hardware testing and verification.",
            "Understood the importance of precision and accuracy in IT QA.",
            "Gained professional exposure to industry-level standards and processes.",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-neutral-900/40 border border-neutral-700 rounded-2xl backdrop-blur-xl shadow-lg"
            >
              <p className="text-neutral-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* NORTHGATE PHOTO GALLERY */}
      <section className="mb-20">
        <h3 className="text-3xl font-semibold text-neutral-200 mb-8">
          Northgate Technologies – Photo Gallery
        </h3>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {NTI_GALLERY.map((photo, index) => (
            <motion.img
              key={index}
              src={photo.src}
              onClick={() => setSelectedImage(photo.src)}
              className="w-full rounded-2xl shadow-lg border border-neutral-800 cursor-pointer 
              hover:scale-[1.02] transition-all duration-300 
              bg-neutral-900/40 backdrop-blur-xl"
              whileHover={{ scale: 1.02 }}
            />
          ))}
        </div>
      </section>

      <Divider />

      {/* WEEKLY REPORTS */}
      <section className="mb-20">
        <h3 className="text-2xl mb-6 text-neutral-300 font-semibold">
          Weekly Reports (PDF)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WEEKLY_REPORTS.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedPDF(item.file)}
              className="px-6 py-4 bg-neutral-900/60 backdrop-blur-lg border border-neutral-700 rounded-xl 
              hover:bg-neutral-800 transition-all text-left shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <p className="text-neutral-200 font-medium">{item.label}</p>
            </motion.button>
          ))}
        </div>
      </section>

      <Divider />

      {/* DTR SECTION */}
      <section className="mb-20">
        <h3 className="text-2xl mb-6 text-neutral-300 font-semibold">
          Daily Time Records (DTR)
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {DTR_LIST.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              onClick={() => setSelectedImage(src)}
              className="rounded-xl shadow-lg border border-neutral-800 cursor-pointer 
              hover:scale-105 transition-all object-cover h-40 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </section>

      <Divider />

      {/* ACTIVITY PHOTOS */}
      <section className="mb-20">
        <h3 className="text-2xl mb-6 text-neutral-300 font-semibold">
          Activity Photos
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITY_PHOTOS.map((photo, index) => (
            <motion.div key={index} className="relative group">
              <motion.img
                src={photo.src}
                onClick={() => setSelectedImage(photo.src)}
                className="rounded-2xl shadow-xl border border-neutral-800 cursor-pointer 
                object-cover h-64 w-full hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50"
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

      {/* PDF MODAL */}
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
              className="bg-neutral-900/70 p-6 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <iframe src={selectedPDF} className="w-full h-full rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OJT;
