"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp, FaHome, FaTimes, FaClock, FaEnvelope, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProposalThankYouModal = ({ open, isOpen, onClose, clientName, clientEmail }) => {
  const isVisible = Boolean(open ?? isOpen);
  const navigate = useNavigate();

  const handleGoHome = () => {
    if (onClose) onClose();
    navigate("/");
  };

  const displayName = clientName ? clientName.trim().split(" ")[0] : "";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg rounded-3xl border border-[#D4AF37]/30 bg-[#0B0F19]/95 backdrop-blur-2xl p-6 sm:p-9 text-center shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(212,175,55,0.15)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient gold glow in top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#D4AF37]/15 blur-[60px] pointer-events-none rounded-full" />

            {/* Close 'X' Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="Close modal"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Golden Badge Icon */}
            <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-b from-[#D4AF37]/25 to-[#D4AF37]/5 border border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              <FaCheckCircle className="text-4xl text-[#D4AF37]" />
            </div>

            {/* Pill Tag */}
            <div className="mt-5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-[3px] font-semibold">
              <span>PROPOSAL REQUEST SUBMITTED</span>
            </div>

            {/* Title */}
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white leading-tight">
              {displayName ? `Thank You, ${displayName}!` : "Thank You For Your Request!"}
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed max-w-md mx-auto">
              We have successfully received your project requirements. Our engineering architects are reviewing your specifications to prepare a customized technical proposal.
            </p>

            {/* What to Expect Checklist */}
            <div className="mt-6 text-left rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 space-y-3">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                <FaClock className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong>24-Hour Delivery:</strong> You will receive a detailed proposal and cost estimate within 24 hours.</span>
              </div>
              {clientEmail && (
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                  <FaEnvelope className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Delivered To:</strong> We'll send the proposal directly to <strong className="text-white">{clientEmail}</strong>.</span>
                </div>
              )}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                <FaShieldAlt className="text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>100% Privacy:</strong> Your business concept and data are protected under strict confidentiality.</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleGoHome}
                className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:brightness-110 text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaHome />
                <span>Back to Home</span>
              </button>

              <a
                href="https://wa.me/919232564695?text=Hi%20Absediel%20Technologies%2C%20I%20just%20submitted%20a%20proposal%20request%20on%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaWhatsapp className="text-emerald-400 text-base" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProposalThankYouModal;
