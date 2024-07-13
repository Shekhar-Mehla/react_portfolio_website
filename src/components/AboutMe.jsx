import React from "react";
import myimage from "../assets/resumepick.png";

export const AboutMe = () => {
  return (
    <div>
      <section className="about_me flex_center" id="about-me">
        <div className="about_me_container flex_center">
          <span>About Me</span>
          <div className="about_me_card flex">
            <img src={myimage} alt="my photo" />
            <div className="about_me_card_content flex">
              <h3>Shekhar Singh</h3>

              <p>
                I am detail-oriented, analytical, and self-driven programmer
                with extensive experience building user-facing applications.
                Efficient and knowledgeable coder with skills in HTML, CSS,
                React, Bootsrap, JavaScript and Python programming languages.
              </p>
              <p>
                Coordinated and collaborative team player with attention to
                detail, graphic design skills, and ability to contribute to code
                base improvement initiatives and UX improvement projects.
              </p>

              <h4>Geelong, Victoria</h4>
              <h4>Interest</h4>
              <div className="interest flex">
                <h5>coding</h5>
                <h5>Cricket</h5>
                <h5>Reading</h5>
                <h5>Football</h5>
                <h5>Movies</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
