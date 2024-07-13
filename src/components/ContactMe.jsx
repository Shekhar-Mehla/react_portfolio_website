import React from "react";

export const ContactMe = () => {
  return (
    <div>
      {" "}
      <section className="contact_me flex_center" id="contact-me">
        <div className="contact_me_container flex_center">
          <span>Contact Me</span>
          <div className="contact_links_list flex">
            <a href="tel:+61473346823">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="https://www.linkedin.com/in/shekhar-singh--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Shekhar-Mehla">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <span>Or</span>
          <div className="email flex_center">
            <span>shekharmehla279@gmail.com</span>
            <a href="mailto:shekharmehla279@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
