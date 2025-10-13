import React from "react";

export default function EventDescription() {
  return (
    <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">
        About the Buganda Convention
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <span className="font-semibold text-indigo-600">Buganda Convention</span> brings
        together the Buganda community in Berlin for cultural exchange, music,
        and networking. Join us for an unforgettable experience connecting with
        your heritage and peers in a vibrant European setting.
      </p>
      <ul className="text-gray-600 list-disc list-inside space-y-1">
        <li>📅 <strong>Date:</strong> November 22, 2025</li>
        <li>📍 <strong>Location:</strong> Berlin, Germany</li>
        <li>🎶 <strong>Activities:</strong> Music, cultural workshops, networking</li>
      </ul>
    </section>
  );
}
