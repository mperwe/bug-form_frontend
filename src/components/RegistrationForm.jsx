import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullname: "",
    passport: "",
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
    setResult(null);

    try {
      const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ success: false, error: "Submission failed." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
      {/* Left Banner */}
      <div className="hidden lg:block lg:w-1/3">
        <img
          src="/images/flyer.jpg"
          alt="Event Banner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Form */}
      <div className="w-full lg:w-2/3 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Register for the Convention
        </h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              required
              type="text"
              value={form.fullname}
              onChange={(e) =>
                setForm({ ...form, fullname: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Passport Number
            </label>
            <input
              required
              type="text"
              value={form.passport}
              onChange={(e) =>
                setForm({ ...form, passport: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ticket Type
              </label>
              <select
                value={form.ticket_type}
                onChange={(e) =>
                  setForm({ ...form, ticket_type: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option>General</option>
                <option>VIP</option>
                <option>Student</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <select
                value={form.payment_method}
                onChange={(e) =>
                  setForm({ ...form, payment_method: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="manual">Bank Transfer / Cash</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount (€)
            </label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-semibold shadow-md transition-all"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>

        {result && result.success && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
            <p>Registration successful!</p>
            <p>Reg No: {result.reg_no}</p>
            <a
              href={`http://localhost:4000${result.file}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Download Receipt (PDF)
            </a>
          </div>
        )}

        {result && result.error && (
          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
            {result.error}
          </div>
        )}
      </div>
    </div>
  );
}
