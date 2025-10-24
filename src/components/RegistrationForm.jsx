import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullname: "",
    passport: "",
    email: "",
    phone: "",
    ticket_type: "General",
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
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200 p-8 transition-all hover:shadow-3xl">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center tracking-tight">
        Event Registration Form
      </h2>

      <form onSubmit={submit} className="space-y-4 text-[15px]">
        {/* Full Name */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={form.fullname}
            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Passport / ID */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Passport No<span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={form.passport}
            onChange={(e) => setForm({ ...form, passport: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Passport / ID Number"
          />
        </div>

        {/* Email, Phone, Amount in one line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="+49 123 456789"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Amount (€)
            </label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Amount to be paid"
            />
          </div>
        </div>

        {/* Ticket Type & Payment Method */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Ticket Type
            </label>
            <select
              value={form.ticket_type}
              onChange={(e) => setForm({ ...form, ticket_type: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>Early Bird</option>
              <option>Regular</option>
              <option>Late</option>
            </select>

            <div className="mt-2 text-sm text-gray-800 font-semibold bg-gray-50 rounded-lg p-2">
              💶 <strong>Early Bird:</strong> €100 (Oct – Dec) <br />
              💶 <strong>Regular:</strong> €120 (Jan – Mar) <br />
              💶 <strong>Late:</strong> €150 (Apr onwards)
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              value={form.payment_method}
              onChange={(e) =>
                setForm({ ...form, payment_method: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="manual">Bank Transfer / Cash</option>
              <option value="paypal">PayPal</option>
              <option value="mobile">Mobile Money (Uganda)</option>
            </select>
          </div>
        </div>

        {/* Payment Reason */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Payment Reason
          </label>
          <input
            type="text"
            placeholder="BBECO 2026"
            value={form.payment_reason}
            onChange={(e) =>
              setForm({ ...form, payment_reason: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <p className="text-gray-500 text-xs mt-1">
            Include the reason above to help us track your payment.
          </p>
        </div>

        {/* Payment Instructions */}
        {form.payment_method === "paypal" && (
          <div className="mt-3 p-3 border border-blue-200 bg-blue-50 rounded-lg">
            <p className="font-medium text-blue-700 mb-1">Pay with PayPal</p>
            <p className="text-xs text-blue-800 mb-2">
              Click one of the accounts below and enter the amount manually in PayPal.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.paypal.com/paypalme/YourFirstAccount"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 text-sm"
              >
                PayPal Account 1
              </a>
              <a
                href="https://www.paypal.com/paypalme/YourSecondAccount"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 text-sm"
              >
                PayPal Account 2
              </a>
            </div>
          </div>
        )}

        {form.payment_method === "mobile" && (
          <div className="mt-3 p-3 border border-green-200 bg-green-50 rounded-lg">
            <p className="font-medium text-green-700 mb-1">
              Mobile Money Payment (Uganda)
            </p>
            <p className="text-xs text-green-800 mb-2">
              Send your payment to <strong> +256 757 595578</strong> in names of Nsereko Justine, Then enter your Mobile Money number below.
            </p>
            <input
              type="tel"
              placeholder="Your Mobile Money Number"
              value={form.mobile_number}
              onChange={(e) =>
                setForm({ ...form, mobile_number: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
        )}

        {form.payment_method === "manual" && (
          <div className="mt-3 p-3 border border-gray-300 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-800 mb-1">
              Bank Transfer Details:
            </p>
            <p className="text-xs text-gray-700">
              Bank: ABN AMRO Bank N.V. <br />
              Account Name: HK NDUGGA <br />
              IBAN: NL13 ABNA 0506 4173 44<br />
              OR get a TIKKIE from HAMZA +31636556030 <br />
              Use payment reason: <strong>{form.payment_reason}</strong>
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 font-semibold text-sm shadow-md transition"
        >
          {loading ? "Submitting..." : "Register"}
        </button>
      </form>

      {/* Success Message */}
      {result && result.success && (
        <div className="mt-5 p-3 bg-green-100 text-green-800 rounded-lg text-center text-sm">
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
        <div className="mt-5 p-3 bg-red-100 text-red-800 rounded-lg text-center text-sm">
          ❌ {result.error}
        </div>
      )}
    </div>
  );
}
