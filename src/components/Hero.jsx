import React from "react";
import myimage from "../assets/resumepick.png";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Hero = () => {
  return (
    <section className="hero d-flex align-items-center bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">SHEKHAR SINGH</span>
              </h1>
              <h2 className="hero-subtitle">Software Engineer</h2>
              <p className="hero-description">
                I love coding and creating innovative solutions.
              </p>
              <Button
                className="hero-button"
                variant="primary"
                href="./assets/shekhar_cv.pdf"
                download="shekhar_cv.pdf"
              >
                Download CV
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="image-wrapper">
              <img
                src={myimage}
                alt="Shekhar Singh"
                className="img-fluid rounded-circle animate__animated animate__zoomIn"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
