import React from "react";
import Navbar from "../components/Nabvar.jsx";
import Footer from "../components/Footer.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";

export default function Register() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex justify-center items-start p-6">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            
          </h1>
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
