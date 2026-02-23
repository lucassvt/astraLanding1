"use client";

import dynamic from "next/dynamic";

const StarParticles = dynamic(
  () =>
    import("@/components/ui/StarParticles").then((mod) => mod.StarParticles),
  { ssr: false }
);

export function StarParticlesWrapper() {
  return <StarParticles />;
}
