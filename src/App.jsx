import React from "react";

import "./App.css";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Skill } from "./components/Skill";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Hero></Hero>}></Route>
          <Route path="/Home" element={<Hero></Hero>}></Route>

          <Route path="/Skills" element={<Skill></Skill>}></Route>
          <Route path="/About" element={<AboutMe></AboutMe>}></Route>
          <Route path="/Contact" element={<ContactMe></ContactMe>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Route>
      </Routes>
    </>
  );
};
