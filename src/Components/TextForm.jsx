import { useState } from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {
  // passing default props using destructuring method.
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text has been converted into Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text has been converted into Lowercase!", "success");
  };

  const ClearText = () => {
    setText("");
    props.showAlert("Text has been cleared!", "success");
  };

  const CopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipborad!", "success");
  };
  // navigator.clipboard is used to copy text to clipboard.

  const RemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed!", "success");
  };

  return (
    <div>
      <h1 className={`${props.mode === "dark" ? "text-light" : "text-dark"}`}>
        {props.heading}
      </h1>
      <div>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          style={{
            height: "300px",
            backgroundColor: props.mode === "light" ? "lightgrey" : "white",
            color: "black",
            border: "1px solid black",
            placeholderColor: "black",
          }}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <button
        type="button"
        onClick={handleUpClick}
        className="btn btn-primary my-1 mx-1"
        disabled={text.trim().length <= 0 ? true : false}
      >
        Convert text to Uppercase
      </button>

      <button
        type="button"
        onClick={handleLoClick}
        className="btn btn-primary my-1 mx-1"
        disabled={text.trim().length <= 0 ? true : false}
      >
        Convert text to Lowercase
      </button>

      <button
        type="button"
        onClick={ClearText}
        className="btn btn-primary my-1 mx-1"
        disabled={text.trim().length <= 0 ? true : false}
      >
        Clear text
      </button>

      <button
        type="button"
        onClick={CopyText}
        className="btn btn-primary my-1 mx-1"
        disabled={text.trim().length <= 0 ? true : false}
      >
        Copy text
      </button>

      <button
        type="button"
        onClick={RemoveExtraSpaces}
        className="btn btn-primary my-1 mx-1"
        disabled={text.trim().length <= 0 ? true : false}
      >
        Remove extra spaces
      </button>

      <h2 className={`${props.mode === "dark" ? "text-light" : "text-dark"}`}>
        Your text summary....
      </h2>
      <p className={`${props.mode === "dark" ? "text-light" : "text-dark"}`}>
        {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
        {text.length} characters
      </p>
      <p className={`${props.mode === "dark" ? "text-light" : "text-dark"}`}>
        {text.trim() === "" ? 0 : 0.008 * text.trim().split(/\s+/).length}{" "}
        Minutes read
      </p>

      <h2 className={`${props.mode === "dark" ? "text-light" : "text-dark"}`}>
        Preview
      </h2>
      <p className={`${props.mode === "dark" ? "text-light" : "text-dark"}`}>
        {text.length > 0 ? text : "Nothing to preview!"}
      </p>
    </div>
  );
};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Write text here",
};

export default TextForm;
