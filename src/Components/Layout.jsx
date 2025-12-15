import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
// import { useOutletContext } from "react-router-dom";

function Layout() {
  const [theme, setTheme] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setTheme("Enable Light Mode");
      showAlert("Dark Mode Enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setTheme("Enable Dark Mode");
      showAlert("Light Mode Enabled!", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        theme={theme}
      />
      <Outlet context={{ mode, alert, showAlert }} />
    </>
  );
}

export default Layout;
