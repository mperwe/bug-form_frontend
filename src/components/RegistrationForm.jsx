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
    payment_reason: "BBECO 2026",
    mobile_number: "",
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
    <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
      {/* Left Banner */}
      <div className="hidden lg:block lg:w-1/3">
        <img
          src="/images/flyer1.jpg"
          alt="Event Flyer"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Registration Form */}
      <div className="w-full lg:w-2/3 p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Register for the Convention
        </h2>

        <form onSubmit={submit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              required
              type="text"
              value={form.fullname}
              onChange={(e) => setForm({ ...form, fullname: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Passport / ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Passport / ID Number
            </label>
            <input
              required
              type="text"
              value={form.passport}
              onChange={(e) => setForm({ ...form, passport: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Passport / ID Number"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="example@email.com"
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
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="+49 123 456789"
              />
            </div>
          </div>

          {/* Ticket Type & Payment Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ticket Type
              </label>
              <select
                value={form.ticket_type}
                onChange={(e) =>
                  setForm({ ...form, ticket_type: e.target.value })
                }
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="manual">Bank Transfer / Cash</option>
                <option value="paypal">PayPal</option>
                <option value="mobile">Mobile Money (Uganda)</option>
              </select>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount (€)
            </label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Payment Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Reason
            </label>
            <input
              type="text"
              placeholder="BBECO 2026"
              value={form.payment_reason}
              onChange={(e) =>
                setForm({ ...form, payment_reason: e.target.value })
              }
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-gray-500 text-sm mt-1">
              Please include the reason above to help us track your payment.
            </p>
          </div>

          {/* Conditional Payment Instructions */}
          {form.payment_method === "paypal" && (
            <div className="mt-4 p-4 border border-blue-200 bg-blue-50 rounded-lg">
              <p className="font-medium text-blue-700 mb-2">
                Pay with PayPal:
              </p>
              <p className="text-sm text-blue-800 mb-2">
                Click one of the accounts below and enter the amount manually in PayPal.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://www.paypal.com/paypalme/YourFirstAccount"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  PayPal Account 1
                </a>
                <a
                  href="https://www.paypal.com/paypalme/YourSecondAccount"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  PayPal Account 2
                </a>
              </div>
            </div>
          )}

          {form.payment_method === "mobile" && (
            <div className="mt-4 p-4 border border-green-200 bg-green-50 rounded-lg">
              <p className="font-medium text-green-700 mb-2">
                Mobile Money Payment (Uganda)
              </p>
              <p className="text-sm text-green-800 mb-2">
                Send your payment to <strong>+256 700 123456</strong>. Then enter your Mobile Money number below.
              </p>
              <input
                type="tel"
                placeholder="Your Mobile Money Number"
                value={form.mobile_number}
                onChange={(e) =>
                  setForm({ ...form, mobile_number: e.target.value })
                }
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          )}

          {form.payment_method === "manual" && (
            <div className="mt-4 p-4 border border-gray-300 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800 mb-2">Bank Transfer Details:</p>
              <p className="text-sm text-gray-700 mb-2">
                Bank: XYZ Bank <br />
                Account Name: BBECO Events <br />
                Account Number: 1234567890 <br />
                SWIFT/BIC: XYZABC123 <br />
                Use payment reason: <strong>{form.payment_reason}</strong>
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 font-semibold shadow-md transition"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>

        {/* Success Message */}
        {result && result.success && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
            <p className="font-medium">✅ Registration Successful!</p>
            <p>Reg No: {result.reg_no}</p>
            {result.file && (
              <a
                href={`http://localhost:4000${result.file}`}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Download Receipt (PDF)
              </a>
            )}
          </div>
        )}

        {/* Error Message */}
        {result && result.error && (
          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-center">
            ❌ {result.error}
          </div>
        )}
      </div>
    </div>
  );
}
