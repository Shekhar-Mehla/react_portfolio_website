import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Skill } from "./components/Skill";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <Skill />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
};
