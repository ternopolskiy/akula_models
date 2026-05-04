"use client";

import { Hero } from "@/components/Hero";
import { ModelsGrid } from "@/components/ModelsGrid";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ModelsGrid />
      <ScrollToTop />
    </main>
  );
}
