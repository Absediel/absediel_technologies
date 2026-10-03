"use client";
import { useEffect, useRef } from "react";

// ============================================================================
// ⚙️ PARTICLES CONFIGURATION - PARTICLES KI VISIBILITY YAHAN SE ADJUST KAREIN
// ============================================================================
// In values ko kam/zyada karke aap particles aur connecting lines ko customize kar sakte hain:
export const PARTICLES_CONFIG = {
  canvasOpacity: 0.85,        // Puri canvas ki visibility (0.0 = adrishya, 1.0 = full bright)
  dotOpacity: 0.75,           // Chote dots ka golden color brightness (0.0 se 1.0)
  dotMinRadius: 1.2,          // Dot ka minimum size (pixels)
  dotMaxRadius: 2.6,          // Dot ka maximum size (pixels)
  lineMaxOpacity: 0.35,       // Dots ke beech connecting lines ki maximum opacity (0.0 se 1.0)
  lineWidth: 0.85,            // Lines ki motai/thickness (pixels)
  particleCountDesktop: 55,   // Desktop screen par kul kitne particles honge
  particleCountMobile: 28,    // Mobile screen par kul kitne particles honge
  connectionDistance: 130,    // Lines kitne distance par aapas me judengi (pixels)
};

const TechCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile
      ? PARTICLES_CONFIG.particleCountMobile
      : PARTICLES_CONFIG.particleCountDesktop;
    const maxDistance = isMobile
      ? Math.round(PARTICLES_CONFIG.connectionDistance * 0.7)
      : PARTICLES_CONFIG.connectionDistance;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius =
          Math.random() *
            (PARTICLES_CONFIG.dotMaxRadius - PARTICLES_CONFIG.dotMinRadius) +
          PARTICLES_CONFIG.dotMinRadius;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        else if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        else if (this.y > height) this.y = 0;

        // Subtle mouse repulsion/attraction
        if (!isMobile) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.2;
            this.y -= (dy / dist) * force * 1.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${PARTICLES_CONFIG.dotOpacity})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles with golden lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha =
              (1 - dist / maxDistance) * PARTICLES_CONFIG.lineMaxOpacity;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = PARTICLES_CONFIG.lineWidth;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity: PARTICLES_CONFIG.canvasOpacity }}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default TechCanvas;
