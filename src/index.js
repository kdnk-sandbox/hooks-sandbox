import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [firstName, setFirstName] = useState("Rudi");
  const [lastName, setLastName] = useState("Yardley");
  return <button onClick={() => setFirstName("Fred")} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
