import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// dotenv
// require("dotenv").config();
// console.log(process.env); // remove this after you've confirmed it working

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
