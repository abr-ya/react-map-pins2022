import React from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime";
import "./body.css";
import App from "./App";

// todo fix it
// remove <React.StrictMode> to fix double hadler map click Bug!!!
/* <React.StrictMode>
  <App />
</React.StrictMode>, */
ReactDOM.createRoot(document.getElementById("root") as Element).render(<App />);
