import React from "react";

export const Skill = () => {
  return (
    <div>
      <section className="skills flex_center" id="skills">
        <span>Skills</span>
        <div className="skills_list flex_center">
          <div className="skills_list_items flex">
            <div className="skill_logo" style={{ color: "orangered" }}>
              <i className="fab fa-html5"></i>
            </div>
            <div className="skill_name">HTML</div>
          </div>
          <div className="skills_list_items flex">
            <div className="skill_logo" style={{ color: "blue" }}>
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="skill_name">CSS</div>
          </div>
          <div className="skills_list_items flex">
            <div
              className="skill_logo"
              style={{
                color: "black",
                backgroundColor: "rgba(255, 255, 0, 0.888)",
              }}
            >
              <i className="fab fa-js"></i>
            </div>
            <div className="skill_name">JavaScript</div>
          </div>
          <div className="skills_list_items flex">
            <div className="skill_logo" style={{ color: "blue" }}>
              <i className="fab fa-bootstrap"></i>
            </div>
            <div className="skill_name">Bootstrap</div>
          </div>
          <div className="skills_list_items flex">
            <div className="skill_logo" style={{ color: "#61dbfb" }}>
              <i className="fab fa-react"></i>
            </div>
            <div className="skill_name">React</div>
          </div>
          <div className="skills_list_items flex">
            <div
              className="skill_logo"
              style={{
                color: "rgba(0, 0, 255, 0.719)",
                backgroundColor: "yellow",
              }}
            >
              <i className="fab fa-python"></i>
            </div>
            <div className="skill_name">Python</div>
          </div>
          <div className="skills_list_items flex">
            <div className="skill_logo">
              <i className="fab fa-github"></i>
            </div>
            <div className="skill_name">GitHub</div>
          </div>
        </div>
      </section>
    </div>
  );
};
