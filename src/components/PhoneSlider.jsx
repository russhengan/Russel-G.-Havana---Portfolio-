/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const PhoneSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  // ====== 3D Tilt Motion ======
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const tiltX = useTransform(x, [-100, 100], [10, -10]);
  const tiltY = useTransform(y, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // ====== Auto Slide Every 4s ======
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  return (
    <motion.div
      className="relative w-[330px] h-[700px] flex items-center justify-center select-none"
      style={{ rotateX: tiltY, rotateY: tiltX }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* ---- 3D Shadow Glow ---- */}
      <div className="absolute w-[330px] h-[700px] rounded-[60px] bg-black opacity-40 blur-3xl"></div>

      {/* ==== Main Phone Body (Titanium Frame) ==== */}
      <div className="absolute w-[300px] h-[650px] rounded-[58px] bg-[#1b1b1b] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[4px] border-[#2b2b2b] overflow-hidden" />

      {/* ==== Inner Screen Mask ==== */}
      <div className="absolute w-[280px] h-[630px] rounded-[50px] overflow-hidden z-10 bg-black">

        

        {/* ====== SLIDER (3 Image Carousel) ====== */}
        <div className="absolute inset-0 overflow-hidden">

          {/* Previous image (left) */}
          <motion.img
            key={`p-${prevIndex}`}
            src={images[prevIndex]}
            className="absolute top-0 left-[-100%] w-full h-full object-cover"
            animate={{ left: "-100%" }}
          />

          {/* Current image */}
          <motion.img
            key={`c-${index}`}
            src={images[index]}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ left: "100%" }}
            animate={{ left: "0%" }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          />

          {/* Next image (right) */}
          <motion.img
            key={`n-${nextIndex}`}
            src={images[nextIndex]}
            className="absolute top-0 left-[100%] w-full h-full object-cover"
            animate={{ left: "100%" }}
          />
        </div>
      </div>

      {/* Bottom Reflection */}
      <div className="absolute w-[250px] h-[40px] bottom-[-25px] bg-white opacity-10 blur-xl rounded-full"></div>

    </motion.div>
  );
};

export default PhoneSlider;
