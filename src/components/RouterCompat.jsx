"use client";

import { useState, useEffect, useCallback } from "react";
import NextLink from "next/link";
import {
  useRouter,
  usePathname,
  useParams as useNextParams,
  useSearchParams as useNextSearchParams,
} from "next/navigation";
import { scrollToId } from "@/utils/scroll";

export function Link({
  to,
  href,
  state,
  children,
  className,
  style,
  onClick,
  onMouseEnter,
  onTouchStart,
  onFocus,
  target,
  rel,
  ...props
}) {
  const router = useRouter();
  const currentPathname = usePathname() || "/";

  let targetHref = href || to || "#";
  if (typeof targetHref === "object" && targetHref !== null) {
    targetHref = targetHref.pathname || "/";
  }

  // Cross-page state handling
  if (state?.scrollTo && typeof targetHref === "string" && !targetHref.includes("#")) {
    targetHref = `${targetHref}#${state.scrollTo}`;
  }

  // Extract pure path for prefetching (strip hash and search)
  const getPurePath = (path) => {
    if (typeof path !== "string") return null;
    return path.split("#")[0].split("?")[0] || "/";
  };

  // Instant prefetch on mouse hover, touch start, or focus
  const handlePrefetch = useCallback(() => {
    if (typeof targetHref === "string" && targetHref.startsWith("/") && !targetHref.startsWith("/#")) {
      const pure = getPurePath(targetHref);
      if (pure && pure !== currentPathname) {
        try {
          router.prefetch(pure);
        } catch (_) {}
      }
    }
  }, [targetHref, currentPathname, router]);

  const handleMouseEnter = (e) => {
    handlePrefetch();
    onMouseEnter?.(e);
  };

  const handleTouchStart = (e) => {
    handlePrefetch();
    onTouchStart?.(e);
  };

  const handleFocus = (e) => {
    handlePrefetch();
    onFocus?.(e);
  };

  const handleClick = (e) => {
    // If it's an in-page section jump on the homepage
    if (typeof targetHref === "string") {
      const isHashOnly = targetHref.startsWith("#");
      const isHomeHash = targetHref.startsWith("/#");

      if (isHashOnly || (isHomeHash && currentPathname === "/")) {
        const targetId = targetHref.replace("/#", "").replace("#", "");
        if (targetId) {
          e.preventDefault();
          scrollToId(targetId, 90, 380);
          onClick?.(e);
          return;
        }
      }

      // If navigating from subpage to homepage section with state or hash
      if (state?.scrollTo) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("absediel_scroll_to", state.scrollTo);
        }
      } else if (isHomeHash && currentPathname !== "/") {
        const targetId = targetHref.replace("/#", "");
        if (targetId && typeof window !== "undefined") {
          sessionStorage.setItem("absediel_scroll_to", targetId);
        }
      }

      // For route changes, trigger instant golden progress bar
      const pure = getPurePath(targetHref);
      if (
        pure &&
        pure.startsWith("/") &&
        pure !== currentPathname &&
        target !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey
      ) {
        if (typeof window !== "undefined" && window.__startNavProgress) {
          window.__startNavProgress();
        }
      }
    }

    onClick?.(e);
  };

  return (
    <NextLink
      href={targetHref}
      prefetch={true}
      className={className}
      style={style}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      onFocus={handleFocus}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useRouter();
  const currentPathname = usePathname() || "/";

  return (to, options) => {
    if (typeof to === "number") {
      if (typeof window !== "undefined") {
        window.history.go(to);
      }
      return;
    }

    if (typeof to === "string") {
      const isHashOnly = to.startsWith("#");
      const isHomeHash = to.startsWith("/#");

      // In-page smooth scroll on homepage
      if (isHashOnly || (isHomeHash && currentPathname === "/")) {
        const targetId = to.replace("/#", "").replace("#", "");
        if (targetId) {
          const success = scrollToId(targetId, 90, 380);
          if (success) return;
        }
      }

      // Cross-page scroll state
      if (options?.state?.scrollTo) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("absediel_scroll_to", options.state.scrollTo);
        }
      } else if (isHomeHash && currentPathname !== "/") {
        const targetId = to.replace("/#", "");
        if (targetId && typeof window !== "undefined") {
          sessionStorage.setItem("absediel_scroll_to", targetId);
        }
      }

      let finalTo = to;
      if (options?.state?.scrollTo && !to.includes("#")) {
        finalTo = `${to}#${options.state.scrollTo}`;
      }

      // Trigger instant navigation progress bar
      if (typeof window !== "undefined" && window.__startNavProgress) {
        window.__startNavProgress();
      }

      router.push(finalTo);
    }
  };
}

export function useLocation() {
  const pathname = usePathname() || "/";
  const [hash, setHash] = useState(() => (typeof window !== "undefined" ? window.location.hash : ""));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return {
    pathname,
    search: typeof window !== "undefined" ? window.location.search : "",
    hash,
    state: null,
  };
}

export function useParams() {
  const params = useNextParams();
  return params || {};
}

export function useSearchParams() {
  let searchParams = null;
  try {
    searchParams = useNextSearchParams();
  } catch (e) {
    // Fallback if rendered outside of a Suspense boundary
  }
  if (!searchParams && typeof window !== "undefined") {
    searchParams = new URLSearchParams(window.location.search);
  }
  return [searchParams || new URLSearchParams(), () => {}];
}

export const BrowserRouter = ({ children }) => <>{children}</>;
export const Routes = ({ children }) => <>{children}</>;
export const Route = () => null;

export default {
  Link,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
  BrowserRouter,
  Routes,
  Route,
};
