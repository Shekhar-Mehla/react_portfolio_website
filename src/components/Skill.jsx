import React from "react";

export const Skill = () => {
  return (
    <div>
      <section class="skills flex_center" id="skills">
        <span>Skills</span>
        <div class="skills_list flex_center">
          <div class="skills_list_items flex">
            <div class="skill_logo" style={{ color: "orangered" }}>
              <i class="fa-brands fa-html5"></i>
            </div>
            <div class="skill_name">HTML</div>
          </div>
          <div class="skills_list_items flex">
            <div class="skill_logo" style={{ color: "blue" }}>
              <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div class="skill_name">CSS</div>
          </div>
          <div class="skills_list_items flex">
            <div
              class="skill_logo"
              style={{
                color: "black; background-color: rgba(255, 255, 0, 0.888)",
              }}
            >
              <i class="fa-brands fa-js"></i>
            </div>
            <div class="skill_name">Javasript</div>
          </div>
          <div class="skills_list_items flex">
            <div class="skill_logo" style={{ color: " blue" }}>
              <i class="fa-brands fa-bootstrap"></i>
            </div>
            <div class="skill_name">Bootstrap</div>
          </div>
          <div class="skills_list_items flex">
            <div class="skill_logo" style={{ color: "#61dbfb" }}>
              <i class="fa-brands fa-react"></i>
            </div>
            <div class="skill_name">React</div>
          </div>
          <div class="skills_list_items flex">
            <div
              class="skill_logo"
              style={{
                color: "rgba(0, 0, 255, 0.719); background-color: yellow",
              }}
            >
              <i class="fa-brands fa-python"></i>
            </div>
            <div class="skill_name">Python</div>
          </div>
          <div class="skills_list_items flex">
            <div class="skill_logo">
              <i class="fa-brands fa-github"></i>
            </div>
            <div class="skill_name">Github</div>
          </div>
        </div>
      </section>
    </div>
  );
};
