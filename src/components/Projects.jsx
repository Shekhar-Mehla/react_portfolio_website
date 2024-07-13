import React from "react";
import socialmediaImage from "../assets/socail_media.jpg";
import calculatorImage from "../assets/calculator.png";
import timeSaver from "../assets/todo_app.jpg";
import cvProjectImg from "../assets/cv_photo.png";

export const Projects = () => {
  return (
    <div>
      <section className="projects flex_center" id="projects">
        <span>My Projects</span>
        <div className="project_list flex">
          <div className="project_list_item1 flex">
            <div className="project_card flex">
              <img src={calculatorImage} alt="calculator" />
              <div className="card_content flex">
                <div className="card_link flex_center">
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="project_info">
                  <h4>calculator</h4>
                  <h5>
                    Techstack: <span>HTML, CSS,JavaScript</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="project_list_item2 flex">
            <div className="project_card flex">
              <img src={socialmediaImage} alt="socail media project photo" />
              <div className="card_content flex">
                <div className="card_link flex_center">
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="project_info">
                  <h4>Socail mediia</h4>
                  <h5>
                    Techstack: <span>HTML, CSS,JavaScript,Restfull Api</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="project_list_item3 flex">
            <div className="project_card flex">
              <img src={timeSaver} alt="travl blog project photo" />
              <div className="card_content flex">
                <div className="card_link flex_center">
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="project_info">
                  <h4>Time Wise</h4>
                  <h5>
                    Techstack: <span>HTML, CSS,JavaScript</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="project_list_item4 flex">
            <div className="project_card flex">
              <img src={cvProjectImg} alt="travl blog project photo" />
              <div className="card_content flex">
                <div className="card_link flex_center">
                  <a href="">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="project_info">
                  <h4>Portfolio</h4>
                  <h5>
                    Techstack: <span>HTML, CSS,JavaScript</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
