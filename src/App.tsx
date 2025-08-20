import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import Download from "./pages/Download";
import Channel from "./pages/Channel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}
