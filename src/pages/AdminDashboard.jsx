import React, { useState, useEffect } from "react";

export default function AdminDashboard({ token, setToken }) {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all registrations
  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const res = await fetch("http://localhost:4000/api/admin/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Unauthorized or failed to fetch data");
        const data = await res.json();
        setRegistrations(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load registrations.");
      } finally {
        setLoading(false);
      }
    }
    fetchRegistrations();
  }, [token]);

  function handleLogout() {
    localStorage.removeItem("adminToken");
    setToken("");
    window.location.href = "/admin/login";
  }

  async function handleDownload() {
    try {
      const res = await fetch("http://localhost:4000/api/admin/download", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Download failed");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "registrations.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to download CSV file");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-700">
            Admin Dashboard
          </h2>
          <div className="space-x-3">
            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              ⬇️ Download CSV
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>
        </div>

        {loading && (
          <p className="text-center text-gray-500 py-10">Loading data...</p>
        )}

        {error && (
          <p className="text-center text-red-600 font-medium py-4">{error}</p>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm md:text-base">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-3 py-2 border">Reg No</th>
                  <th className="px-3 py-2 border">Full Name</th>
                  <th className="px-3 py-2 border">Email</th>
                  <th className="px-3 py-2 border">Phone</th>
                  <th className="px-3 py-2 border">Ticket Type</th>
                  <th className="px-3 py-2 border">Amount (€)</th>
                  <th className="px-3 py-2 border">Payment Method</th>
                  <th className="px-3 py-2 border">Payment Status</th>
                  <th className="px-3 py-2 border">Date Registered</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-gray-50 hover:bg-gray-100"
                        : "bg-white hover:bg-gray-100"
                    }
                  >
                    <td className="px-3 py-2 border text-center">
                      {reg.reg_no}
                    </td>
                    <td className="px-3 py-2 border">{reg.fullname}</td>
                    <td className="px-3 py-2 border">{reg.email}</td>
                    <td className="px-3 py-2 border">{reg.phone}</td>
                    <td className="px-3 py-2 border">{reg.ticket_type}</td>
                    <td className="px-3 py-2 border text-center">
                      {reg.amount}
                    </td>
                    <td className="px-3 py-2 border">{reg.payment_method}</td>
                    <td className="px-3 py-2 border text-center">
                      {reg.payment_status || "Pending"}
                    </td>
                    <td className="px-3 py-2 border text-center text-gray-700">
                      {new Date(reg.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {registrations.length === 0 && (
              <p className="text-center text-gray-500 py-6">
                No registrations found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
