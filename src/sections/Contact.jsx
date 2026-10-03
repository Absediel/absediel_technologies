"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

import Container from "../components/Container";
import Button from "../components/Button";
import SuccessModal from "../components/SuccessModal";
import ErrorModal from "../components/ErrorModal";
import LimitReachedModal from "../components/LimitReachedModal";

import services from "../data/Services";
import BASE_URL from "../utils/Api";

import "../styles/Contact.css";
import "../styles/Modal.css";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });

  // Validation Errors State
  const [errors, setErrors] = useState({});

  // Modal States
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isLimitOpen, setIsLimitOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefill service interest based on query parameter
  useEffect(() => {
    if (serviceParam) {
      // Find service that matches the slug parameter (e.g. ?service=website-development)
      const matchedService = services.find(
        (s) => s.slug === serviceParam || s.title.toLowerCase() === serviceParam.toLowerCase()
      );
      if (matchedService) {
        setFormData((prev) => ({
          ...prev,
          serviceInterest: matchedService.title,
        }));
      } else if (serviceParam.toLowerCase() === "other") {
        setFormData((prev) => ({
          ...prev,
          serviceInterest: "Other",
        }));
      }
    }
  }, [serviceParam]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = "Please select a service of interest";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${BASE_URL}/contact/`, formData);

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage(
          response.data?.message || "Thank you for getting in touch! We will get back to you shortly."
        );
        setIsSuccessOpen(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceInterest: "",
          message: "",
        });
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error status
        if (error.response.status === 429) {
          setIsLimitOpen(true);
        } else {
          setErrorMessage(
            error.response.data?.message || "There was a server error processing your request. Please try again."
          );
          setIsErrorOpen(true);
        }
      } else if (error.request) {
        // Request was made but no response was received (e.g. connection refused)
        setErrorMessage(
          `Could not connect to the server. Please check if the backend is running at ${BASE_URL}.`
        );
        setIsErrorOpen(true);
      } else {
        // Something else happened
        setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
        setIsErrorOpen(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Section Header Variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Content Variants for Staggered Load
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="contact-section" id="contact">
      {/* Background Glows are handled in Contact.css */}

      <Container>
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#D4AF37] text-sm sm:text-base">
            GET IN TOUCH
          </p>

          <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05]">
            Let's Start a
            <br />
            <span className="text-[#D4AF37]">Conversation</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-400 leading-7 sm:leading-8 max-w-2xl">
            We'd love to hear from you. Get in touch with us today to discuss your digital ideas and goals.
          </p>
        </motion.div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="contact-grid"
        >
          {/* Left Column: Contact info */}
          <motion.div variants={itemVariants} className="contact-info-wrapper">
            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon-box">
                <FaPhoneAlt />
              </div>
              <div className="contact-info-details">
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+919232564695">+91 9232564695</a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon-box">
                <FaEnvelope />
              </div>
              <div className="contact-info-details">
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:absedieltechnologies@gmail.com">absedieltechnologies@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-details">
                <h4>Locations</h4>
                <p>Madhya Pradesh, India</p>
                <p>Kolkata, West Bengal, India</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon-box">
                <FaClock />
              </div>
              <div className="contact-info-details">
                <h4>Business Hours</h4>
                <p>
                  Mon - Sat
                  <br />
                  9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="contact-form-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row two-cols">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`form-input ${errors.name ? "error" : ""}`}
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`form-input ${errors.email ? "error" : ""}`}
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row two-cols">
                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`form-input ${errors.phone ? "error" : ""}`}
                  />
                  {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                </div>

                {/* Service Dropdown */}
                <div className="form-group">
                  <label htmlFor="serviceInterest" className="form-label">
                    What can we help you with ?
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className={`form-select ${errors.serviceInterest ? "error" : ""}`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                  {errors.serviceInterest && (
                    <span className="form-error-msg">{errors.serviceInterest}</span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Send Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Send us a message and our team will get back to you."
                  className={`form-textarea ${errors.message ? "error" : ""}`}
                />
                {errors.message && <span className="form-error-msg">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="contact-submit-container">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-btn"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </Container>

      {/* Modals for submission feedback */}
      <SuccessModal
        open={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={successMessage}
      />
      <ErrorModal
        open={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        message={errorMessage}
      />
      <LimitReachedModal
        open={isLimitOpen}
        onClose={() => setIsLimitOpen(false)}
      />
    </section>
  );
};

export default Contact;
