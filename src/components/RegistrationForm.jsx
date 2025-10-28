import React, { useState } from "react";
import Layout from "./Layout";
import axios from "axios";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullname: "",
    passport: "",
    ticket_type: "",
    amount: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/register", form);
      setMessage("Registration successful! A confirmation PDF has been generated.");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Register for Buganda Convention 2025
        </h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md space-y-4">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />
          <input
            type="text"
            name="passport"
            placeholder="Passport Number (optional)"
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
          <select
            name="ticket_type"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          >
            <option value="">Select Ticket Type</option>
            <option value="Standard">Standard - €50</option>
            <option value="VIP">VIP - €100</option>
            <option value="Sponsor">Sponsor - €250</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Submit Registration
          </button>
        </form>

        {message && (
          <p className="text-center mt-6 text-gray-700 font-medium">{message}</p>
        )}
      </section>
    </Layout>
  );
}
