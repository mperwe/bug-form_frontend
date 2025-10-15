import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import EventDescription from "../components/EventDescription";
import FlyerCard from "../components/FlyerCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold">Buganda Convention — Berlin 2025</h1>
        <p className="mt-2 text-gray-700">Join us for the cultural celebration in Europe.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        <div className="lg:col-span-3 hidden lg:block">
          <FlyerCard
            title="Event Flyer"
            content="Download our official event flyer!"
            imageSrc="/images/flyer1.jpg"
          />
        </div>

        <div className="lg:col-span-6 space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <EventDescription />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <RegistrationForm />
          </div>
        </div>

        <div className="lg:col-span-3 hidden lg:block">
          <FlyerCard
            title="Message from Organizers"
            content="Stay tuned for keynote speakers and entertainment!"
            imageSrc="/images/flyer2.jpeg"
          />
        </div>
      </div>
    </main>
  );
}
