"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import "../styles/FinalCTA.css";

const FinalCTA = () => {

  return (

    <section className="final-cta">

      <Container>

        <motion.div

          className="cta-card"

          initial={{ opacity: 0, y: 60 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: .7 }}

        >

          <span className="cta-badge">

            LET'S BUILD SOMETHING AMAZING

          </span>

          <h2>

            Ready To Grow

            <span> Your Business?</span>

          </h2>

          <p>

            Whether you need a modern website, web application,
            mobile app, SEO, or complete digital marketing,
            we're here to turn your ideas into reality.

          </p>

          <div className="cta-buttons">

            <Link to="/quotation">
              <Button>

                Get Free Quote →

              </Button>
            </Link>

            <a href="https://wa.me/919232564695?text=Hi%20%2C%20Absediel%20Technologies%2C%20can%20we%20have%20detailed%20conversation%20%3F." target="_blank" rel="noopener noreferrer">
              <Button outline>

                Let's Talk →

              </Button>
            </a>

          </div>

        </motion.div>

      </Container>

    </section>

  );

};

export default FinalCTA;