import React from "react";

export const ContactMe = () => {
  return (
    <section id="contact-me" className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-4 mb-4">Contact Me</h2>
        <p className="lead">
          Feel free to reach out through any of the following methods:
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card border-light shadow-lg">
            <div className="card-body">
              <div className="d-flex flex-wrap justify-content-around mb-4">
                <div className="contact-card">
                  <a href="tel:+61473346823" className="contact-link">
                    <i className="fas fa-phone fa-2x mb-2"></i>
                    <h5>Call Me</h5>
                  </a>
                </div>
                <div className="contact-card">
                  <a
                    href="https://www.linkedin.com/in/shekhar-singh--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x mb-2"></i>
                    <h5>LinkedIn</h5>
                  </a>
                </div>
                <div className="contact-card">
                  <a
                    href="https://github.com/Shekhar-Mehla"
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fa-2x mb-2"></i>
                    <h5>GitHub</h5>
                  </a>
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="d-block mb-3">Or</span>
                <div className="d-flex flex-column align-items-center">
                  <h4>shekharmehla279@gmail.com</h4>
                  <a
                    href="mailto:shekharmehla279@gmail.com"
                    className="contact-link"
                  >
                    <i className="fas fa-envelope fa-2x mb-2"></i>
                    <h5>Email Me</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
