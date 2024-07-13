import React from "react";
import myimage from "../assets/resumepick.png";

export const Hero = () => {
  return (
    <div>
      <section className="hero flex_center">
        <section className="flex hero_container">
          <div className="left flex_center">
            <div>
              Hi i'm <span>SHEKHAR SINGH</span>
            </div>
            <div>Soft. Engineer</div>
            <p>I love coding</p>
            <button className="flex_center">
              <a href="./assests/shekhar_cv.pdf" download="shekhar_cv.pdf">
                Download CV
              </a>
            </button>
          </div>
          <div className="right flex_center">
            <img src={myimage} alt="my_photo" />
          </div>
        </section>
      </section>
    </div>
  );
};
