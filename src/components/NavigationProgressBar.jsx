"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const resetTimerRef = useRef(null);

  const startProgress = () => {
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    if (timerRef.current) clearInterval(timerRef.current);

    setVisible(true);
    setProgress(20);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) {
          clearInterval(timerRef.current);
          return 85;
        }
        // Swift initial rise, then decelerates
        const diff = 85 - prev;
        return prev + Math.max(1, Math.floor(diff * 0.18));
      });
    }, 60);
  };

  const doneProgress = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(100);

    resetTimerRef.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 280);
  };

  // When pathname changes, complete progress
  useEffect(() => {
    doneProgress();
  }, [pathname]);

  // Expose global triggers and listen for link clicks
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__startNavProgress = startProgress;
      window.__doneNavProgress = doneProgress;

      const handleGlobalClick = (e) => {
        const anchor = e.target.closest("a");
        if (!anchor) return;

        const href = anchor.getAttribute("href") || anchor.getAttribute("to");
        const target = anchor.getAttribute("target");

        // Only trigger for internal links that navigate to a new route
        if (
          href &&
          href.startsWith("/") &&
          !href.startsWith("/#") &&
          target !== "_blank" &&
          !e.ctrlKey &&
          !e.metaKey &&
          !e.shiftKey
        ) {
          const targetPath = href.split("#")[0].split("?")[0];
          const currentPath = window.location.pathname;

          if (targetPath !== currentPath) {
            startProgress();
          }
        }
      };

      document.addEventListener("click", handleGlobalClick, { capture: true });
      return () => {
        document.removeEventListener("click", handleGlobalClick, { capture: true });
      };
    }
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999999] pointer-events-none transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFE57F] shadow-[0_0_14px_rgba(212,175,55,0.9)] transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? "180ms" : "220ms",
        }}
      />
    </div>
  );
}
