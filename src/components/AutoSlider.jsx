/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AutoSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [imgRatio, setImgRatio] = useState(0.5625); // default 16:9

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const img = new Image();
    img.src = images[index];
    img.onload = () => {
      setImgRatio(img.height / img.width); 
    };
  }, [index, images]);

  // Auto height based on aspect ratio
  const dynamicHeight = Math.min(600, Math.max(350, imgRatio * 1100));

  return (
    <div className="w-[95%] lg:w-[1100px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">

      {/* Browser Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border-b border-neutral-700">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-4 text-neutral-400 text-sm">Preview</span>
      </div>

      {/* Auto-Fitting Slider */}
      <div
        className="w-full bg-black flex items-center justify-center overflow-hidden"
        style={{ height: `${dynamicHeight}px` }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            className="max-w-full max-h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

    </div>
  );
};

export default AutoSlider;
