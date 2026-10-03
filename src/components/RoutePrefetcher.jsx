"use client";

// Next.js Link already handles viewport-based prefetching automatically.
// Artificial HTTP fetch() loops in dev mode overload the compiler queue and cause ChunkLoadError timeouts.
export default function RoutePrefetcher() {
  return null;
}
