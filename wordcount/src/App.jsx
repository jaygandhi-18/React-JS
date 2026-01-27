import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alerts from "./components/Alerts";

function App() {
    const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Dark Mode");

  const toggleStyle = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#161616";
      setMode("dark");
      setBtnText("Light Mode");
      document.title = "WC - Dark Mode";
      showAlert("Dark Mode is enabled", "info");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      setBtnText("Dark Mode");
      document.title = "WC - Light Mode";
      showAlert("Light Mode is enabled", "info");
    }
  };

  return (
    <>
    <Navbar title="React"mode={mode} togglemode={toggleStyle} modeName={btnText} />
    <Alerts alert={alert} />
    <TextFrom heading="Enter Your Text" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
