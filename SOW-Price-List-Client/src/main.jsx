import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/main.scss";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
);
