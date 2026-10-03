"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Expertise from "@/sections/Expertise";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Projects from "@/sections/Projects";
import OurTeam from "@/sections/OurTeam";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-transparent text-white">
      <Navbar />
      <Hero />
      <Expertise />
      <Services />
      <WhyChooseUs />
      <Projects />
      <OurTeam />
      <Testimonials />
      <FAQ />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <FinalCTA />
      <Footer />
    </main>
  );
}
