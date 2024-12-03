import "./App.css";
// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactForm from "./components/contact-form/ContactForm";
import HolyGrail from "./components/holy-grail/HolyGrail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div id="home-container">
              <h1>Components</h1>
              <Link to="/contact-form">Contact Form</Link>
              <Link to="/holy-grail">Holy Grail</Link>
            </div>
          }
        />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/holy-grail" element={<HolyGrail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
