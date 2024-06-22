import React from "react";
import myimage from "../assets/resumepick.png";

export const Hero = () => {
  return (
    <div>
      <section class="hero flex_center">
        <section class="flex hero_container">
          <div class="left flex_center">
            <div>
              Hi i'm <span>SHEKHAR SINGH</span>
            </div>
            <div>Front-end Developer</div>
            <p>I love coding</p>
            <button class="flex_center">
              <a href="./assests/shekhar_cv.pdf" download="shekhar_cv.pdf">
                Download CV
              </a>
            </button>
          </div>
          <div class="right flex_center">
            <img src={myimage} alt="my_photo" />
          </div>
        </section>
      </section>
    </div>
  );
};
