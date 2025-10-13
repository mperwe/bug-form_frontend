import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import EventDescription from "./components/EventDescription";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
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
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto mt-10 px-4 space-y-12">
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

        {/* Divider */}
        <div className="flex items-center justify-center">
          <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Admin Dashboard */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Admin Dashboard
          </h2>
          <AdminDashboard />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-16 py-6 border-t">
        © {new Date().getFullYear()} Buganda Convention, Berlin. All rights reserved.
      </footer>
    </main>
  );
}
