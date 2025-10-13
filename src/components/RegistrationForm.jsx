import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    ticket_type: "General",
    payment_method: "manual",
    amount: 10,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ success: false, message: "Failed to register. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Register for the Buganda Convention
      </h2>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={form.fullname}
            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone
          </label>
          <input
            type="tel"
            placeholder="+49 123 4567 890"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ticket Type
          </label>
          <select
            value={form.ticket_type}
            onChange={(e) =>
              setForm({ ...form, ticket_type: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option>General</option>
            <option>VIP</option>
            <option>Student</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Payment Method
          </label>
          <select
            value={form.payment_method}
            onChange={(e) =>
              setForm({ ...form, payment_method: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="manual">Bank Transfer / Cash</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Amount (€)</label>
          <input
            type="number"
            min="1"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>

      {result && result.success && (
        <div className="mt-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
          <p className="font-semibold">Registration Successful!</p>
          <p>Reg No: <span className="font-mono">{result.reg_no}</span></p>
          <a
            href={`http://localhost:4000${result.file}`}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline mt-2 inline-block"
          >
            Download Receipt (PDF)
          </a>
        </div>
      )}

      {result && !result.success && (
        <div className="mt-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-center">
          {result.message || "Registration failed. Please try again."}
        </div>
      )}
    </div>
  );
}
