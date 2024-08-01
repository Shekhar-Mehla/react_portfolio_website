import React from "react";

export const Skill = () => {
  return (
    <section className="skills py-5" id="skills">
      <div className="container text-center">
        <h2 className="section-title mb-5">Tech Skills</h2>
        <div className="row justify-content-center">
          {skillsData.map((skill, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={skill.name}>
              <div
                className={`skill-card animate__animated ${skill.animation} animate__delay-${index}s`}
              >
                <div className={`skill-logo ${skill.bgColor} text-white`}>
                  <i className={`${skill.icon} fa-3x`}></i>
                </div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const skillsData = [
  {
    name: "HTML",
    icon: "fab fa-html5",
    bgColor: "bg-danger",
    animation: "animate__fadeInUp",
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
    bgColor: "bg-primary",
    animation: "animate__fadeInUp",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    bgColor: "bg-warning",
    animation: "animate__fadeInUp",
  },
  {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    bgColor: "bg-info",
    animation: "animate__fadeInUp",
  },
  {
    name: "React",
    icon: "fab fa-react",
    bgColor: "bg-info",
    animation: "animate__fadeInUp",
  },
  {
    name: "Python",
    icon: "fab fa-python",
    bgColor: "bg-warning",
    animation: "animate__fadeInUp",
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    bgColor: "bg-dark",
    animation: "animate__fadeInUp",
  },
  {
    name: "Node.js",
    icon: "fab fa-node",
    bgColor: "bg-success",
    animation: "animate__fadeInUp",
  },
  {
    name: "Express.js",
    icon: "fas fa-server",
    bgColor: "bg-dark",
    animation: "animate__fadeInUp",
  },
];
