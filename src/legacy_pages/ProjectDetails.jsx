"use client";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLock,
  FaExternalLinkAlt,
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
  FaRedo,
} from "react-icons/fa";

import Container from "../components/Container";
import Button from "../components/Button";
import projects from "../data/Projects";

const ProjectDetails = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params?.slug;
  const [viewportMode, setViewportMode] = useState("desktop");
  const [iframeKey, setIframeKey] = useState(0);

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-4xl font-bold text-white">
            Project Not Found
          </h1>

          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              text-[#D4AF37]
              hover:text-white
              transition-colors
            "
          >
            ← Back to Projects
          </Link>

        </div>
      </main>
    );
  }

  const Icon = project.icon;

  return (
    <main
      className="
        min-h-screen
        relative
        overflow-hidden
        pt-28
        sm:pt-32
        lg:pt-36
        pb-16
        sm:pb-20
        lg:pb-28
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          top-20
          right-[-150px]
          w-[300px]
          h-[300px]
          sm:w-[450px]
          sm:h-[450px]
          lg:w-[550px]
          lg:h-[550px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[120px]
          pointer-events-none
        "
      />

      <Container>

        {/* =========================
            BACK BUTTON
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >

          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              sm:text-base
              text-gray-400
              hover:text-[#D4AF37]
              transition-all
              duration-300
              hover:gap-3
            "
          >
            <span>←</span>
            <span>Back to Projects</span>
          </Link>

        </motion.div>


        {/* =========================
            HERO
        ========================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-start
              lg:justify-between
              gap-10
            "
          >

            {/* Project Information */}

            <div className="max-w-4xl">

              <div
                className="
                  flex
                  h-14
                  w-14
                  sm:h-16
                  sm:w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D4AF37]/30
                  bg-[#D4AF37]/5
                  text-[#D4AF37]
                "
              >
                <Icon className="text-3xl" />
              </div>


              <p
                className="
                  mt-8
                  text-[#D4AF37]
                  tracking-[4px]
                  uppercase
                  text-xs
                  sm:text-sm
                "
              >
                {project.category}
              </p>


              <h1
                className="
                  mt-4
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  leading-[1.05]
                  text-white
                "
              >
                {project.title}
              </h1>


              <p
                className="
                  mt-6
                  text-base
                  sm:text-lg
                  lg:text-xl
                  leading-8
                  text-gray-400
                  max-w-3xl
                "
              >
                {project.description}
              </p>

            </div>


            {/* Project Meta */}

            <div
              className="
                w-full
                lg:w-[260px]
                shrink-0
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                p-6
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[2px]
                    text-gray-500
                  "
                >
                  Project Type
                </p>

                <p className="mt-2 text-white">
                  {project.type}
                </p>

              </div>


              <div
                className="
                  mt-6
                  pt-6
                  border-t
                  border-white/10
                "
              >

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[2px]
                    text-gray-500
                  "
                >
                  Year
                </p>

                <p className="mt-2 text-white">
                  {project.year}
                </p>

              </div>

            </div>

          </div>

        </motion.section>


        {/* =========================
            PROJECT METRICS & OVERVIEW
        ========================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {/* Card 1: Overview */}
            <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[3px] uppercase">
                  PROJECT OVERVIEW
                </p>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
                  About the Project
                </h3>
                <p className="mt-5 text-sm sm:text-base leading-7 text-gray-400">
                  {project.overview}
                </p>
              </div>
              {project.liveUrl && (
                <div className="mt-8">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:underline"
                  >
                    Explore Live Project <span>→</span>
                  </a>
                </div>
              )}
            </div>

            {/* Card 2: Impact / Metrics */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[3px] uppercase">
                  KEY IMPACT
                </p>
                <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                  Project Metrics
                </h3>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      {project.slug === "alex-voyage"
                        ? "99.9%"
                        : project.slug === "school-erp"
                        ? "40%+"
                        : project.slug === "music-app"
                        ? "50k+"
                        : "2x+"}
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                      {project.slug === "alex-voyage"
                        ? "Booking Success Rate"
                        : project.slug === "school-erp"
                        ? "Administrative Efficiency"
                        : project.slug === "music-app"
                        ? "Active Listeners"
                        : "Search Visibility Increase"}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      {project.slug === "alex-voyage"
                        ? "< 1.5s"
                        : project.slug === "school-erp"
                        ? "10k+"
                        : project.slug === "music-app"
                        ? "128kbps"
                        : "Top 3"}
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                      {project.slug === "alex-voyage"
                        ? "Page Load Time"
                        : project.slug === "school-erp"
                        ? "Students Managed"
                        : project.slug === "music-app"
                        ? "Audio Streaming Quality"
                        : "Google Ranking Keywords"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* =========================
            LIVE WEBSITE PREVIEW
        ========================== */}
        {project.liveUrl && (
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 sm:mt-20 lg:mt-28"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <p className="uppercase tracking-[4px] text-[#D4AF37] text-xs sm:text-sm font-semibold">
                  LIVE INTERACTIVE EXPERIENCE
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Live Website Preview
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl">
                  Explore the live project's homepage directly below or open it in a full browser tab.
                </p>
              </div>

              {/* Launch Action */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                  <span>Launch Live Site</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>

            {/* Browser Mockup Window */}
            <div className="rounded-2xl border border-white/15 bg-[#0e0e11] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              {/* Browser Chrome Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-black/70 border-b border-white/10 backdrop-blur-md">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
                </div>

                {/* URL Address Bar */}
                <div className="flex-1 max-w-xl min-w-[200px] mx-auto">
                  <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center gap-2 truncate">
                      <FaLock className="text-[#10B981] text-xs shrink-0" />
                      <span className="truncate font-mono text-gray-300 select-all">
                        {project.liveUrl}
                      </span>
                    </div>
                    <button
                      onClick={() => setIframeKey((prev) => prev + 1)}
                      title="Reload Preview"
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors p-1"
                      aria-label="Reload live preview"
                    >
                      <FaRedo className="text-xs" />
                    </button>
                  </div>
                </div>

                {/* Viewport Mode Switcher & Status */}
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs">
                    <button
                      onClick={() => setViewportMode("desktop")}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors ${
                        viewportMode === "desktop"
                          ? "bg-[#D4AF37] text-black font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                      aria-label="Desktop view"
                    >
                      <FaDesktop className="text-xs" />
                      <span>Desktop</span>
                    </button>
                    <button
                      onClick={() => setViewportMode("tablet")}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors ${
                        viewportMode === "tablet"
                          ? "bg-[#D4AF37] text-black font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                      aria-label="Tablet view"
                    >
                      <FaTabletAlt className="text-xs" />
                      <span>Tablet</span>
                    </button>
                    <button
                      onClick={() => setViewportMode("mobile")}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors ${
                        viewportMode === "mobile"
                          ? "bg-[#D4AF37] text-black font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                      aria-label="Mobile view"
                    >
                      <FaMobileAlt className="text-xs" />
                      <span>Mobile</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                    <span>Live</span>
                  </div>
                </div>
              </div>

              {/* Browser Viewport */}
              <div className="w-full bg-[#050507] p-2 sm:p-4 flex items-center justify-center overflow-x-auto min-h-[520px] sm:min-h-[620px] lg:min-h-[700px]">
                <div
                  className={`transition-all duration-500 bg-white rounded-lg overflow-hidden shadow-2xl ${
                    viewportMode === "mobile"
                      ? "w-[390px] h-[640px]"
                      : viewportMode === "tablet"
                      ? "w-[768px] h-[640px]"
                      : "w-full h-[520px] sm:h-[620px] lg:h-[700px]"
                  }`}
                >
                  <iframe
                    key={iframeKey}
                    src={project.liveUrl}
                    title={`${project.title} live website preview`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>

              {/* Bottom helper */}
              <div className="px-4 py-3 bg-black/70 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
                <p>
                  Interactive live preview of <span className="text-[#D4AF37] font-medium">{project.title}</span>.
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  Open in full browser window <span>↗</span>
                </a>
              </div>
            </div>
          </motion.section>
        )}

        {/* =========================
            CHALLENGE + SOLUTION
        ========================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            sm:mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            lg:gap-6
          "
        >

          {/* Challenge */}

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              p-6
              sm:p-8
              lg:p-10
            "
          >

            <p
              className="
                text-[#D4AF37]
                text-xs
                sm:text-sm
                tracking-[3px]
                uppercase
              "
            >
              THE CHALLENGE
            </p>

            <h3
              className="
                mt-4
                text-2xl
                sm:text-3xl
                font-semibold
                text-white
              "
            >
              What needed to be solved?
            </h3>

            <p
              className="
                mt-5
                text-sm
                sm:text-base
                leading-7
                text-gray-400
              "
            >
              {project.challenge}
            </p>

          </div>


          {/* Solution */}

          <div
            className="
              rounded-2xl
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/[0.03]
              p-6
              sm:p-8
              lg:p-10
            "
          >

            <p
              className="
                text-[#D4AF37]
                text-xs
                sm:text-sm
                tracking-[3px]
                uppercase
              "
            >
              OUR APPROACH
            </p>

            <h3
              className="
                mt-4
                text-2xl
                sm:text-3xl
                font-semibold
                text-white
              "
            >
              How we approached it
            </h3>

            <p
              className="
                mt-5
                text-sm
                sm:text-base
                leading-7
                text-gray-400
              "
            >
              {project.solution}
            </p>

          </div>

        </motion.section>


        {/* =========================
            KEY FEATURES
        ========================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            sm:mt-20
            lg:mt-28
          "
        >

          <p
            className="
              uppercase
              tracking-[4px]
              text-[#D4AF37]
              text-xs
              sm:text-sm
            "
          >
            KEY FEATURES
          </p>


          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            What We Built
          </h2>


          <div
            className="
              mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-3
              sm:gap-4
            "
          >

            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  px-5
                  py-4
                  text-sm
                  sm:text-base
                  text-gray-300
                "
              >

                <span className="text-[#D4AF37] mt-0.5">
                  ✓
                </span>

                <span>
                  {feature}
                </span>

              </motion.div>
            ))}

          </div>

        </motion.section>


        {/* =========================
            TECHNOLOGIES
        ========================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            sm:mt-20
            lg:mt-28
          "
        >

          <p
            className="
              uppercase
              tracking-[4px]
              text-[#D4AF37]
              text-xs
              sm:text-sm
            "
          >
            TECHNOLOGIES & TOOLS
          </p>


          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            Built With The
            <span className="text-[#D4AF37]">
              {" "}Right Tools
            </span>
          </h2>


          <div
            className="
              mt-7
              flex
              flex-wrap
              gap-3
            "
          >

            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/5
                  px-4
                  py-2.5
                  text-sm
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:border-[#D4AF37]
                  hover:text-[#D4AF37]
                "
              >
                {technology}
              </span>
            ))}

          </div>

        </motion.section>


        {/* =========================
            CTA
        ========================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            sm:mt-20
            lg:mt-24
            rounded-2xl
            border
            border-[#D4AF37]/20
            bg-white/[0.025]
            p-7
            sm:p-10
            lg:p-12
            text-center
          "
        >

          <h2
            className="
              text-3xl
              sm:text-4xl
              font-bold
              text-white
            "
          >
            Have a similar idea?
          </h2>


          <p
            className="
              mt-4
              text-sm
              sm:text-base
              leading-7
              text-gray-400
              max-w-xl
              mx-auto
            "
          >
            Let's discuss your requirements and build a digital
            solution that fits your business.
          </p>


          <div
            className="
              mt-7
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-4
            "
          >

            <Link to="/quotation">
              <Button>
                Get Free Quote →
              </Button>
            </Link>


            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#D4AF37]
                  px-7
                  py-4
                  font-medium
                  text-[#D4AF37]
                  transition-all
                  duration-300
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >
                View Live Project →
              </a>
            )}

          </div>

        </motion.section>


      </Container>

    </main>
  );
};

export default ProjectDetails;