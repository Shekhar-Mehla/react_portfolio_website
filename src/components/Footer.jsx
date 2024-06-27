import React from "react";

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
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About us</a>
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
