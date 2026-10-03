"use client";
import { useRef, useState, useCallback } from "react";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(212, 175, 55, 0.14)",
  borderColor = "rgba(212, 175, 55, 0.4)",
  tilt = false,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use CSS custom properties for 60fps GPU acceleration with 0 React re-renders!
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${y}px`);

    if (tilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }, [tilt]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.setProperty("--spotlight-x", "-1000px");
      cardRef.current.style.setProperty("--spotlight-y", "-1000px");
      if (tilt) {
        cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      }
    }
  }, [tilt]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        "--spotlight-x": "-1000px",
        "--spotlight-y": "-1000px",
        transition: "transform 0.15s ease-out, border-color 0.3s ease",
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] ${className}`}
      {...props}
    >
      {/* Spotlight Radial Gradient on Hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at var(--spotlight-x) var(--spotlight-y), ${spotlightColor}, transparent 45%)`,
        }}
        aria-hidden="true"
      />

      {/* Border Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at var(--spotlight-x) var(--spotlight-y), ${borderColor}, transparent 35%)`,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
