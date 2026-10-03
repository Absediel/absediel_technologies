"use client";
import { motion } from "framer-motion";

const TechPill = ({ icon: Icon, title, color }) => {
  const brandColor = color || "#D4AF37";

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{ duration: 0.25 }}
      style={{
        "--pill-color": brandColor,
      }}
      className="
        flex
        items-center
        gap-3
        px-5
        sm:px-6
        py-3
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-md
        hover:border-[#D4AF37]/60
        hover:shadow-[0_0_20px_rgba(212,175,55,.2)]
        transition-all
        duration-300
        shrink-0
        cursor-pointer
        select-none
      "
    >
      {Icon && (
        <Icon
          className="text-lg sm:text-xl shrink-0 transition-transform duration-300"
          style={{ color: brandColor }}
          aria-hidden="true"
        />
      )}

      <span className="text-white font-medium whitespace-nowrap text-sm sm:text-base">
        {title}
      </span>
    </motion.div>
  );
};

export default TechPill;