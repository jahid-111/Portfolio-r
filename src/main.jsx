import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import BackToTop from "./components/utilsComponents/BackToTop.jsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="relative px-2 xl:px-44 lg:px-24 mx-auto">
        <App />
        <ToastContainer />
        <div className="absolute right-2 md:right-24 -bottom-10 md:bottom-12">
          <BackToTop />
        </div>
      </div>
    </Router>
  </StrictMode>
);
