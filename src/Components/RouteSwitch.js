import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "./Header";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
