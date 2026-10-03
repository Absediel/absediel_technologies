"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SpotlightCard from "../components/SpotlightCard";

import {
  MdBusinessCenter,
  MdDevices,
  MdAttachMoney,
  MdGroups,
} from "react-icons/md";

const reasons = [
  {
    number: "01",
    title: "Business First",
    description:
      "We start by understanding your business, goals and audience before building a digital solution.",
    icon: MdBusinessCenter,
  },
  {
    number: "02",
    title: "Multiple Solutions",
    description:
      "From websites and applications to marketing and social media, you can work with one team for multiple digital needs.",
    icon: MdGroups,
  },
  {
    number: "03",
    title: "Built for Every Screen",
    description:
      "Every digital experience we create is designed to work smoothly across mobiles, tablets and desktops.",
    icon: MdDevices,
  },
  {
    number: "04",
    title: "Practical & Affordable",
    description:
      "We focus on useful solutions that deliver real value without making things unnecessarily complicated or expensive.",
    icon: MdAttachMoney,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-32
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          left-[-150px]
          top-1/3
          w-[300px]
          h-[300px]
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[120px]
          pointer-events-none
        "
      />

      <Container>

        {/* =========================
            SECTION HEADER
        ========================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-3xl
          "
        >

          <p
            className="
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              text-[#D4AF37]
              text-sm
              sm:text-base
            "
          >
            WHY ABSEDIEL
          </p>

          <h2
            className="
              mt-4
              sm:mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              leading-[1.05]
              text-white
            "
          >
            Digital Solutions
            <br />
            <span className="text-[#D4AF37]">
              That Make Sense
            </span>
          </h2>

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              text-gray-400
              max-w-2xl
            "
          >
            We believe good digital solutions should be useful,
            accessible and built around the actual needs of your
            business — not just trends.
          </p>

        </motion.div>


        {/* =========================
            REASONS GRID
        ========================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            mt-12
            sm:mt-16
            lg:mt-20
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            sm:gap-5
            lg:gap-6
          "
        >

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.3 },
                }}
              >
                <SpotlightCard
                  tilt={true}
                  className="
                    group
                    h-full
                    p-6
                    sm:p-7
                    lg:p-8
                    min-h-[280px]
                    hover:border-[#D4AF37]/50
                  "
                >
                  {/* Animated Top Border */}
                  <span
                    className="
                      absolute
                      top-0
                      left-0
                      h-px
                      w-0
                      bg-[#D4AF37]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* Number */}
                  <div className="flex items-start justify-between">
                    <span className="text-sm tracking-[3px] text-[#D4AF37]/60 font-mono">
                      {reason.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        sm:h-14
                        sm:w-14
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#D4AF37]/20
                        bg-[#D4AF37]/5
                        text-[#D4AF37]
                        transition-all
                        duration-500
                        group-hover:bg-[#D4AF37]
                        group-hover:text-black
                        group-hover:border-[#D4AF37]
                        group-hover:rotate-6
                        group-hover:scale-110
                      "
                    >
                      <Icon className="text-2xl sm:text-3xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-semibold
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#D4AF37]
                      "
                    >
                      {reason.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400 max-w-lg">
                      {reason.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>


        {/* =========================
            BOTTOM STATEMENT
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-12
            sm:mt-14
            lg:mt-16
            border-t
            border-white/10
            pt-8
            sm:pt-10
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
          "
        >

          <div className="max-w-2xl">

            <p
              className="
                text-lg
                sm:text-xl
                lg:text-2xl
                leading-8
                text-gray-300
              "
            >
              Your business is unique.
              <span className="text-[#D4AF37]">
                {" "}Your digital solution should be too.
              </span>
            </p>

          </div>


          <Link
            to="/quotation"
            className="
              inline-flex
              items-center
              gap-2
              self-start
              lg:self-auto
              text-sm
              sm:text-base
              font-medium
              text-[#D4AF37]
              transition-all
              duration-300
              hover:gap-4
              hover:text-white
            "
          >
            Let's build something
            <span>→</span>
          </Link>

        </motion.div>

      </Container>

    </section>
  );
};

export default WhyChooseUs;