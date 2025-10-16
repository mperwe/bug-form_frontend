import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

export default function App() {
  const [adminToken, setAdminToken] = useState(localStorage.getItem("adminToken") || "");

  function handleLogin(token) {
    setAdminToken(token);
    localStorage.setItem("adminToken", token);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin onLogin={handleLogin} />} />
        <Route path="/admin/dashboard" element={<AdminDashboard token={adminToken} setToken={setAdminToken} />} />
      </Routes>
    </Router>
  );
}
