import ContactForm from "@/app/components/ui/contact-form";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <main id="contact" className="page-section">
      <section id="contact-us" className="stacked">
        <div className="info-section">
          <FaPhoneAlt className="icon" />
          <h2>Contact Us</h2>
          <h4>
            Ready to explore your options? Reach out to us today and take the
            first step toward unparalleled real estate success.
          </h4>
        </div>
        <div className="media-section">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
