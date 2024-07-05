import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      {" "}
      <footer class="flex_center">
        <div class="footer_container flex">
          <div class="top_section flex">
            <div class="page_links flex">
              <span>Links</span>

              <ul>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/About">About us</Link>
                </li>
              </ul>
            </div>
            <div class="socail_links flex_center">
              <span>Social links</span>
              <a href="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div class="bottom_section">@ &copy;copyright reserved by me</div>
        </div>
      </footer>
    </div>
  );
};
