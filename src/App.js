import "./App.css";
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ContactForm from "./components/contact-form/ContactForm";
import HolyGrail from "./components/holy-grail/HolyGrail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/holy-grail" element={<HolyGrail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
