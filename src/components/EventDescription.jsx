import React from "react";

export default function EventSection() {
  return (
    <section className="relative text-white w-full max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Left Panel: Event Description */}
        <div className="flex-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg min-h-[350px]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ttabamiruka 2026
            </h2>
            <p className="text-sm md:text-base mb-4 opacity-90">
              Preserving Heritage & Navigating Modernity in the diaspora
            </p>

            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-xl">📅</span>
                <div>
                  <strong>Date:</strong> May 22–24, 2026
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <strong>Location:</strong> Gloria Events Center
                  <p className="text-gray-300 text-xs mt-1">
                    Markgrafenstraße 67, 10969 Berlin
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🎶</span>
                <div>
                  <strong>Activities:</strong> Cultural Workshops, Networking, Live Entertainment
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Panel: Payment Methods */}
        <div className="flex-1 bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg min-h-[350px]">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left">
            Payment Methods
          </h2>
          <p className="text-sm md:text-base mb-4 opacity-90">
            Follow the instructions below to complete registration:
          </p>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-xl">💳</span>
              <div>
                <strong>Bank Transfer:</strong>
                <p className="text-gray-300 text-xs mt-1">
                  Account: 123-456-7890 <br />
                  Bank: Example Bank <br />
                  Reference: Your Registration Number
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl">📱</span>
              <div>
                <strong>Mobile Payment:</strong>
                <p className="text-gray-300 text-xs mt-1">
                  Pay via MobilePay or PayPal using your registration number.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl">📝</span>
              <div>
                <strong>Manual Payment:</strong>
                <p className="text-gray-300 text-xs mt-1">
                  Visit our registration desk onsite and pay in cash or card.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
