import React from "react";
import Home from "./home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
  );
}


export default App;