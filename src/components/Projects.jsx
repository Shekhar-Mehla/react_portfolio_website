import React from "react";

import socialmediaImage from "../assets/socail_media.jpg";
import calculatorImage from "../assets/calculator.jpg";
import timeSaver from "../assets/todo_app.jpg";
import Bakery from "../assets/bakery.jpg";

const projectsData = [
  {
    title: "Bakery",
    image: Bakery,
    techstack: "HTML, CSS, JavaScript, RESTful API,Reactjs,Bootstrap",
    liveLink: "",
    githubLink: "",
  },
  {
    title: "Time Wise",
    image: timeSaver,
    techstack: "HTML, CSS, JavaScript, RESTful API,Reactjs,Bootstrap",
    liveLink: "", // Add the actual link
    githubLink: "", // Add the actual link
  },
  {
    title: "Socail Media",
    image: socialmediaImage,
    techstack: "HTML, CSS, JavaScript, RESTful API,Reactjs,Bootstrap",
    liveLink: "", // Add the actual link
    githubLink: "", // Add the actual link
  },
  {
    title: "Calculator",
    image: calculatorImage,
    techstack: "HTML, CSS, JavaScript, RESTful API,Reactjs,Bootstrap",
    liveLink: "", // Add the actual link
    githubLink: "", // Add the actual link
  },
];

export const Projects = () => {
  return (
    <section className="projects py-5" id="projects">
      <div className="container">
        <h2 className="section-title text-center mb-5">My Projects</h2>
        <div className="row">
          {projectsData.map((project, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={project.title}
            >
              <div
                className={`project-card animate__animated animate__fadeInUp animate__delay-${index}s`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
                <div className="card-content">
                  <div className="card-links mb-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-chrome"></i>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                  <div className="project-info">
                    <h4>{project.title}</h4>
                    <h5>
                      Techstack: <span>{project.techstack}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
