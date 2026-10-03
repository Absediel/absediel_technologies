"use client";
import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
const logo = "/assets/Images/Navbar-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    target: "home",
  },
  {
    name: "About",
    target: "about",
  },
  {
    name: "Services",
    target: "services",
  },
  {
    name: "Project",
    target: "projects",
  },
  {
    name: "Contact",
    target: "contact",
  },
];

const navVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

import { scrollToId, snappyScrollTo } from "@/utils/scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);

    if (!target || target === "home") {
      if (location.pathname === "/") {
        snappyScrollTo(0, 320);
      } else {
        navigate("/");
      }
      return;
    }

    if (location.pathname === "/") {
      scrollToId(target, 90, 380);
    } else {
      navigate("/", { state: { scrollTo: target } });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      snappyScrollTo(0, 320);
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-black/60 border-b border-[#D4AF37]/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <Container>
        <motion.nav
          className="h-24 flex items-center justify-between relative"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Logo */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          >
            <Link to="/" onClick={handleLogoClick} aria-label="Absediel Technologies home">
              <img
                src={logo?.src || logo}
                alt="ABSEDIEL"
                className="h-35 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-12 text-[16px] font-medium text-gray-100">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                variants={itemVariants}
                className="group relative cursor-pointer py-2 transition-colors duration-300 hover:text-[#D4AF37]"
              >
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="bg-transparent border-none p-0 cursor-pointer text-inherit font-inherit text-[16px] font-medium"
                >
                  {item.name}
                </button>
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#D4AF37]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:w-full
                  "
                />
              </motion.li>
            ))}
          </ul>

          {/* Desktop Let's Talk Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:block"
          >
            <a
              href="https://wa.me/919232564695?text=Hi%20%2C%20Absediel%20Technologies%2C%20can%20we%20have%20detailed%20conversation%20%3F."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                Let's Talk →
              </Button>
            </a>
          </motion.div>

          {/* Mobile Hamburger Toggle */}
          <motion.div
            variants={itemVariants}
            className="lg:hidden flex items-center"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 hover:text-[#D4AF37] focus:outline-none transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </motion.div>

          {/* Mobile Drawer menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-24 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-[#D4AF37]/30 lg:hidden overflow-hidden z-40"
              >
                <ul className="flex flex-col items-center gap-6 py-8 text-[18px] font-medium text-gray-100">
                  {navItems.map((item) => (
                    <li key={item.name} className="w-full text-center">
                      <button
                        type="button"
                        onClick={(e) => handleNavClick(e, item.target)}
                        className="block w-full py-2 hover:text-[#D4AF37] transition-colors bg-transparent border-none p-0 cursor-pointer text-inherit font-inherit text-[18px]"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                  <li className="mt-4">
                    <a
                      href="https://wa.me/919232564695?text=Hi%20%2C%20Absediel%20Technologies%2C%20can%20we%20have%20detailed%20conversation%20%3F."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button>
                        Let's Talk →
                      </Button>
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.nav>
      </Container>
    </header>
  );
};

export default Navbar;