"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaUser } from "react-icons/fa";

const getInitials = (name) => {
  if (!name || name.toLowerCase() === "anonymous") return null;
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const TestimonialCard = ({ testimonial, active }) => {
  if (!testimonial) return null;

  const initials = getInitials(testimonial.name);

  return (
    <motion.div
      className={`testimonial-card ${active ? "active" : ""}`}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
    >
      {/* Quote Icon */}
      <div className="quote-icon">
        <FaQuoteLeft />
      </div>

      {/* Rating */}
      <div className="testimonial-stars">
        {[...Array(testimonial.rating || 5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      {/* Review */}
      <p className="testimonial-review">
        {testimonial.review}
      </p>

      {/* Client */}
      <div className="testimonial-client">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
          />
        ) : (
          <div className="testimonial-avatar-fallback" aria-hidden="true">
            {initials ? initials : <FaUser size={26} />}
          </div>
        )}

        <div>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.position}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;