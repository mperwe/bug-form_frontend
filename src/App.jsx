import React, { useState, useEffect } from "react";
import RegistrationForm from "./components/RegistrationForm";
import EventDescription from "./components/EventDescription";
import AdminDashboard from "./components/AdminDashboard";
import FlyerCard from "./components/FlyerCard";
import AdminLogin from "./components/AdminLogin"; // you need to create this component
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  // --- Admin login state ---
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') || '');

  function handleLogin(token) {
    setAdminToken(token);
    localStorage.setItem('adminToken', token);
  }

  // --- Public total registered count ---
  const [totalRegistered, setTotalRegistered] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/admin/stats`)
      .then(res => res.json())
      .then(data => setTotalRegistered(data.count))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-16 px-6 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Buganda Convention — Berlin 2025
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Join us for a cultural celebration and networking event bringing
          together the Buganda community in the heart of Europe.
        </p>
        <p className="mt-4 text-yellow-200 font-semibold">
          Total Registered: {totalRegistered}
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Flyer */}
        <div className="lg:col-span-3 hidden lg:block">
          <FlyerCard
            title="Event Flyer"
            content="Download and share our official event flyer!"
            imageSrc="/images/flyer1.jpg"
          />
        </div>

        {/* Center Content */}
        <div className="lg:col-span-6 space-y-12">
          {/* Event Info */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <EventDescription />
          </div>

          {/* Registration Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Register for the Convention
            </h2>
            <RegistrationForm />
          </div>

          {/* Admin Section */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Admin Panel
            </h2>

            {!adminToken ? (
              <AdminLogin onLogin={handleLogin} />
            ) : (
              <AdminDashboard token={adminToken} />
            )}
          </div>
        </div>

        {/* Right Flyer */}
        <div className="lg:col-span-3 hidden lg:block">
          <FlyerCard
            title="Message from the Organizers"
            content="Stay tuned for our lineup of keynote speakers and entertainment!"
            imageSrc="/images/flyer2.jpeg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact Us</h4>
            <p>Email: <a href="mailto:info@bugandaconvention.org" className="text-indigo-600">info@bugandaconvention.org</a></p>
            <p>Phone: +49 123 456 7890</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 text-lg">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-indigo-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-indigo-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-indigo-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-indigo-600">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} Buganda Convention, Berlin. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
