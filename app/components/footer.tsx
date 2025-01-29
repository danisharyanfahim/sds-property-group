import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import IconLink from "./icon-link";

const Footer = () => {
  return (
    <footer id="footer" className="page-section">
      <div className="top-section">
        <section id="quick-links">
          <h4 className="section-title">Quick Links</h4>
          <nav className="links-container">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/properties"}>Properties</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </section>
        <section id="contact-information">
          <h4 className="section-title">Contact Information</h4>
          <div className="contact-info-item">
            <div className="icon">
              <IoLocationSharp />
            </div>
            <p className="info-text">Address</p>
          </div>
          <div className="contact-info-item">
            <div className="icon">
              <FaPhone className="phone-icon" />
            </div>
            <p className="info-text">Phone</p>
          </div>
          <div className="contact-info-item">
            <div className="icon">
              <IoMdMail />
            </div>
            <p className="info-text">Email</p>
          </div>
          <div className="contact-info-item">
            <div className="icon">
              <IoTime />
            </div>
            <p className="info-text">Working Hours</p>
          </div>
        </section>
        <section id="news-letter">
          <h4 className="section-title">Remain Updated</h4>
          <form action="" className="newsletter-container">
            <input type="email" name="email" className="email-field" />
            <button className="send-button gold-fill" type="submit">
              <p>Subscribe</p>
            </button>
          </form>
        </section>
        <section id="social-media-links">
          <nav className="links-container">
            <IconLink
              url="https://linkedin.com"
              imageUrl="/icons/social-media-icons/linked-in-icon.png"
              name="linked-in"
            />
            <IconLink
              url="https://facebook.com"
              imageUrl="/icons/social-media-icons/facebook-icon.svg"
              name="facebook"
            />
            <IconLink
              url="https://instagram.com"
              imageUrl="/icons/social-media-icons/instagram-icon.png"
              name="instagram"
            />
          </nav>
        </section>
      </div>
      <section id="legal-info">
        <div className="content-container">
          <div>
            <small className="copyright-text">
              ©2025 SDS Property Group Inc.
            </small>
          </div>
          <Link href="/terms-of-service">
            <small>Terms of Service</small>
          </Link>
          <Link href="privacy-policy">
            <small>Privacy Policy</small>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
