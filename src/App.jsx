import React from "react";
import "./App.css";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { useOutletContext } from "react-router-dom";

function App() {
  const {mode, alert, showAlert} = useOutletContext();

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    if (word === "") {
      return;
    }
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };


  return (
    <>
      <Alert showAlert={showAlert} alert={alert} capitalize={capitalize} />
      <div className="form-floating container my-5">
        <TextForm
          heading="Enter you text here"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
