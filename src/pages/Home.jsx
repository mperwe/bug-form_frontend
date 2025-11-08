import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";

export default function Home() {
  const [filter, setFilter] = useState("All");

  // Countdown setup
  const eventDate = new Date("May 22, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const places = [
    { name: "Mondrian Suites Berlin am Checkpoint Charlie", address: "Markgrafenstraße 16/16a, 10969 Berlin", url: "https://www.mondriansuites.com/", directions: "https://www.google.com/maps/dir//Mondrian+Suites+Berlin+am+Checkpoint+Charlie,+Markgrafenstraße+16%2F16a,+10969+Berlin/", type: "Luxury", distance: "3 min walk" },
    { name: "Adina Apartment Hotel Berlin Checkpoint Charlie", address: "Krausenstraße 35-36, 10117 Berlin", url: "https://www.adinahotels.com/de/apartments/berlin-checkpoint-charlie/", directions: "https://www.google.com/maps/dir//Adina+Apartment+Hotel+Berlin+Checkpoint+Charlie,+Krausenstraße+35-36,+10117+Berlin/", type: "Luxury", distance: "10 min walk" },
    { name: "Acama Hotel & Hostel Kreuzberg", address: "Tempelhofer Ufer 8/9, 10963 Berlin", url: "https://www.booking.com/hotel/de/acama-hotel-hostel-kreuzberg.html", directions: "https://www.google.com/maps/dir//acama+Hotel+%26+Hostel+Kreuzberg,+Tempelhofer+Ufer+8%2F9,+10963+Berlin/", type: "Budget", distance: "12 min walk" },
    { name: "36 Rooms Hostel Berlin Kreuzberg", address: "Spreewaldplatz 8, 10999 Berlin", url: "https://www.booking.com/hotel/de/36-rooms-berlin-kreuzberg.html", directions: "https://www.google.com/maps/dir//36+Rooms+Hostel+Berlin,+Spreewaldplatz+8,+10999+Berlin/", type: "Budget", distance: "15 min walk" },
    { name: "Hilton Berlin", address: "Mohrenstraße 30, 10117 Berlin", url: "https://www.hilton.com/en/hotels/berhitw-hilton-berlin/", directions: "https://www.google.com/maps/dir//Hilton+Berlin,+Mohrenstraße+30,+10117+Berlin/", type: "Luxury", distance: "15 min walk" },
    { name: "Select Hotel Berlin Checkpoint Charlie", address: "Hedemannstraße 11-12, 10969 Berlin", url: "https://www.select-hotels.com/en/hotel/select-hotel-berlin-checkpoint-charlie/", directions: "https://www.google.com/maps/dir//Select+Hotel+Berlin+Checkpoint+Charlie,+Hedemannstraße+11-12,+10969+Berlin/", type: "Mid-range", distance: "4 min walk" },
    { name: "NH Collection Berlin Mitte am Checkpoint Charlie", address: "Leipziger Str. 106-111, 10117 Berlin", url: "https://www.nh-hotels.com/hotel/nh-collection-berlin-mitte-checkpoint-charlie", directions: "https://www.google.com/maps/dir//NH+Collection+Berlin+Mitte+am+Checkpoint+Charlie,+Leipziger+Str.+106-111,+10117+Berlin/", type: "Luxury", distance: "6 min walk" },
    { name: "Hotel Gat Point Charlie", address: "Mauerstraße 81–82, 10117 Berlin", url: "https://www.hotelgatpointcharlie.com/", directions: "https://www.google.com/maps/dir//Hotel+Gat+Point+Charlie,+Mauerstraße+81–82,+10117+Berlin/", type: "Mid-range", distance: "5 min walk" },
    { name: "Novotel Suites Berlin City Potsdamer Platz", address: "Anhalter Str. 2, 10963 Berlin", url: "https://all.accor.com/hotel/3745/index.en.shtml", directions: "https://www.google.com/maps/dir//Novotel+Suites+Berlin+City+Potsdamer+Platz,+Anhalter+Str.+2,+10963+Berlin/", type: "Mid-range", distance: "9 min walk" },
    { name: "Ibis Berlin City Potsdamer Platz", address: "Anhalter Str. 4, 10963 Berlin", url: "https://all.accor.com/hotel/3109/index.en.shtml", directions: "https://www.google.com/maps/dir//ibis+Berlin+City+Potsdamer+Platz,+Anhalter+Str.+4,+10963+Berlin/", type: "Budget", distance: "8 min walk" },
    { name: "Relexa Hotel Stuttgarter Hof Berlin", address: "Anhalter Str. 8-9, 10963 Berlin", url: "https://www.relexa-hotel-berlin.de/", directions: "https://www.google.com/maps/dir//relexa+hotel+Stuttgarter+Hof,+Anhalter+Str.+8-9,+10963+Berlin/", type: "Mid-range", distance: "9 min walk" },
    { name: "Mövenpick Hotel Berlin", address: "Schöneberger Str. 3, 10963 Berlin", url: "https://www.movenpick.com/", directions: "https://www.google.com/maps/dir//M%C3%B6venpick+Hotel+Berlin,+Sch%C3%B6neberger+Str.+3,+10963+Berlin/", type: "Luxury", distance: "10 min walk" },
    { name: "Check In Hostel Berlin", address: "Markgrafenstraße 68, 10969 Berlin", url: "https://www.booking.com/hotel/de/check-in-hostel-berlin.html", directions: "https://www.google.com/maps/dir//Check+In+Hostel+Berlin,+Markgrafenstra%C3%9Fe+68,+10969+Berlin/", type: "Budget", distance: "2 min walk" },
    { name: "MEININGER Hotel Berlin Mitte", address: "Oranienburger Str. 67/68, 10117 Berlin", url: "https://www.meininger-hotels.com/en/hotels/berlin/mitte-humboldthaus/", directions: "https://www.google.com/maps/dir//MEININGER+Hotel+Berlin+Mitte,+Oranienburger+Str.+67%2F68,+10117+Berlin/", type: "Budget", distance: "15 min walk" },
    { name: "TITANIC Chaussee Berlin", address: "Chausseestraße 30, 10115 Berlin", url: "https://www.titanic.com.tr/titanic-chaussee-berlin", directions: "https://www.google.com/maps/dir//TITANIC+Chaussee+Berlin,+Chausseestraße+30,+10115+Berlin/", type: "Luxury", distance: "10 min walk" }
  ];

  const filteredPlaces = filter === "All" ? places : places.filter((p) => p.type === filter);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1B2A49] via-[#1B2A49]/95 to-[#10182B] text-white pt-14 pb-8 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/berlin1.jpg')] bg-cover bg-center"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-1 uppercase">Buganda Bumu European Convention</h1>
          <h2 className="text-md md:text-xl font-semibold text-yellow-400 mb-2 uppercase">Hosted by Berlin Chapter</h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto opacity-90 leading-relaxed">
            Join us for a grand celebration uniting the Buganda community across Europe — fostering heritage, networking, and development in the heart of Berlin.
          </p>

          {/* Countdown */}
          <div className="mt-5 flex justify-center gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((unit, i) => (
              <div key={i} className="flex flex-col items-center bg-white/10 rounded-xl p-3 w-16 shadow border border-yellow-400/40">
                <span className="text-lg font-extrabold text-yellow-400">{unit.value}</span>
                <span className="text-xs text-gray-200 uppercase">{unit.label}</span>
              </div>
            ))}
          </div>

          <Link
            to="https://forms.gle/PaD39jWRFeZJFxFLA"
            target="_blank"
            className="mt-5 inline-block px-5 py-2 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-yellow-300 transition"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <main className="flex-grow py-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Convention Info */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-xl text-white transform transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/30">
            <h2 className="text-3xl font-bold mb-3 text-yellow-400">Convention 2026</h2>
            <p className="text-lg mb-4 italic text-gray-200">
              Theme: “Preserving Heritage & Navigating Modernity in the Diaspora”
            </p>
            <ul className="text-base space-y-2">
              <li><strong>Date:</strong> May 22–24, 2026</li>
              <li>
                <strong>Location:</strong> Gloria Events Center
                <p className="text-gray-300 text-sm">Markgrafenstraße 67, 10969 Berlin</p>
              </li>
              <li><strong>Activities:</strong> Cultural Workshops, Networking, Entertainment</li>
            </ul>
          </div>

          {/* Tickets */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl text-white transform transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/30">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Tickets</h2>
            <div className="space-y-2">
              {[
                { title: "Early Bird", price: "€100" },
                { title: "Regular", price: "€120" },
                { title: "Late", price: "€150" },
                { title: "Ugandan Delegates", price: "€350" },
                { title: "Children", price: "Free (Below 12 years)" },
              ].map((ticket, i) => (
                <div key={i} className="bg-gray-700 rounded-lg px-3 py-2 flex justify-between items-center text-sm">
                  <span>{ticket.title}</span>
                  <span className="text-yellow-400 font-semibold">{ticket.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl text-white transform transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/30">
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Payment Methods</h2>
            <p className="text-xs text-gray-300 mb-2">
              <strong className="text-yellow-400">Payment Reason:</strong> BBECO BERLIN 2026
            </p>
            <ul className="space-y-3 text-sm">
              <li>🏦 <strong>Bank Transfer:</strong><br />
                <span className="text-gray-300 text-xs">
                  Rabobank – M.VORSTENBOSCH / STICHTING BUGANDA RHINELANDS<br />
                  IBAN: <strong>NL76 RABO 0162 8971 89</strong>
                </span>
              </li>
              <li>💳 <strong>Tikkie Option:</strong> <span className="text-yellow-400">+31 681 941613 (Margret)</span></li>
              <li>📲 <strong>Mobile Money:</strong> <span className="text-yellow-400">+256 757 595578 (Nsereko Justine)</span></li>
            </ul>
            <div className="mt-4 text-center">
              <a
                href="https://forms.gle/PaD39jWRFeZJFxFLA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-md hover:bg-yellow-300 transition"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="max-w-5xl mx-auto mt-8 bg-indigo-900 text-white rounded-xl py-3 px-4 text-center shadow-md">
          <h3 className="text-base font-semibold mb-1 text-yellow-400">Contact Information</h3>
          <p className="text-xs sm:text-sm">
            📞 Linda Sekayita – <span className="text-yellow-400">+31 6 85740954</span> |{" "}
            📞 Frank Kyambadde – <span className="text-yellow-400">+49 1523 5867655</span> |{" "}
            📞 Samuel Muwonge – <span className="text-yellow-400">+49 1520 8514008</span>
          </p>
        </div>

        {/* Hotels */}
        <div className="max-w-7xl mx-auto mt-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">Nearby Hotels</h2>
          <div className="flex justify-center mb-6 space-x-3">
            {["All", "Luxury", "Mid-range", "Budget"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  filter === type
                    ? "bg-yellow-400 text-indigo-900 border-yellow-400"
                    : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-yellow-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/30 transition"
              >
                <h3 className="text-lg font-bold text-indigo-900 mb-1">{place.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{place.address}</p>
                <p className="text-gray-800 text-sm mb-2">
                  🏷️ {place.type} — 🚶 {place.distance}
                </p>
                <div className="flex justify-between text-sm">
                  <a href={place.url} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-semibold hover:text-yellow-600">Website ↗</a>
                  <a href={place.directions} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-600">Directions ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
