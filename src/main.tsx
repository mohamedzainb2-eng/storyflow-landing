import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/animations.css";
import { LanguageProvider } from "./core/i18n/LanguageContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
