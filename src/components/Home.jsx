import React, { useEffect, useRef } from "react";
import asad from "../assets/asad.png";
import pdf from "../assets/myResume.pdf";
import Typed from "typed.js";

export default function Home() {
  const typedref = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to my Profile", "I'm Asad Ali", "I'm MERN Stack Developer", ".Net developer"], // Fixed here
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedref.current, options); // Correct options usage
    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <div id="home" className="home">
        <div className="left" data-aos="fade-right">
          <h1 ref={typedref}></h1>
          <a
            href={pdf}
            download="asadResume"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-left">
          <img src={asad} alt="Asad Ali" />
        </div>
      </div>
    </>
  );
}
