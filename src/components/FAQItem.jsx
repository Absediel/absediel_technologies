"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

const FAQItem = ({ faq, isOpen, onClick }) => {

  return (

    <motion.div
      layout
      className="faq-item"
      transition={{
        duration: 0.35,
      }}
    >

      <button
        className="faq-question"
        onClick={onClick}
      >

        <span>{faq.question}</span>

        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="faq-icon"
        >
          <FaPlus />
        </motion.div>

      </button>

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="faq-answer-wrapper"
          >

            <p className="faq-answer">

              {faq.answer}

            </p>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>

  );

};

export default FAQItem;