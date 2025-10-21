import React from "react";

export default function EventDescription() {
  return (
    <section
      className="relative text-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-200
                 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-gray-900 to-gray-800"
    >
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-blue bg-opacity-40 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
          Ttabamiruka - Berlin 2026
        </h2>

        <p className="text-center text-lg md:text-xl mb-8 opacity-90">
          Celebrate culture, network with peers, and enjoy a weekend of unforgettable experiences.
        </p>

        <ul className="space-y-4 text-white text-lg md:text-xl list-none">
          <li className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl">📅</span>
            <span><strong>Date:</strong> May 22nd - 24th, 2026</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl">📍</span>
            <span><strong>Location:</strong> Gloria Events Center</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl">🎶</span>
            <span><strong>Activities:</strong> Cultural workshops, Networking, Entertainment</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
