import React from "react";
import ChefLogo from "../assets/chef.png";
import MongodbLogo from "../assets/mongodb.png";
import ExpressLogo from "../assets/express.jpg";

export const Skill = () => {
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
      icon: "custom-icon",
      bgColor: "bg-dark",
      animation: "animate__fadeInUp",
      isCustom: true,
      logo: ExpressLogo,
    },
    {
      name: "MongoDB",
      icon: "custom-icon",
      bgColor: "bg-dark",
      animation: "animate__fadeInUp",
      isCustom: true,
      logo: MongodbLogo,
    },
  ];

  return (
    <section className="skills py-5" id="skills">
      <div className="container text-center">
        <h2 className="section-title mb-5">Tech Skills</h2>
        <div className="row justify-content-center">
          {skillsData.length > 0 ? (
            skillsData.map((skill, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={skill.name}>
                <div
                  className={`skill-card animate__animated ${skill.animation} animate__delay-${index}s`}
                >
                  <div className={`skill-logo ${skill.bgColor} text-white`}>
                    {skill.isCustom ? (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="custom-logo"
                      />
                    ) : (
                      <i
                        className={`${skill.icon} fa-3x`}
                        aria-label={`${skill.name} icon`}
                      ></i>
                    )}
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              </div>
            ))
          ) : (
            <p>No skills data available.</p>
          )}
        </div>
      </div>
    </section>
  );
};
