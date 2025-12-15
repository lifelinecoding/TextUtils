import React from "react";
import { useOutletContext } from "react-router-dom";

export default function About() {
  const {mode} = useOutletContext();

  const lightStyle = {
    backgroundColor: "white",
    color: "black",
  };

  const darkStyle = {
    backgroundColor: "rgb(36, 74, 104)",
    color: "white",
    // border: "1px solid white",
  };

  const mystyle = mode === "dark" ? darkStyle : lightStyle;

  return (
    <div className={`container my-5 ${mode === "dark" ? "text-light" : "text-dark"}`}>
      <h1>About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" style={mystyle}>
            <button
              className={`accordion-button collapsed ${mode === "dark" ? "dark-mode" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
              <em> </em>
              <strong>conversion to uppercase or lowercase</strong>
              .
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" style={mystyle}>
            <button
              className={`accordion-button collapsed ${mode === "dark" ? "dark-mode" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free character counter tool that provides instant
              character count & word count statistics for a given text. Textutils
              reports the number of words and characters. Thus it is suitable for
              writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" style={mystyle}>
            <button
              className={`accordion-button collapsed ${mode === "dark" ? "dark-mode" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count
              characters in facebook, blog, books, excel document, pdf document,
              essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
