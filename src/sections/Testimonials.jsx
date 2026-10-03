"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "../components/Container";
import TestimonialCard from "../components/TestimonialCard";
// import { getTestimonials } from "../api/testimonialApi";
import testimonials from "../data/testimonials";
import "../styles/Testimonials.css";

const AUTO_PLAY_DELAY = 5000;

const Testimonials = () => {

  //   const [testimonials, setTestimonials] = useState([]);

  const [current, setCurrent] = useState(0);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [paused, setPaused] = useState(false);

  const touchStart = useRef(0);

  const touchEnd = useRef(0);


  //   useEffect(() => {

  //     const load = async () => {

  //       try {

  //         const data = await getTestimonials();

  //         setTestimonials(data);

  //       } catch (err) {

  //         setError("Unable to load testimonials.");

  //       } finally {

  //         setLoading(false);

  //       }

  //     };

  //     load();

  //   }, []);

  const nextSlide = () => {

    if (!testimonials.length) return;

    setCurrent((prev) => (prev + 1) % testimonials.length);

  };

  const prevSlide = () => {

    if (!testimonials.length) return;

    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  };

  // Auto Play

  useEffect(() => {

    if (paused) return;

    if (!testimonials.length) return;

    const timer = setInterval(() => {

      nextSlide();

    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);

  }, [paused, testimonials, current]);

  // Keyboard Support

  useEffect(() => {

    const handleKey = (e) => {

      if (e.key === "ArrowRight") nextSlide();

      if (e.key === "ArrowLeft") prevSlide();

    };

    window.addEventListener("keydown", handleKey);

    return () => {

      window.removeEventListener("keydown", handleKey);

    };

  }, [testimonials]);

  // Swipe

  const handleTouchStart = (e) => {

    touchStart.current = e.targetTouches[0].clientX;

  };

  const handleTouchMove = (e) => {

    touchEnd.current = e.targetTouches[0].clientX;

  };

  const handleTouchEnd = () => {

    if (touchStart.current - touchEnd.current > 80) {

      nextSlide();

    }

    if (touchEnd.current - touchStart.current > 80) {

      prevSlide();

    }

  };

  //   if (loading) {

  //     return (

  //       <section className="testimonial-section">

  //         <Container>

  //           <h2 className="loading-text">

  //             Loading Testimonials...

  //           </h2>

  //         </Container>

  //       </section>

  //     );

  //   }

  //   if (error) {

  //     return (

  //       <section className="testimonial-section">

  //         <Container>

  //           <h2 className="loading-text">

  //             {error}

  //           </h2>

  //         </Container>

  //       </section>

  //     );

  //   }

  //   if (!testimonials.length) {

  //     return (

  //       <section className="testimonial-section">

  //         <Container>

  //           <h2 className="loading-text">

  //             No testimonials found.

  //           </h2>

  //         </Container>

  //       </section>

  //     );

  //   }

  return (

    <section
      id="testimonials"
      className="testimonial-section"
    >

      <Container>

        <div className="testimonial-heading">

          <p>CLIENT TESTIMONIALS</p>

          <h2>

            Trusted By Businesses

            <span> Across Industries</span>

          </h2>

          <h4>

            Real feedback from clients we've worked with.

          </h4>

        </div>

        <div

          className="testimonial-slider"

          onMouseEnter={() => setPaused(true)}

          onMouseLeave={() => setPaused(false)}

          onTouchStart={handleTouchStart}

          onTouchMove={handleTouchMove}

          onTouchEnd={handleTouchEnd}

        >

          <button

            className="nav-btn left"

            onClick={prevSlide}

          >

            <FaChevronLeft />

          </button>

          <AnimatePresence mode="wait">

            <motion.div

              key={current}

              initial={{
                opacity: 0,
                x: 100,
                scale: .95
              }}

              animate={{
                opacity: 1,
                x: 0,
                scale: 1
              }}

              exit={{
                opacity: 0,
                x: -100,
                scale: .95
              }}

              transition={{
                duration: .5
              }}

            >

              <TestimonialCard

                testimonial={testimonials[current]}

                active

              />

            </motion.div>

          </AnimatePresence>

          <button

            className="nav-btn right"

            onClick={nextSlide}

          >

            <FaChevronRight />

          </button>

        </div>

        <div className="testimonial-dots">

          {testimonials.map((_, index) => (

            <button

              key={index}

              className={`dot ${current === index ? "active" : ""
                }`}

              onClick={() => setCurrent(index)}

            />

          ))}

        </div>

      </Container>

    </section>

  );

};

export default Testimonials;