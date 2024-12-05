import { useState } from "react";
import "./styles.css";
export default function Tabs() {
  const [tab, setTab] = useState("HTML");
  return (
    <div className="padding-10">
      <div className="tabs-list">
        {["HTML", "CSS", "JavaScript"].map((val) => (
          <button
            // style={tab === val ? { color: "blue" } : { color: "black" }}
            onClick={() => setTab(val)}
            className={`tabs-list-item ${
              tab === val ? "tabs-list-item--active" : ""
            }`}
          >
            {val}
          </button>
        ))}
      </div>
      <div>
        {tab === "HTML" && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {tab === "CSS" && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {tab === "JavaScript" && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}
