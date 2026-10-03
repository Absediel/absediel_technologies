"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaCheckCircle,
  FaPaperPlane,
  FaWhatsapp,
  FaFileContract,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

import Container from "../components/Container";
import Button from "../components/Button";
import ProposalThankYouModal from "../components/ProposalThankYouModal";
import ErrorModal from "../components/ErrorModal";
import BASE_URL from "../utils/Api";

const availableServices = [
  "Website Development",
  "Web Application",
  "Mobile App (iOS / Android)",
  "SEO Optimization",
  "Digital Marketing & Ads",
  "Social Media Management",
  "WordPress Solution",
  "UI/UX & Branding",
];

const timelineOptions = [
  "Urgent (< 2 Weeks)",
  "Within 1 Month",
  "1 - 3 Months",
  "Flexible / Long Term",
];

const budgetRanges = [
  "Below ₹25,000 / $300",
  "₹25,000 - ₹50,000 / $300 - $600",
  "₹50,000 - ₹1,00,000 / $600 - $1,200",
  "₹1,00,000+ / $1,200+",
  "Flexible / Need Guidance",
];

const keyFeaturesList = [
  "User Authentication & Login",
  "Payment Gateway Integration",
  "Admin Management Dashboard",
  "REST APIs & Custom Database",
  "Search Engine Optimization (SEO)",
  "High Speed & Performance Tuning",
  "Content Management System (CMS)",
  "Multi-language / Localization",
];

const Quotation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    timeline: "Within 1 Month",
    budget: "₹25,000 - ₹50,000 / $300 - $600",
    features: [],
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [submittedClient, setSubmittedClient] = useState({ name: "", email: "" });
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: null }));
    }
  };

  const toggleFeature = (feature) => {
    setFormData((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((f) => f !== feature)
          : [...prev.features, feature],
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone/WhatsApp number.";
    }
    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please provide brief details about your project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      company: formData.company || "",
      email: formData.email,
      phone: formData.phone,
      services: formData.services,
      timeline: formData.timeline,
      budget: formData.budget,
      features: formData.features,
      description: formData.description,
      serviceInterest: formData.services.join(", "),
      message: formData.description,
    };

    try {
      let response;
      try {
        response = await axios.post(`${BASE_URL}/quotation/`, payload);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          response = await axios.post(`${BASE_URL}/contact/`, payload);
        } else {
          throw err;
        }
      }

      if (response.status === 200 || response.status === 201) {
        setSubmittedClient({ name: formData.name, email: formData.email });
        setIsSuccessOpen(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          services: [],
          timeline: "Within 1 Month",
          budget: "₹25,000 - ₹50,000 / $300 - $600",
          features: [],
          description: "",
        });
      }
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message ||
          "Could not send your request directly to the server. Please check your connection or reach out to us via WhatsApp."
      );
      setIsErrorOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-28">
      {/* Background glow effects */}
      <div className="absolute top-20 right-[-100px] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-100px] w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />

      <Container>
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-[4px] font-semibold">
            <FaFileContract className="text-xs" />
            <span>CUSTOM PROPOSAL REQUEST</span>
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Tell Us About Your Project,{" "}
            <span className="text-[#D4AF37]">Get a Detailed Proposal</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
            Complete the requirement form below with your project scope, target timeline, and goals.
            Our technical team will analyze your requirements and send a customized proposal within 24 hours.
          </p>
        </motion.div>

        {/* Quotation Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-10">
            {/* Step 1: Client Information */}
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <span>Contact & Business Details</span>
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ankit Sharma"
                    className={`w-full rounded-xl bg-[#09090b] border ${
                      errors.name ? "border-red-500" : "border-white/10 focus:border-[#D4AF37]"
                    } px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Enterprises (Optional)"
                    className="w-full rounded-xl bg-[#09090b] border border-white/10 focus:border-[#D4AF37] px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ankit@example.com"
                    className={`w-full rounded-xl bg-[#09090b] border ${
                      errors.email ? "border-red-500" : "border-white/10 focus:border-[#D4AF37]"
                    } px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full rounded-xl bg-[#09090b] border ${
                      errors.phone ? "border-red-500" : "border-white/10 focus:border-[#D4AF37]"
                    } px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Step 2: Services Needed */}
            <div className="pt-6 border-t border-white/10">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <span>Select Services Needed *</span>
              </h2>
              <p className="mt-2 text-xs text-gray-400">Select one or more services that apply to your project.</p>

              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {availableServices.map((service) => {
                  const isSelected = formData.services.includes(service);
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-4 py-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between gap-2 ${
                        isSelected
                          ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                          : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-white/30"
                      }`}
                    >
                      <span>{service}</span>
                      {isSelected && <FaCheckCircle className="shrink-0 text-xs text-[#D4AF37]" />}
                    </button>
                  );
                })}
              </div>
              {errors.services && <p className="mt-2 text-xs text-red-400">{errors.services}</p>}
            </div>

            {/* Step 3: Timeline & Budget */}
            <div className="pt-6 border-t border-white/10">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <span>Timeline & Estimated Budget</span>
              </h2>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Timeline */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <FaClock className="text-[#D4AF37]" />
                    <span>Target Delivery Timeline</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {timelineOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData((prev) => ({ ...prev, timeline: opt }))}
                        className={`px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium text-left transition-colors ${
                          formData.timeline === opt
                            ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]"
                            : "border-white/10 bg-white/[0.02] text-gray-300 hover:border-white/25"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <FaMoneyBillWave className="text-[#D4AF37]" />
                    <span>Estimated Budget Range</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-[#09090b] border border-white/10 focus:border-[#D4AF37] px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#121216] text-white">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Key Features Checklist */}
            <div className="pt-6 border-t border-white/10">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <span>Specific Technical Features (Optional)</span>
              </h2>
              <p className="mt-2 text-xs text-gray-400">Select any special functionality you anticipate needing.</p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {keyFeaturesList.map((feature) => {
                  const isChecked = formData.features.includes(feature);
                  return (
                    <button
                      type="button"
                      key={feature}
                      onClick={() => toggleFeature(feature)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-all ${
                        isChecked
                          ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]"
                          : "border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {isChecked ? `✓ ${feature}` : `+ ${feature}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Detailed Description */}
            <div className="pt-6 border-t border-white/10">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-sm font-bold">
                  5
                </span>
                <span>Project Requirements & Details *</span>
              </h2>

              <div className="mt-5">
                <textarea
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your project, target audience, preferred reference websites, and key objectives..."
                  className={`w-full rounded-xl bg-[#09090b] border ${
                    errors.description ? "border-red-500" : "border-white/10 focus:border-[#D4AF37]"
                  } p-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm leading-relaxed`}
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-red-400">{errors.description}</p>
                )}
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>We guarantee strict privacy and a proposal within 24 hours.</span>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/919232564695?text=Hi%2C%20Absediel%20Technologies%2C%20I%20would%20like%20to%20request%20a%20quotation%20and%20proposal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
                >
                  <FaWhatsapp className="text-emerald-400 text-lg" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Proposal Request</span>
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </Container>

      {/* Proposal Thanking Popup */}
      <ProposalThankYouModal
        open={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        clientName={submittedClient.name}
        clientEmail={submittedClient.email}
      />

      {/* Error Modal */}
      <ErrorModal
        open={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        message={errorMessage}
      />
    </main>
  );
};

export default Quotation;
