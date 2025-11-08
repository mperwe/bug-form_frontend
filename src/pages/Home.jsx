import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";

export default function Home() {
  const [filter, setFilter] = useState("All");

  // 🎯 Countdown setup
  const eventDate = new Date("May 22, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

      {/* Hero Section with Timer */}
      <section className="relative bg-gradient-to-b from-[#1B2A49] via-[#1B2A49]/95 to-[#10182B] text-white pt-24 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/berlin1.jpg')] bg-cover bg-center"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight uppercase">
            Buganda Bumu European Convention
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400 mb-4 uppercase">
            Hosted by Berlin Chapter
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
            Join us for a grand cultural celebration uniting the Buganda community across Europe — fostering heritage, networking, and development in the heart of Berlin.
          </p>

          {/* 🌟 Countdown Timer */}
          <div className="mt-8 flex justify-center gap-6 sm:gap-10">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((unit, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 w-20 sm:w-24 shadow-lg border border-yellow-400/40 animate-pulse"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-yellow-400 drop-shadow-md">
                  {unit.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-200 uppercase">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="https://forms.gle/PaD39jWRFeZJFxFLA"
            target="_blank"
            className="mt-8 inline-block px-8 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Convention Info, Tickets, Payment, Hotels, and Footer */}
      <main className="flex-grow py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Convention Info */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            <div className="bg-gray-900 rounded-3xl p-6 md:p-8 shadow-2xl text-white transform hover:scale-102 transition-transform duration-300">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-yellow-400 drop-shadow">
                Convention 2026
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90 italic">
                Theme: “Preserving Heritage & Navigating Modernity in the Diaspora”
              </p>
              <ul className="space-y-2 text-sm sm:text-base md:text-lg mb-6">
                <li><strong>Date:</strong> May 22–24, 2026</li>
                <li>
                  <strong>Location:</strong> Gloria Events Center
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">Markgrafenstraße 67, 10969 Berlin</p>
                </li>
                <li><strong>Activities:</strong> Cultural Workshops, Networking, Live Entertainment</li>
              </ul>
            </div>

            {/* Tickets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { title: "Early Bird", price: "€100", period: "Nov – Dec" },
                { title: "Regular", price: "€120", period: "Jan – Feb" },
                { title: "Late", price: "€150", period: "March onwards" },
                { title: "Ugandan Delegates", price: "€350", period: "" },
              ].map((ticket, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-white"
                >
                  <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-1">{ticket.title}</h3>
                  <p className="text-base md:text-lg font-semibold mb-1">{ticket.price}</p>
                  <p className="text-xs md:text-sm text-gray-300">{ticket.period}</p>
                </div>
              ))}
              <div className="bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-white flex flex-col justify-center items-center text-center">
                <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-1">Children</h3>
                <p className="text-base md:text-lg font-semibold mb-1">Below 12 years – Free</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900 rounded-3xl p-6 md:p-8 shadow-2xl text-white transform hover:scale-102 transition-transform duration-300">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 underline text-yellow-400 drop-shadow">
                Contact Information
              </h3>
              <ul className="space-y-2 text-sm sm:text-base md:text-lg">
                <li>📞 Linda Sekayita – <span className="text-yellow-400">+31 6 85740954</span> (Essaza Rhinelands)</li>
                <li>📞 Frank Kyambadde – <span className="text-yellow-400">+49 1523 5867655</span> (Berlin)</li>
                <li>📞 Samuel Muwonge – <span className="text-yellow-400">+49 1520 8514008</span> (Munich)</li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex-1 w-full bg-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl text-white transform hover:scale-102 transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-yellow-400 drop-shadow">
              Payment Methods
            </h2>
            <p className="text-sm sm:text-base md:text-base text-gray-300 mb-4">
              Please choose one of the following payment options.
              <br />
              <strong className="text-yellow-400">Payment Reason: BBECO BERLIN 2026</strong>
            </p>
            <ul className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-base">
              <li className="bg-gray-700 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                🏦 <strong>Bank Transfer</strong>
                <div className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <p><strong>Account Details :</strong><br />Bank: Rabobank<br />Account Name: M.VORSTENBOSCH<br />STICHTING BUGANDA RHINELANDS<br />IBAN: NL76 RABO 0162 8971 89</p>
                </div>
              </li>
              <li className="bg-gray-700 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                💳 <strong>Tikkie Option</strong><br />
                <span className="text-yellow-400 text-xs sm:text-sm">Request a Tikkie from Margret: +31 681 941613</span>
              </li>
              <li className="bg-gray-700 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                📲 <strong>Mobile Money (Uganda)</strong><br />
                <span className="text-yellow-400 text-xs sm:text-sm">+256 757 595578 (Nsereko Justine)</span>
                <p className="mt-2 text-xs sm:text-sm text-gray-300">
                  ✅ After payment, please send confirmation on WhatsApp: <strong className="text-yellow-400">+31 685 740954</strong> (Linda Sekayita)
                </p>
                <div className="mt-4">
                  <a
                    href="https://forms.gle/PaD39jWRFeZJFxFLA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300"
                  >
                    Register Now
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Hotels Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
            Nearby Hotels
          </h2>
          <div className="flex justify-center mb-6 space-x-3">
            {["All", "Luxury", "Mid-range", "Budget"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold border transition-all ${
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
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg sm:text-xl font-bold text-indigo-900 mb-1">
                  {place.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{place.address}</p>
                <p className="text-gray-800 text-sm font-medium mb-2">
                  🏷️ {place.type} — 🚶 {place.distance}
                </p>
                <div className="flex justify-between text-sm">
                  <a
                    href={place.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-600 font-semibold"
                  >
                    Website ↗
                  </a>
                  <a
                    href={place.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 font-semibold"
                  >
                    Directions ↗
                  </a>
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
