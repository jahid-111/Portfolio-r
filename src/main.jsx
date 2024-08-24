import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className=" md:px-28 mx-auto bg-gray-900 text-white">
        <App />
      </div>
    </Router>
  </StrictMode>
);
