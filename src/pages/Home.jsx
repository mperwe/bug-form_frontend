import React from "react";
import { Link } from "react-router-dom";
import EventDescription from "../components/EventDescription.jsx";
import FlyerCard from "../components/FlyerCard.jsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <section className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-16 px-6 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">BBECO BERLIN CHAPTER</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Join us for a cultural celebration and networking event bringing together the Buganda community in the heart of Europe.
        </p>

        <Link
          to="/register"
          className="mt-6 inline-block px-8 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
        >
          Register Now
        </Link>
      </section>

      <section className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 hidden lg:block">
          <FlyerCard
            title="Event Flyer"
            content="Download and share our official event flyer!"
            imageSrc="/assets/flyer1.jpg"
          />
        </div>

        <div className="lg:col-span-6 space-y-12">
          <EventDescription />
        </div>

        <div className="lg:col-span-3 hidden lg:block">
          <FlyerCard
            title="Message from Organizers"
            content="Stay tuned for our lineup of keynote speakers and entertainment!"
            imageSrc="/assets/flyer1.jpg"
          />
        </div>
      </section>
    </main>
  );
}
