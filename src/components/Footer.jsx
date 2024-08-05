import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/skills" className="text-light footer-link">
                  <i className="fas fa-tachometer-alt me-2"></i> Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-light footer-link">
                  <i className="fas fa-project-diagram me-2"></i> Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light footer-link">
                  <i className="fas fa-user me-2"></i> About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="footer-heading">Follow Us</h3>
            <ul className="list-unstyled d-flex justify-content-around">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light footer-link"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light footer-link"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light footer-link"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-heading">Contact</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:support@example.com"
                  className="text-light footer-link"
                >
                  <i className="fas fa-envelope me-2"></i> support@example.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="text-light footer-link">
                  <i className="fas fa-phone-alt me-2"></i> +1 234 567 89
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
