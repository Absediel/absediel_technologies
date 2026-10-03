"use client";
import { motion } from "framer-motion";

const TeamCard = ({ member }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="team-card"
    >
      <div className={`team-image ${member.cropTop ? "crop-top" : ""}`}>
        <img
          src={member.image?.src || member.image}
          alt={member.name}
          style={member.imagePosition ? { objectPosition: member.imagePosition } : {}}
        />
      </div>

      <div className="team-content">
        <h3>{member.name}</h3>
        <h5>{member.role}</h5>
        <p>{member.description}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;