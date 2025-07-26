import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Download from "./pages/Download.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
    <Download />
  </StrictMode>
);

