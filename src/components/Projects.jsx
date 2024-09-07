import React from "react";
import Projdata from "../Data/projects.json";

export default function Projects() {
  return (
    <>
      <div id="project" className="container project my-3">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {Projdata.map((data) => {
            return (
              <div
                key={data.key}
                className="my-4 mx-4 col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div
                  data-aos="zoom-in"
                  className="card bg-dark text-light"
                  style={{
                    width: "100%",
                    border: "2px solid yellowGreen",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                >
                  <div className="d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "100%",
                        height: "200px",
                        border: "2px solid yellowGreen",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} target="blank" className="btn btn-primary mx-3">
                      Demo
                    </a>
                    <a href={data.source} target="blank" className="btn btn-danger">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
