import React from "react";

export default function EventDescription() {
  return (
    <section
      className="relative text-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-200
                 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-blue-900/40 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Ttabamiruka 2026
        </h2>

        <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
          Preserving Heritage & Navigating Modernity in the diaspora.”
        </p>

        <ul className="space-y-6 text-left text-lg md:text-xl font-medium">
          <li className="flex items-start gap-4">
            <span className="text-3xl">📅</span>
            <div>
              <strong>Date:</strong> May 22nd – 24th, 2026
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-3xl">📍</span>
            <div>
              <strong>Location:</strong> Gloria Events Center  
              <p className="text-gray-300 text-base mt-1">
                Markgrafenstraße 67, 10969 Berlin
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-3xl">🎶</span>
            <div>
              <strong>Activities:</strong> Cultural Workshops, Networking Sessions, Live Entertainment
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
