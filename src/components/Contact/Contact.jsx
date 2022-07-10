import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-me">
        <h1>
          <a href="mailto:shehab.shalan@hotmail.com">
            Contact me
            <RiSendPlaneFill className="icon" size={30} />
          </a>
        </h1>
      </div>
    </section>
  );
};

export default Contact;
