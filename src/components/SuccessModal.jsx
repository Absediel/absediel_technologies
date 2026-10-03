"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const SuccessModal = ({ open, isOpen, onClose, title = "Message Sent", message }) => {
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
            className="modal-card success"
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaCheckCircle className="modal-icon" />

            <h2>{title}</h2>

            <p>{message}</p>

            <button className="modal-btn" onClick={onClose}>
              Continue
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;