import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContactUs } from "./ContactMeform";
export default function Contac() {
  return (
    <>
      <div id="contact" className="container contact pb-5">
        <h1>Contact Me</h1>
        <ContactUs/>
        <div
          className="contact_item"
          data-aos="zoom-in-up"
          
        >
          <a
            href="https://www.instagram.com/asad_ali8500?igsh=M3lkZnczcmI1c291"
            target="blank"
            className="items"
          >
            <FaInstagram className="icon"></FaInstagram>
          </a>
          <a
            href="https://github.com/asadalimcj"
            target="blank"
            className="items"
          >
            <FaGithub className="icon"></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/asad-ali-593384279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="blank"
            className="items"
          >
            <CiLinkedin className="icon"></CiLinkedin>
          </a>
          <a
            href="mailto:asadalimcj@gmail.com"
            target="blank"
            className="items"
          >
            <SiGmail className="icon"></SiGmail>
          </a>
          <a
            href="https://wa.me/message/UBNDWUAI5KIMI1"
            target="blank"
            className="items"
          >
            <FaWhatsapp className="icon"></FaWhatsapp>
          </a>
        </div>
      </div>
    </>
  );
}
