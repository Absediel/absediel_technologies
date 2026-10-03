"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SpotlightCard from "../components/SpotlightCard";
import projects from "../data/Projects";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const Projects = () => {
  return (
    <section
      id="projects"
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
          right-[-150px]
          top-1/3
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
            HEADER
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
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
          "
        >

          <div className="max-w-3xl">

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
              OUR WORK
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
              Projects That
              <br />
              <span className="text-[#D4AF37]">
                Speak For Themselves
              </span>
            </h2>

          </div>

          <p
            className="
              max-w-md
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              text-gray-400
            "
          >
            A glimpse of the kind of digital solutions we build
            to help businesses establish, improve and grow their
            digital presence.
          </p>

        </motion.div>


        {/* =========================
            PROJECT GRID
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
            gap-5
            lg:gap-6
          "
        >

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.slug}
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
                    min-h-[390px]
                    sm:min-h-[410px]
                    lg:min-h-[430px]
                    hover:border-[#D4AF37]/50
                  "
                >

                {/* =========================
                    PROJECT VISUAL
                ========================== */}

                <div
                  className="
                    relative
                    h-[190px]
                    sm:h-[210px]
                    lg:h-[230px]
                    overflow-hidden
                    border-b
                    border-white/10
                    bg-gradient-to-br
                    from-white/[0.06]
                    via-white/[0.02]
                    to-[#D4AF37]/5
                  "
                >

                  {/* Decorative circles */}

                  <div
                    className="
                      absolute
                      top-[-60px]
                      right-[-40px]
                      w-40
                      h-40
                      rounded-full
                      border
                      border-[#D4AF37]/10
                      transition-transform
                      duration-700
                      group-hover:scale-150
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-[-80px]
                      left-[-50px]
                      w-48
                      h-48
                      rounded-full
                      border
                      border-[#D4AF37]/10
                      transition-transform
                      duration-700
                      group-hover:scale-125
                    "
                  />


                  {/* Icon */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        flex
                        h-20
                        w-20
                        sm:h-24
                        sm:w-24
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[#D4AF37]/25
                        bg-[#D4AF37]/5
                        text-[#D4AF37]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                        group-hover:bg-[#D4AF37]
                        group-hover:text-black
                        group-hover:border-[#D4AF37]
                      "
                    >
                      <Icon className="text-4xl sm:text-5xl" />
                    </div>
                  </div>


                  {/* Number */}

                  <span
                    className="
                      absolute
                      top-5
                      left-5
                      sm:top-6
                      sm:left-6
                      text-xs
                      sm:text-sm
                      tracking-[3px]
                      text-[#D4AF37]/70
                    "
                  >
                    {project.number}
                  </span>

                </div>


                {/* =========================
                    PROJECT CONTENT
                ========================== */}

                <div
                  className="
                    p-6
                    sm:p-7
                    lg:p-8
                  "
                >

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      tracking-[2px]
                      text-[#D4AF37]
                    "
                  >
                    {project.category}
                  </p>


                  <h3
                    className="
                      mt-3
                      text-2xl
                      sm:text-3xl
                      font-semibold
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#D4AF37]
                    "
                  >
                    {project.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-sm
                      sm:text-base
                      leading-7
                      text-gray-400
                    "
                  >
                    {project.description}
                  </p>


                  {/* View Project */}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="
                      mt-6
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
                    View Project
                    <span>→</span>
                  </Link>

                </div>


                {/* Animated bottom line */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#D4AF37]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                </SpotlightCard>
              </motion.div>
            );
          })}

        </motion.div>


        {/* =========================
            BOTTOM CTA
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
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
            border-t
            border-white/10
            pt-8
            sm:pt-10
          "
        >

          <div>
            <p
              className="
                text-lg
                sm:text-xl
                text-gray-300
              "
            >
              Have an idea you'd like to bring to life?
            </p>

            <p
              className="
                mt-2
                text-sm
                text-gray-500
              "
            >
              Let's turn it into something useful.
            </p>
          </div>


          <Link
            to="/quotation"
            className="
              inline-flex
              items-center
              gap-2
              self-start
              sm:self-auto
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
            Start a Project
            <span>→</span>
          </Link>

        </motion.div>

      </Container>

    </section>
  );
};

export default Projects;