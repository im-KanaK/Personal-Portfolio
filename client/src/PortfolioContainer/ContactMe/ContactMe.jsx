import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "./ContactMe.css";

const ContactMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-container-2">
        <div className="contact-container-1" data-aos="fade-right"></div>
        <form
          action="mailto:dubeykanak888@gmail.com"
          method="post"
          encType="text/plain"
        >
          <h1>GET IN TOUCH</h1>

          <input type="text" id="firstname" placeholder="First Name" />

          <input type="text" id="lastname" placeholder="Last Name" />

          <input type="email" id="email" placeholder="Email" />
          <h5>Comments/ Questions:</h5>
          <textarea rows="10" cols="20" name="Comments/Questions: "></textarea>
          <button type="submit" value="Send Feedback" className="btn">
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
