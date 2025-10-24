import React from "react";
import Navbar from "../components/Nabvar.jsx";
import Footer from "../components/Footer.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";

export default function Register() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen text-gray-800 font-sans flex justify-center items-center p-10 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bunganda.png')" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Registration Form Section */}
        <div className="w-full max-w-3xl relative z-10">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-white tracking-wide drop-shadow-lg">
            Online Registration
          </h1>

          <div className="backdrop-blur-lg bg-white/95 rounded-3xl shadow-2xl border border-gray-200 p-10 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-3xl">
            <RegistrationForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
