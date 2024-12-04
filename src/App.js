import "./App.css";
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ContactForm from "./components/contact-form/ContactForm";
import HolyGrail from "./components/holy-grail/HolyGrail";
import TodoList from "./components/to-do-list/TodoList";

function App() {
  const BASE_URL = "/react-components-collection";
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_URL} element={<Home />} />
        <Route path={`${BASE_URL}/contact-form`} element={<ContactForm />} />
        <Route path={`${BASE_URL}/holy-grail`} element={<HolyGrail />} />
        <Route path={`${BASE_URL}/todo-list`} element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;