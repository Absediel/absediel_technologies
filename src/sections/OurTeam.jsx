"use client";
import { motion } from "framer-motion";
import Container from "../components/Container";
import TeamCard from "../components/TeamCard";
import team from "../data/team";

import "../styles/Team.css";

const OurTeam = () => {
  return (
    <section className="team-section" id="team">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <p>OUR TEAM</p>

          <h2>
            Meet The People
            <br />
            Behind <span>ABSEDIEL</span>
          </h2>

          <p>
            Every successful digital solution is powered by passionate people.
            Our team combines technical expertise, creativity, and strategic
            thinking to deliver websites, applications, and digital experiences
            that help businesses grow.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="team-grid"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="team-card-wrapper"
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default OurTeam;