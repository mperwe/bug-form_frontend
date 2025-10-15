import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public site */}
        <Route path="/" element={<Home />} />

        {/* Admin login page */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin dashboard - protected */}
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
