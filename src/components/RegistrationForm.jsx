import React, { useState } from 'react';

export default function RegistrationForm() {
  const [form, setForm] = useState({ fullname: '', email: '', phone: '', ticket_type: 'General', payment_method: 'manual', amount: 10 });
  const [result, setResult] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input required placeholder='Full Name' value={form.fullname} onChange={e => setForm({ ...form, fullname: e.target.value })} /><br />
        <input required placeholder='Email' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /><br />
        <input placeholder='Phone' value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /><br />
        <select value={form.ticket_type} onChange={e => setForm({ ...form, ticket_type: e.target.value })}>
          <option>General</option>
          <option>VIP</option>
          <option>Student</option>
        </select><br />
        <select value={form.payment_method} onChange={e => setForm({ ...form, payment_method: e.target.value })}>
          <option value='manual'>Bank transfer / Cash</option>
          <option value='paypal'>PayPal</option>
        </select><br />
        <input type='number' value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} /><br />
        <button type='submit'>Submit</button>
      </form>

      {result && result.success && (
        <div>
          <p>Registration successful!</p>
          <p>Reg No: {result.reg_no}</p>
          <a href={`http://localhost:4000${result.file}`} target='_blank' rel='noreferrer'>Download Receipt (PDF)</a>
        </div>
      )}
    </div>
  );
}
