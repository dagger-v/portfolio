import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import About from "./About";
import Header from "./Header";
import Project from "./Project";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
