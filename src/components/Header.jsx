import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="flex">
        <div className="left flex_center">
          <h2>SHEKHAR SINGH</h2>
          <div className="divider"></div>
          <div className="job_title">Soft. Engineer</div>
        </div>
        <label htmlFor="hambergerinput">
          <i className="fas fa-bars"></i>
        </label>
        <input
          type="checkbox"
          id="hambergerinput"
          style={{ display: "none" }}
        />
        <nav className="nav_container right flex">
          <ul className="flex">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/About">About </Link>
            </li>
            <li>
              <Link to="/Contact">Contact </Link>
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
export default Header;
