/**
 * Silky smooth scrolling with easeInOutCubic curve and dynamic distance-based timing.
 * Creates a premium, luxurious scroll animation that feels natural, fluid, and elegant.
 */

let currentAnimationId = null;

export function snappyScrollTo(targetPosition, customDuration = null) {
  if (typeof window === "undefined") return;

  // Cancel any ongoing scroll animation so they don't fight
  if (currentAnimationId !== null) {
    cancelAnimationFrame(currentAnimationId);
    currentAnimationId = null;
  }

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  if (Math.abs(distance) < 3) return;

  // Dynamic duration based on distance:
  // Short scrolls (~400px) take ~440ms; long scrolls (~2500px) take ~640ms.
  // Feels extremely natural — not too rushed, not sluggish.
  const distanceFactor = Math.min(Math.abs(distance) / 1000, 2);
  const duration = customDuration || Math.round(440 + distanceFactor * 100);

  let startTime = null;

  // Cancel smooth scroll immediately if user manually interacts (wheel/touch)
  const cancelOnUserInteraction = () => {
    if (currentAnimationId !== null) {
      cancelAnimationFrame(currentAnimationId);
      currentAnimationId = null;
    }
    removeListeners();
  };

  const removeListeners = () => {
    window.removeEventListener("wheel", cancelOnUserInteraction);
    window.removeEventListener("touchmove", cancelOnUserInteraction);
  };

  window.addEventListener("wheel", cancelOnUserInteraction, { passive: true });
  window.addEventListener("touchmove", cancelOnUserInteraction, { passive: true });

  function step(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Premium easeInOutCubic: gentle silky start, smooth glide, soft feather landing
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      currentAnimationId = requestAnimationFrame(step);
    } else {
      currentAnimationId = null;
      removeListeners();
    }
  }

  currentAnimationId = requestAnimationFrame(step);
}

/**
 * Scroll to an element by its ID with an offset for fixed header
 */
export function scrollToId(id, headerOffset = 90, customDuration = null) {
  if (typeof window === "undefined" || !id) return false;

  if (id === "home") {
    snappyScrollTo(0, customDuration);
    return true;
  }

  const el = document.getElementById(id);
  if (el) {
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    snappyScrollTo(Math.max(0, offsetPosition), customDuration);
    return true;
  }

  return false;
}
