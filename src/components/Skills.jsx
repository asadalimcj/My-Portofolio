import React from "react";
import skillData from "../Data/skills.json";
export default function Skills() {
  return (
    <>
      <div id="skill" className="skills">
        <h1 className="pb-3">SKILLS</h1>
        <div className="Dataitems">
          {skillData.map((data) => (
            <>
              <div data-aos="fade-up-left" className="item" key={data.id}>
                <img src={data.imageSrc} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
