import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/admin/count')
      .then(res => res.json())
      .then(data => setCount(data.total));
  }, []);

  async function loadList() {
    const res = await fetch('http://localhost:4000/api/admin/list');
    const data = await res.json();
    setList(data);
  }

  return (
    <div>
      <h3>Admin Panel</h3>
      <p>Total Registered: {count}</p>
      <button onClick={loadList}>Load Latest</button>
      {list.length > 0 && (
        <table border='1'>
          <thead>
            <tr><th>Reg No</th><th>Name</th><th>Email</th></tr>
          </thead>
          <tbody>
            {list.map(r => <tr key={r.id}><td>{r.reg_no}</td><td>{r.fullname}</td><td>{r.email}</td></tr>)}
          </tbody>
        </table>
      )}
    </div>
  );
}
