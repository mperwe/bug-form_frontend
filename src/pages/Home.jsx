import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Nabvar.jsx";
import Footer from "../components/Footer.jsx";
import EventDescription from "../components/EventDescription.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#1B2A49] text-white pt-24 pb-12 px-4 text-center relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">
            BBECO Berlin Chapter
          </h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto opacity-90 leading-relaxed">
            Join us for a cultural celebration and networking event bringing together the Buganda community in the heart of Europe.
          </p>

          <Link
            to="/register"
            className="mt-4 inline-block px-5 py-2 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Main Section */}
      <main className="bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Prime Minister Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white max-w-lg md:max-w-2xl">
              <img
                src="/bbeco.jpg"
                alt="Prime Minister of Buganda"
                className="w-full h-auto object-cover"
              />
              <p className="text-center py-3 text-base md:text-lg font-semibold text-gray-800">
                Katikkiro of Buganda – The Rt. Hon. Charles Peter Mayiga
              </p>
            </div>
          </div>

          {/* Event Description */}
          <div className="space-y-6">
            <EventDescription />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
