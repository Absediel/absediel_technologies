"use client";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "../components/Container";
import Button from "../components/Button";
import services from "../data/Services";

const ServiceDetails = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params?.slug;

  const service = services.find(
    (item) => item.slug === slug
  );

  // If service doesn't exist
  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-4xl font-bold text-white">
            Service Not Found
          </h1>

          <Link
            to="/"
            state={{ scrollTo: "services" }}
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
            ← Back to Services
          </Link>

        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main
      className="
        min-h-screen
        relative
        overflow-hidden
        pt-28
        sm:pt-32
        lg:pt-36
        pb-20
        sm:pb-24
        lg:pb-32
      "
    >

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div
        className="
          absolute
          top-20
          right-0
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
            SERVICE HERO
        ========================== */}

        <motion.div
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >

          {/* Icon */}

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


          {/* Service Number */}

          <p
            className="
              mt-8
              text-[#D4AF37]
              tracking-[4px]
              uppercase
              text-sm
            "
          >
            SERVICE {service.number}
          </p>


          {/* Title */}

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
            {service.title}
          </h1>


          {/* Description */}

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
            {service.description}
          </p>

        </motion.div>


        {/* =========================
            BACK TO SERVICES
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
            delay: 0.2,
          }}
          className="
            mt-14
            sm:mt-16
            lg:mt-20
          "
        >

          <Link
            to="/"
            state={{ scrollTo: "services" }}
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
            <span>Back to Services</span>
          </Link>

        </motion.div>


        {/* =========================
            WHAT WE OFFER
        ========================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            mt-8
            sm:mt-10
            lg:mt-12
          "
        >

          {/* Section Label */}

          <p
            className="
              uppercase
              tracking-[4px]
              text-[#D4AF37]
              text-sm
            "
          >
            WHAT WE OFFER
          </p>


          {/* Features */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              sm:gap-5
            "
          >

            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.35 + index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-5
                  sm:p-6
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/40
                  hover:bg-white/[0.045]
                "
              >

                {/* Number */}

                <span
                  className="
                    text-[#D4AF37]
                    text-sm
                    font-medium
                    tracking-[2px]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* Feature */}

                <p
                  className="
                    mt-3
                    text-sm
                    sm:text-base
                    leading-7
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {feature}
                </p>

              </motion.div>
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
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.55,
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
            Have a project in mind?
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
            Let's discuss your requirements and find the right
            digital solution for your business.
          </p>


          {/* CTA Button */}

          <div className="mt-7 flex justify-center">

            <Link to="/quotation">
              <Button>
                Get Free Quote →
              </Button>
            </Link>

          </div>

        </motion.section>

      </Container>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    </main>
  );
};

export default ServiceDetails;