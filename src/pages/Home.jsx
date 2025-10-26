import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Nabvar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
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
            className="mt-4 inline-block px-6 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Main Section */}
      <main className="bg-gray-50 py-10 px-4 md:px-12 flex-grow">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">

          {/* Left Panel: Event */}
          <div className="flex-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-5 md:p-6 shadow-lg min-h-[300px] transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-center md:text-left text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Ttabamiruka 2026
              </h2>
              <p className="text-sm md:text-base mb-4 opacity-90">
                Preserving Heritage & Navigating Modernity in the diaspora
              </p>

              {/* Event Details */}
              <ul className="space-y-2 text-sm md:text-base mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-lg">📅</span>
                  <div><strong>Date:</strong> May 22–24, 2026</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">📍</span>
                  <div>
                    <strong>Location:</strong> Gloria Events Center
                    <p className="text-gray-300 text-xs mt-1">
                      Markgrafenstraße 67, 10969 Berlin
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🎶</span>
                  <div>
                    <strong>Activities:</strong> Cultural Workshops, Networking, Live Entertainment
                  </div>
                </li>
              </ul>

              {/* Ticket Categories */}
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2 underline">Ticket Categories</h3>
                <ul className="space-y-1 text-sm md:text-base">
                  <li>💶 Early Bird: €100 (Oct – Dec)</li>
                  <li>💶 Regular: €120 (Jan – Mar)</li>
                  <li>💶 Late: €150 (Apr onwards)</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 underline">Contacts</h3>
                <ul className="space-y-1 text-sm md:text-base">
                  <li>Linda S – Tel: <span className="text-yellow-400">+31 6 85740954</span> (Esaaza Rhinlands)</li>
                  <li>Frank K – Tel: <span className="text-yellow-400">+49 1523 5867655</span> (Berlin)</li>
                  <li>Samuel S – Tel: <span className="text-yellow-400">+49 1520 8514008</span> (Munchen)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Panel: Payment Methods */}
          <div className="flex-1 bg-gray-800 rounded-2xl p-5 md:p-6 shadow-lg min-h-[300px] transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Payment Methods
              </h2>
              <p className="text-sm md:text-base mb-4 opacity-90">
                Complete your registration by following these methods:
              </p>
              <ul className="space-y-4 text-sm md:text-base">
                {/* Bank Transfer */}
                <li className="flex items-start gap-3">
                  <span className="text-xl">💳</span>
                  <div>
                    <strong className="underline">Bank Transfer:</strong>
                    <p className="text-gray-300 text-xs md:text-sm mt-1 leading-snug">
                      <strong>Bank:</strong> ABN AMRO Bank N.V.<br />
                      <strong>Account Name:</strong> HK NDUGGA<br />
                      <strong>IBAN:</strong> NL13 ABNA 0506 4173 44<br />
                      Or get a <strong>TIKKIE</strong> from HAMZA: <span className="text-yellow-400">+31636556030</span><br />
                      <strong>Payment Reason:</strong> BBECO 2026
                    </p>
                  </div>
                </li>

                {/* PayPal */}
                <li className="flex items-start gap-3">
                  <span className="text-xl">📱</span>
                  <div>
                    <strong className="underline">PayPal:</strong>
                    <p className="text-gray-300 text-xs md:text-sm mt-1 leading-snug">
                      Send payment to one of these accounts:<br />
                      <span className="text-yellow-400">hamuza@gmail.com</span><br />
                      <span className="text-yellow-400">bbeco@gmail.com</span>
                    </p>
                  </div>
                </li>

                {/* Mobile Money */}
                <li className="flex items-start gap-3">
                  <span className="text-xl">📲</span>
                  <div>
                    <strong className="underline">Mobile Money (Uganda):</strong>
                    <p className="text-gray-300 text-xs md:text-sm mt-1 leading-snug">
                      Send payment to: <span className="text-yellow-400">+256 757 595578 (Nsereko Justine)</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
