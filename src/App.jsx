import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import EventDescription from './components/EventDescription';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Buganda Convention — Berlin 2025</h1>
      <EventDescription />
      <RegistrationForm />
      <hr />
      <AdminDashboard />
    </div>
  );
}
