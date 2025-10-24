import React from "react";
import Navbar from "../components/Nabvar.jsx";
import Footer from "../components/Footer.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";

export default function Register() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans flex justify-center items-start pt-28 px-4 md:px-10 bg-[#1B2A49] relative">
        {/* Registration Form Section */}
        <div className="w-full max-w-3xl relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white tracking-wide drop-shadow-lg">
            Register for the Event
          </h1>

          <div className="backdrop-blur-lg bg-white/95 rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-10 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-3xl">
            <RegistrationForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
