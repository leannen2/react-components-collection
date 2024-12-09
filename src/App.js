import "./App.css";
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ContactForm from "./components/contact-form/ContactForm";
import HolyGrail from "./components/holy-grail/HolyGrail";
import TodoList from "./components/to-do-list/TodoList";
import DataTable from "./components/data-table-pagination/DataTable";
import Tabs from "./components/tabs/Tabs";
import JobBoard from "./components/job-board/JobBoard";

function App() {
  const BASE_URL = "/react-components-collection";

  return (
    <div>
      <a href={BASE_URL}>
        <button>Home Page</button>
      </a>

      <BrowserRouter>
        <Routes>
          <Route path={BASE_URL} element={<Home />} />
          <Route path={`${BASE_URL}/contact-form`} element={<ContactForm />} />
          <Route path={`${BASE_URL}/holy-grail`} element={<HolyGrail />} />
          <Route path={`${BASE_URL}/todo-list`} element={<TodoList />} />
          <Route
            path={`${BASE_URL}/data-table-pagination`}
            element={<DataTable />}
          />
          <Route path={`${BASE_URL}/tabs`} element={<Tabs />} />
          <Route path={`${BASE_URL}/job-board`} element={<JobBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
