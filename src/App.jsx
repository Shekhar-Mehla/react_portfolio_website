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
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/Home" element={<Hero></Hero>}></Route>

        <Route path="/Skills" element={<Skill></Skill>}></Route>
        <Route path="/About" element={<AboutMe></AboutMe>}></Route>
        <Route path="/Contact" element={<ContactMe></ContactMe>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};
