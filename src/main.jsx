import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className=" xl:px-44 md:px-24 mx-auto">
        <App />
      </div>
    </Router>
  </StrictMode>
);
