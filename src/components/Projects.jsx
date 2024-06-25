import React from "react";
import socialmediaImage from "../assets/socail_media.jpg";
import calculatorImage from "../assets/calculator.png";
import timeSaver from "../assets/todo_app.jpg";
import cvProjectImg from "../assets/cv_photo.png";

export const Projects = () => {
  return (
    <div>
      <section class="projects flex_center" id="projects">
        <span>My Projects</span>
        <div class="project_list flex">
          <div class="project_list_item1 flex">
            <div class="project_card flex">
              <img src={calculatorImage} alt="calculator" />
              <div class="card_content flex">
                <div class="card_link flex_center">
                  <a href="">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
                <div class="project_info">
                  <h4>calculator</h4>
                  <h5>
                    Techstack: <span>HTML, CSS,JavaScript</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="project_list_item2 flex">
            <div class="project_card flex">
              <img src={socialmediaImage} alt="socail media project photo" />
              <div class="card_content flex">
                <div class="card_link flex_center">
                  <a href="">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
                <div class="project_info">
                  <h4>Socail mediia</h4>
                  <h5>
                    Techstack: <span>HTML, CSS,JavaScript,Restfull Api</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="project_list_item3 flex">
            <div class="project_card flex">
              <img src={timeSaver} alt="travl blog project photo" />
              <div class="card_content flex">
                <div class="card_link flex_center">
                  <a href="">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
                <div class="project_info">
                  <h4>Time Wise</h4>
                  <h5>
                    Techstack: <span>HTML, CSS,JavaScript</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="project_list_item4 flex">
            <div class="project_card flex">
              <img src={cvProjectImg} alt="travl blog project photo" />
              <div class="card_content flex">
                <div class="card_link flex_center">
                  <a href="">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
                <div class="project_info">
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
