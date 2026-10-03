"use client";
import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

// ============================================================================
// ⚙️ CURSOR GLOW CONFIGURATION - CURSOR KE PICHE KA GLOW YAHAN SE ADJUST KAREIN
// ============================================================================
// In values ko kam/zyada karke aap cursor glow ki brightness aur size customize kar sakte hain:
export const CURSOR_SPOTLIGHT_CONFIG = {
  size: 420,                 // Glow circle ka size/diameter (pixels)
  centerOpacity: 0.22,       // Center me golden glow ki brightness (0.0 se 1.0) -> badhane se zyada bright hoga
  midOpacity: 0.08,          // Beech ke area me golden glow ki opacity (0.0 se 1.0)
  blurAmount: 24,            // Glow ka soft blur spread (pixels)
};

const CursorSpotlight = () => {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(-500, springConfig);
  const cursorY = useSpring(-500, springConfig);

  useEffect(() => {
    // Only enable on non-touch desktop devices with pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const offset = CURSOR_SPOTLIGHT_CONFIG.size / 2;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - offset);
      cursorY.set(e.clientY - offset);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        width: `${CURSOR_SPOTLIGHT_CONFIG.size}px`,
        height: `${CURSOR_SPOTLIGHT_CONFIG.size}px`,
        filter: `blur(${CURSOR_SPOTLIGHT_CONFIG.blurAmount}px)`,
        background: `radial-gradient(circle, rgba(212, 175, 55, ${CURSOR_SPOTLIGHT_CONFIG.centerOpacity}) 0%, rgba(212, 175, 55, ${CURSOR_SPOTLIGHT_CONFIG.midOpacity}) 45%, transparent 70%)`,
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-30 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
};

export default CursorSpotlight;
