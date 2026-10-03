"use client";
import Container from "../components/Container";
import Button from "../components/Button";
import FooterLink from "../components/FooterLink";
const logo = "/assets/Images/Navbar-logo.png";
import { Link } from "react-router-dom";
import { quickLinks, services, socials } from "../data/footerlink";
import { motion } from "framer-motion";
import "../styles/Footer.css";

const Footer = () => {

    return (

        <footer
            id="footer-nav"
            className="footer"
        >

            <Container>

                <div className="footer-top">

                    <motion.div

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

                        className="footer-brand"

                    >

                        <img

                            src={logo?.src || logo}

                            alt="ABSEDIEL"

                            className="footer-logo"

                        />

                        <h2>

                            Building Digital Experiences

                        </h2>

                        <p>

                            We build modern websites, web applications,
                            mobile apps, and digital marketing solutions
                            that help businesses grow faster.

                        </p>

                        <div className="footer-buttons">

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

                    <div className="footer-grid">

                        {/* Quick Links */}

                        <div className="footer-column quick-links">

                            <h3>

                                Quick Links

                            </h3>

                            {

                                quickLinks.map((item)=>(

                                    <FooterLink

                                        key={item.title}

                                        title={item.title}

                                        target={item.target}

                                    />

                                ))

                            }

                        </div>

                        {/* Services */}

                        <div className="footer-column services-column">

                            <h3>

                                Services

                            </h3>

                            {

                                services.map((item,index)=>(

                                    <span

                                        key={index}

                                        className="footer-service"

                                    >

                                        {item}

                                    </span>

                                ))

                            }

                        </div>

                        {/* Contact */}

                        <div className="footer-column contact-column">

                            <h3>

                                Contact

                            </h3>

                            <span>

                                <a href="tel:+919232564695" className="contact-link">📞 +91 9232564695</a>

                            </span>

                            <span>

                                <a href="mailto:absedieltechnologies@gmail.com" className="contact-link">✉ absedieltechnologies@gmail.com</a>
                            </span>

                            <span>

                                <a href="https://maps.google.com/?q=Madhya+Pradesh,+India" target="_blank" rel="noopener noreferrer" className="contact-link">📍 Madhya Pradesh, India</a>

                            </span>

                            <span>

                                <a href="https://maps.google.com/?q=Kolkata,+West+Bengal,+India" target="_blank" rel="noopener noreferrer" className="contact-link">📍 Kolkata, West Bengal, India</a>

                            </span>

                            <span>

                                Mon - Sat

                                <br/>

                                9:00 AM - 7:00 PM

                            </span>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <div className="footer-socials">

                        {

                            socials.map((item,index)=>{

                                const Icon=item.icon;

                                return(

                                    <a

                                        key={index}

                                        href={item.url}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="social-icon"

                                    >

                                        <Icon/>

                                    </a>

                                )

                            })

                        }

                    </div>

                    <div className="footer-copy">

                        © 2026 ABSEDIEL Technologies.
                        All Rights Reserved.

                    </div>

                </div>

            </Container>

        </footer>

    )

}

export default Footer;