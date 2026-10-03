"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import Container from "../components/Container";
import FAQItem from "../components/FAQItem";

import faqs from "../data/faqs";

import "../styles/FAQ.css";

const FAQ = () => {

  const [activeId, setActiveId] = useState(1);

  const handleToggle = (id) => {

    setActiveId((prev) => (prev === id ? null : id));

  };

  return (

    <section
      id="faq"
      className="faq-section"
    >

      <Container>

        {/* Heading */}

        <motion.div

          className="faq-heading"

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.6
          }}

        >

          <p>

            FREQUENTLY ASKED QUESTIONS

          </p>

          <h2>

            Everything You Need

            <span>

              {" "}To Know

            </span>

          </h2>

          <h4>

            Have questions about our services?

            Here are the answers to the most common questions our clients ask before starting a project.

          </h4>

        </motion.div>

        {/* FAQ List */}

        <motion.div

          className="faq-wrapper"

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}

        >

          {

            faqs.map((faq)=>(

              <FAQItem

                key={faq.id}

                faq={faq}

                isOpen={activeId===faq.id}

                onClick={()=>handleToggle(faq.id)}

              />

            ))

          }

        </motion.div>

      </Container>

    </section>

  );

};

export default FAQ;