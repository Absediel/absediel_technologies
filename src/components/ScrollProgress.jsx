"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFE57F] origin-left z-[99999] shadow-[0_0_12px_rgba(212,175,55,0.8)] pointer-events-none"
    />
  );
};

export default ScrollProgress;
