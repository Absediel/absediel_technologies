"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import { scrollToId } from "@/utils/scroll";
const bgimage = "/assets/Images/Hero-bg.png";
const rightimage = "/assets/Images/rightimage1.png";
import "../styles/Background.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24"
    >
      {/* Background Graphic (ABSEDIEL ... LET THERE BE INNOVATION) */}
      <img
        src="/assets/Images/Hero-bg.png"
        alt="ABSEDIEL Background Pattern"
        aria-hidden="true"
        className="
          hidden
          sm:block
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[800px]
          sm:w-[950px]
          lg:w-[1200px]
          max-w-none
          opacity-95
          pointer-events-none
          select-none
          z-0
        "
      />

      <div className="relative z-10">
        <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-sm sm:text-base text-gray-200 font-medium">
                Premium Digital Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.03] tracking-tight text-white"
            >
              YOUR COMPLETE
              <span className="text-[#D4AF37]">
                <br />
                DIGITAL GROWTH PARTNER
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 leading-7 sm:leading-8 lg:leading-9 max-w-xl"
            >
              From websites and mobile applications to digital marketing
              and social media management, we help businesses establish,
              grow, and succeed in the digital world.
            </motion.p>

            {/* Buttons (Original button styling without shine sweep) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <div className="w-full sm:w-auto">
                <Button
                  className="w-full"
                  onClick={() => scrollToId("projects", 90, 420)}
                >
                  This can be you →
                </Button>
              </div>

              <Link to="/quotation" className="w-full sm:w-auto">
                <Button
                  outline
                  className="w-full hero-quote-blink-btn"
                >
                  <span className="inline-flex items-center justify-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFE57F] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                    </span>
                    <span>Get free Quote</span>
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Original 3D Laptop with ambient float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.9, delay: 0.3 },
              scale: { duration: 0.9, delay: 0.3 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="hidden sm:flex justify-center lg:justify-end"
          >
            <img
              src={rightimage?.src || rightimage}
              alt="ABSEDIEL Technologies Laptop"
              className="
                w-[100%]
                sm:w-[60%]
                md:w-[55%]
                mr-[-100px]
                lg:w-full
                max-w-[800px]
                h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]
                object-contain
              "
            />
          </motion.div>
        </div>
      </Container>
      </div>
    </section>
  );
};

export default Hero;