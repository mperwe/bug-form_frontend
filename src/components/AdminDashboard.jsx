import React, { useState, useEffect } from "react";
import { RefreshCcw } from "lucide-react";

export default function AdminDashboard() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch total count on mount
  useEffect(() => {
    fetch("http://localhost:4000/api/admin/count")
      .then((res) => res.json())
      .then((data) => setCount(data.total))
      .catch(() => setError("Failed to fetch registration count."));
  }, []);

  const loadList = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/admin/list");
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      setList(data);
    } catch {
      setError("Failed to load registration list.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-2xl font-bold text-gray-800">Admin Dashboard</h3>
        <button
          onClick={loadList}
          disabled={loading}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 shadow-md transition"
        >
          <RefreshCcw size={18} />
          {loading ? "Loading..." : "Refresh List"}
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg text-center">
        <p className="text-lg opacity-90">Total Registered Members</p>
        <h2 className="text-5xl font-extrabold mt-2">{count}</h2>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg border border-red-300">
          {error}
        </div>
      )}

      {/* Registered List Table */}
      <div className="overflow-x-auto">
        {list.length > 0 ? (
          <table className="min-w-full bg-white rounded-2xl shadow-lg border border-gray-100 text-gray-700">
            <thead className="bg-gray-100 uppercase text-gray-800 text-sm">
              <tr>
                <th className="py-3 px-4">Reg No</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
              </tr>
            </thead>
            <tbody>
              {list.map((r) => (
                <tr
                  key={r.id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-mono text-sm">{r.reg_no}</td>
                  <td className="py-3 px-4">{r.fullname}</td>
                  <td className="py-3 px-4">{r.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center mt-4">
            {loading ? "Loading members..." : "No registrations yet."}
          </p>
        )}
      </div>
    </div>
  );
}
