import React, { useState, useEffect } from "react";

export default function AdminDashboard({ token, setToken }) {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadRegistrations() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/admin/list", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch registrations");
      }

      const data = await res.json();
      setRegistrations(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  }

  async function downloadCSV() {
    try {
      const res = await fetch("http://localhost:4000/api/admin/download", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to download CSV");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "registrations.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Error downloading CSV file.");
    }
  }

  function handleLogout() {
    localStorage.removeItem("adminToken");
    setToken("");
  }

  useEffect(() => {
    if (token) loadRegistrations();
  }, [token]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Registered Attendees</h2>
        <div className="flex gap-2">
          <button
            onClick={downloadCSV}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Download CSV
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      <button
        onClick={loadRegistrations}
        disabled={loading}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Refresh List"}
      </button>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      {registrations.length > 0 ? (
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Reg No</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Passport</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Ticket</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Payment</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Certificate</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border font-mono">{r.reg_no}</td>
                  <td className="px-4 py-2 border">{r.fullname}</td>
                  <td className="px-4 py-2 border">{r.passport}</td>
                  <td className="px-4 py-2 border">{r.email}</td>
                  <td className="px-4 py-2 border">{r.phone}</td>
                  <td className="px-4 py-2 border">{r.ticket_type}</td>
                  <td className="px-4 py-2 border">€{r.amount}</td>
                  <td className="px-4 py-2 border">{r.payment_method}</td>
                  <td className="px-4 py-2 border">{r.payment_status}</td>
                  <td className="px-4 py-2 border">
                    {r.reg_no && (
                      <a
                        href={`http://localhost:4000/uploads/${r.reg_no}.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 hover:underline"
                      >
                        View
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">
          {loading ? "Loading..." : "No registrations found."}
        </p>
      )}
    </div>
  );
}
