import React from "react";
import {Routes, Route} from "react-router-dom";   
import Home from "../pagas/Home";
import Register from "../pagas/Register";

function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AllRoute;