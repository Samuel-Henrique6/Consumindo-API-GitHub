import React from "react";
import ReactDOM from "react-dom"; // Importe diretamente o ReactDOM
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = document.getElementById("root"); // Não é necessário usar ReactDOM.createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);