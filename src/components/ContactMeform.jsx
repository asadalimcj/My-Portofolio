import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_usmp1ra", "template_3bdyvxe", form.current, "Lexr5cP4G2Z8QLrEV")
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message sending failed: " + error.text);
        }
      );
  };

  return (
    <div className="form-container" data-aos="zoom-in">
      <h1 style={{ color: "whitesmoke" }}>Send Message to us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          placeholder="Name"
          className="form-control"
          type="text"
          name="user_name"
        />
        <input
          placeholder="Email"
          className="form-control"
          type="email"
          name="user_email"
        />
        <input
          placeholder="Subject"
          className="form-control"
          type="text"
          name="subject"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="form-control"
          name="message"
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
