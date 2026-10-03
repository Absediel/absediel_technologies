"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToId, snappyScrollTo } from "@/utils/scroll";

const ScrollToHash = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Check if cross-page scroll target is saved in sessionStorage
    const storedTarget = sessionStorage.getItem("absediel_scroll_to");
    const hashTarget = window.location.hash ? window.location.hash.replace("#", "") : null;
    const targetId = storedTarget || hashTarget;

    if (targetId) {
      sessionStorage.removeItem("absediel_scroll_to");

      let attempts = 0;
      const maxAttempts = 15;

      const performScroll = () => {
        if (!targetId || targetId === "home") {
          snappyScrollTo(0, 320);
          return;
        }

        const success = scrollToId(targetId, 90, 380);
        if (success) {
          if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
          }
        } else if (attempts < maxAttempts) {
          attempts++;
          requestAnimationFrame(() => {
            setTimeout(performScroll, 40);
          });
        }
      };

      // Initial fast trigger
      const timer = setTimeout(performScroll, 30);
      return () => clearTimeout(timer);
    } else {
      // Instant top scroll on standard page routes without hash
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  // Intercept in-page hash anchor clicks
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || target.getAttribute("to");
      if (href && (href.startsWith("#") || href.startsWith("/#"))) {
        const parts = href.split("#");
        const targetHash = parts[parts.length - 1];
        const targetPath = parts[0] || "/";

        const currentPath = window.location.pathname;
        const isCurrentPage = targetPath === "" || targetPath === "/" ? currentPath === "/" : targetPath === currentPath;

        if (isCurrentPage && targetHash) {
          e.preventDefault();
          const success = scrollToId(targetHash, 90, 380);
          if (success && window.location.hash) {
            window.history.replaceState(null, "", currentPath);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  return null;
};

export default ScrollToHash;
