import React from "react";
import RegistrationForm from "../components/RegistrationForm.jsx";

export default function Register() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex justify-center items-start p-6">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Register for the Convention</h1>
        <RegistrationForm />
      </div>
    </main>
  );
}
