import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Nabvar.jsx";
import Footer from "../components/Footer.jsx";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:4000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.token) {
        onLogin(data.token);
        navigate("/admin/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Server error");
    }
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Login Form */}
      <div className="min-h-screen flex justify-center items-center bg-[#1B2A49] py-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition-all hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
            Admin Login
          </h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-semibold transition-all">
            Login
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
