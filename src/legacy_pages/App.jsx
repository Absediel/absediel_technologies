"use client";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToHash from "./components/ScrollToHash";
import ScrollProgress from "./components/ScrollProgress";
import TechCanvas from "./components/TechCanvas";
import CursorSpotlight from "./components/CursorSpotlight";
import Hero from "./sections/Hero";
import Expertise from "./sections/Expertise";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Projects from "./sections/Projects";
import ServiceDetails from "./pages/ServiceDetails";
import ProjectDetails from "./pages/ProjectDetails";
import Quotation from "./pages/Quotation";
import OurTeam from "./sections/OurTeam";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import FinalCTA from "./sections/FinalCTA";
import Contact from "./sections/Contact";
import { MainContent } from "./constant/MainContent";

function App() {
  useEffect(() => {
    let faviconLink =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");

    faviconLink.rel = "icon";
    faviconLink.href = MainContent.appFavicon;
    document.head.appendChild(faviconLink);
    document.title = MainContent.appName;
  }, []);

  return (
    <BrowserRouter>
      <ScrollProgress />
      <CursorSpotlight />
      <TechCanvas />
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Expertise />
              <Services />
              <WhyChooseUs />
              <Projects />
              <OurTeam />
              <Testimonials />
              <FAQ />
              <Contact />
              <FinalCTA />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <>
              <Navbar />
              <ServiceDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <>
              <Navbar />
              <ProjectDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/quotation"
          element={
            <>
              <Navbar />
              <Quotation />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;