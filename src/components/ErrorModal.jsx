"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimesCircle } from "react-icons/fa";

const ErrorModal = ({ open, isOpen, onClose, title = "Something went wrong", message }) => {
  const isVisible = Boolean(open ?? isOpen);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card error"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaTimesCircle className="modal-icon" />

            <h2>{title}</h2>

            <p>{message}</p>

            <button className="modal-btn" onClick={onClose}>
              Try Again
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorModal;