import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Experince from "./Experince";
import Skills from "./Skills";
import Projects from "./Projects";
import Contac from "./Contac";
import Aos from "aos";
import "aos/dist/aos.css"
function App() {
  useEffect(() =>{
    Aos.init();
  }, [])
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <Projects/>
        <Contac/>
      </div>
    </>
  );
}

export default App;
