
import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullname: "",
    passport: "",
    email: "",
    phone: "",
    ticket_type: "Early Bird",
    payment_method: "manual",
    amount: "",
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
    <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl border border-gray-200 p-8 md:p-10 space-y-6 transition-all hover:shadow-3xl">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        BBECO 2026 Registration Form
      </h2>

      <form onSubmit={submit} className="space-y-6 text-sm md:text-base">
        {/* Full Name + Passport */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={form.fullname}
              onChange={(e) => setForm({ ...form, fullname: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Passport / ID <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={form.passport}
              onChange={(e) => setForm({ ...form, passport: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Passport or ID"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="+49 123 456789"
            />
          </div>
        </div>

        {/* Ticket Type + Amount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Ticket Type
            </label>
            <select
              value={form.ticket_type}
              onChange={(e) => setForm({ ...form, ticket_type: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>Early Bird</option>
              <option>Regular</option>
              <option>Late</option>
            </select>
            <div className="mt-2 text-xs text-gray-700 bg-gray-50 rounded-md p-2">
              💶 <strong>Early Bird:</strong> €100 (Oct – Dec) <br />
              💶 <strong>Regular:</strong> €120 (Jan – Mar) <br />
              💶 <strong>Late:</strong> €150 (Apr onwards)
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Amount (€)
            </label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Amount to pay"
            />
          </div>
        </div>

        {/* Payment Method + Reason */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              value={form.payment_method}
              onChange={(e) =>
                setForm({ ...form, payment_method: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="manual">Bank Transfer / Cash</option>
              <option value="paypal">PayPal</option>
              <option value="mobile">Mobile Money</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Payment Reason
            </label>
            <input
              type="text"
              value={form.payment_reason}
              onChange={(e) =>
                setForm({ ...form, payment_reason: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="BBECO 2026"
            />
          </div>
        </div>

        {/* Conditional payment info */}
        {form.payment_method === "paypal" && (
          <div className="p-3 border border-blue-200 bg-blue-50 rounded-md text-sm">
            <p className="font-medium text-blue-700">Pay with PayPal:</p>
            <p>Use either of the following PayPal accounts:</p>
            <ul className="mt-2 text-blue-800">
              <li>📧 hamuza@gmail.com</li>
              <li>📧 bbeco@gmail.com</li>
            </ul>
          </div>
        )}

        {form.payment_method === "mobile" && (
          <div className="p-3 border border-green-200 bg-green-50 rounded-md text-sm">
            <p className="font-medium text-green-700">Mobile Money (Uganda)</p>
            <p>
              Send payment to <strong>+256 757 595578</strong> (Nsereko Justine)
            </p>
            <input
              type="tel"
              placeholder="Your Mobile Money Number"
              value={form.mobile_number}
              onChange={(e) =>
                setForm({ ...form, mobile_number: e.target.value })
              }
              className="w-full mt-2 border border-gray-300 rounded-lg p-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        )}

        {form.payment_method === "manual" && (
          <div className="p-3 border border-gray-300 bg-gray-50 rounded-md text-sm">
            <p className="font-medium text-gray-800">Bank Transfer Details:</p>
            <p>
              Bank: ABN AMRO Bank N.V. <br />
              Account Name: HK NDUGGA <br />
              IBAN: NL13 ABNA 0506 4173 44 <br />
              OR get a TIKKIE from HAMZA +31636556030 <br />
              Use payment reason: <strong>{form.payment_reason}</strong>
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold shadow-md transition"
        >
          {loading ? "Submitting..." : "Register"}
        </button>

        {/* Disclaimer */}
        <p className="text-xs text-center text-gray-500 italic mt-3">
          ⚠️ This form is for registration purposes only. It is not a payment
          portal. Please use the payment details provided above to complete your
          registration.
        </p>
      </form>

      {/* Results */}
      {result && result.success && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md text-center text-sm">
          ✅ Registration Successful! <br />
          Reg No: <strong>{result.reg_no}</strong>
          {result.file && (
            <div>
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
        </div>
      )}

      {result && result.error && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-md text-center text-sm">
          ❌ {result.error}
        </div>
      )}
    </div>
  );
}
