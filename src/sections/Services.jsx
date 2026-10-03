"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SpotlightCard from "../components/SpotlightCard";
import services from "../data/Services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[280px]
          h-[280px]
          sm:w-[400px]
          sm:h-[400px]
          lg:w-[550px]
          lg:h-[550px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[100px]
          pointer-events-none
        "
      />

      <Container>

        {/* Top Centered Label: SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold text-xs sm:text-sm tracking-[6px] uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            SERVICES
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#D4AF37] text-sm sm:text-base">
            WHAT WE DO
          </p>

          <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05]">
            Digital Solutions
            <br />
            <span className="text-[#D4AF37]">
              Built Around Your Business
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-400 leading-7 sm:leading-8 max-w-2xl">
            From building your digital presence to helping you grow it,
            we provide practical digital solutions tailored to your
            business and its goals.
          </p>
        </motion.div>


        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
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
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <SpotlightCard
                  className="
                    group
                    h-full
                    flex
                    flex-col
                    justify-between
                    p-6
                    sm:p-7
                    lg:p-8
                    hover:border-[#D4AF37]/50
                  "
                >
                  {/* Top animated line */}
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

                  {/* Bottom animated line */}
                  <span
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-px
                      w-0
                      bg-[#D4AF37]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Number + Icon */}
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-medium tracking-[3px] text-[#D4AF37]/70 font-mono">
                          {service.number}
                        </span>

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
                            group-hover:border-[#D4AF37]
                            group-hover:bg-[#D4AF37]
                            group-hover:text-black
                            group-hover:rotate-6
                            group-hover:scale-110
                          "
                        >
                          <Icon className="text-2xl sm:text-3xl" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-8 sm:mt-10">
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
                          {service.title}
                        </h3>

                        <p
                          className="
                            mt-4
                            text-sm
                            sm:text-base
                            leading-relaxed
                            text-gray-400
                            max-w-md
                          "
                        >
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Explore Service - clear spacing below description */}
                    <div className="mt-8 sm:mt-10 pt-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="
                          inline-flex
                          items-center
                          gap-2
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
                        <span>Explore service</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>


        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-10
            sm:mt-12
            lg:mt-14
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-5
            border-t
            border-white/10
            pt-7
            sm:pt-8
          "
        >

          <p className="text-sm sm:text-base text-gray-400">
            Have a project in mind?
          </p>

          <Link
            to="/quotation"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              sm:text-base
              font-medium
              text-[#D4AF37]
              transition-all
              duration-300
              hover:gap-4
            "
          >
            Let's discuss your project
            <span>→</span>
          </Link>

        </motion.div>

      </Container>
    </section>
  );
};

export default Services;