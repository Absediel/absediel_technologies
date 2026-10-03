"use client";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToId, snappyScrollTo } from "@/utils/scroll";

const FooterLink = ({ title, target, href }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sectionId = target || (href ? href.replace("/#", "").replace("#", "") : "");

  const handleClick = (e) => {
    e.preventDefault();
    if (!sectionId || sectionId === "home") {
      if (location.pathname === "/") {
        snappyScrollTo(0, 320);
      } else {
        navigate("/");
      }
      return;
    }

    if (location.pathname === "/") {
      scrollToId(sectionId, 90, 380);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <motion.div
      whileHover={{
        x: 8,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        className="footer-link bg-transparent border-none p-0 cursor-pointer text-left text-inherit font-inherit"
      >
        {title}
      </button>
    </motion.div>
  );
};

export default FooterLink;