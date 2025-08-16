import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Download from "./pages/Download.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CreateAccount from "./pages/CreateAccount.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);

