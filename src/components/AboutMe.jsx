import React from "react";
import myimage from "../assets/resumepick.png";

export const AboutMe = () => {
  return (
    <section id="about-me" className="container my-5">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="display-4 mb-4">About Me</h2>
        </div>
        <div className="col-md-8 mx-auto">
          <div className="card about_me_card shadow-lg border-light">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img 
                  src={myimage} 
                  alt="Shekhar Singh" 
                  className="img-fluid rounded-circle about_me_image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Shekhar Singh</h3>
                  <p className="card-text">
                    I am a detail-oriented, analytical, and self-driven programmer
                    with extensive experience building user-facing applications. I am an efficient and knowledgeable coder with skills in HTML, CSS,
                    React, Bootstrap, JavaScript, and Python programming languages.
                  </p>
                  <p className="card-text">
                    As a coordinated and collaborative team player with a keen eye for detail, I bring graphic design skills and a strong ability to contribute to code base improvement initiatives and UX enhancement projects.
                  </p>
                  <div className="card-text mb-4">
                    <h4>Location</h4>
                    <p>Geelong, Victoria</p>
                  </div>
                  <div className="card-text">
                    <h4>Interests</h4>
                    <div className="d-flex flex-wrap justify-content-center">
                      <span className="badge rounded-pill bg-primary me-2 mb-2">Coding</span>
                      <span className="badge rounded-pill bg-success me-2 mb-2">Cricket</span>
                      <span className="badge rounded-pill bg-info me-2 mb-2">Reading</span>
                      <span className="badge rounded-pill bg-warning text-dark me-2 mb-2">Football</span>
                      <span className="badge rounded-pill bg-danger me-2 mb-2">Movies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
