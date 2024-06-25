import React from "react";

export const Header = () => {
  return (
    <div>
      <header className="flex">
        <div className="left flex_center">
          <h2>SHEKHAR SINGH</h2>
          <div className="divider"></div>
          <div className="job_title">Soft. Engineer</div>
        </div>
        <label htmlFor="hambergerinput">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input
          type="checkbox"
          id="hambergerinput"
          style={{ display: "none" }}
        />
        <nav className="nav_container right flex">
          <ul className="flex">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about-me">About </a>
            </li>
            <li>
              <a href="#contact-me">Contact </a>
            </li>
          </ul>
        </nav>
        <label htmlFor="dark_mode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
      </header>
    </div>
  );
};
