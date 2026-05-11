import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ClientDashboard from "../pages/ClientDashboard";
import SMHDashboard from "../pages/SMHDashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/smh" element={<SMHDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}