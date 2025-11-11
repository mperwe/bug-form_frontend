import React, { useState, useEffect } from "react";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const eventDate = new Date("May 22, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      const distance = eventDate - now.getTime();
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

  const formatTime = (num) => num.toString().padStart(2, "0");
  const digitalTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const dateString = currentTime.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  // Nearby Hotels
  const hotels = [
    { name: "Titanic Chaussee Berlin", address: "Chausseestraße 30, 10115 Berlin", url: "https://www.titanic.com.tr/titanic-chaussee-berlin", directions: "https://www.google.com/maps/dir//Titanic+Chaussee+Berlin/", type: "Luxury", distance: "10 min walk" },
    { name: "Mondrian Suites Berlin", address: "Markgrafenstraße 16/16a, 10969 Berlin", url: "https://www.mondriansuites.com/", directions: "https://www.google.com/maps/dir//Mondrian+Suites+Berlin/", type: "Luxury", distance: "3 min walk" },
    { name: "Adina Apartment Hotel Berlin", address: "Krausenstraße 35-36, 10117 Berlin", url: "https://www.adinahotels.com/de/apartments/berlin-checkpoint-charlie/", directions: "https://www.google.com/maps/dir//Adina+Apartment+Hotel+Berlin/", type: "Luxury", distance: "10 min walk" },
    { name: "Hilton Berlin", address: "Mohrenstraße 30, 10117 Berlin", url: "https://www.hilton.com/en/hotels/berhitw-hilton-berlin/", directions: "https://www.google.com/maps/dir//Hilton+Berlin/", type: "Luxury", distance: "15 min walk" },
    { name: "NH Collection Berlin Mitte", address: "Leipziger Str. 106-111, 10117 Berlin", url: "https://www.nh-hotels.com/hotel/nh-collection-berlin-mitte-checkpoint-charlie", directions: "https://www.google.com/maps/dir//NH+Collection+Berlin+Mitte/", type: "Luxury", distance: "6 min walk" },
    { name: "Select Hotel Berlin Checkpoint Charlie", address: "Hedemannstraße 11-12, 10969 Berlin", url: "https://www.select-hotels.com/en/hotel/select-hotel-berlin-checkpoint-charlie/", directions: "https://www.google.com/maps/dir//Select+Hotel+Berlin+Checkpoint+Charlie/", type: "Mid-range", distance: "4 min walk" },
    { name: "Novotel Suites Berlin City", address: "Anhalter Str. 2, 10963 Berlin", url: "https://all.accor.com/hotel/3745/index.en.shtml", directions: "https://www.google.com/maps/dir//Novotel+Suites+Berlin+City+Potsdamer+Platz/", type: "Mid-range", distance: "9 min walk" },
    { name: "Mövenpick Hotel Berlin", address: "Schöneberger Str. 3, 10963 Berlin", url: "https://www.movenpick.com/", directions: "https://www.google.com/maps/dir//Mövenpick+Hotel+Berlin/", type: "Luxury", distance: "10 min walk" },
    { name: "Hotel Gat Point Charlie", address: "Mauerstraße 81–82, 10117 Berlin", url: "https://www.hotelgatpointcharlie.com/", directions: "https://www.google.com/maps/dir//Hotel+Gat+Point+Charlie/", type: "Mid-range", distance: "5 min walk" },
    { name: "Wilde Aparthotels Berlin", address: "Friedrichstraße, Berlin", url: "https://www.wilde-aparthotels.com/en/berlin-friedrichstrasse", directions: "https://www.google.com/maps/dir//Wilde+Aparthotels+Berlin+Friedrichstrasse/", type: "Mid-range", distance: "8 min walk" }
  ];

  // Nearby Hostels
  const hostels = [
    { name: "Check In Hostel Berlin", address: "Markgrafenstraße 68, 10969 Berlin", url: "https://www.booking.com/hotel/de/check-in-hostel-berlin.html", directions: "https://www.google.com/maps/dir//Check+In+Hostel+Berlin/", type: "Budget", distance: "2 min walk" },
    { name: "Acama Hotel & Hostel Kreuzberg", address: "Tempelhofer Ufer 8/9, 10963 Berlin", url: "https://www.booking.com/hotel/de/acama-hotel-hostel-kreuzberg.html", directions: "https://www.google.com/maps/dir//acama+Hotel+%26+Hostel+Kreuzberg/", type: "Budget", distance: "12 min walk" },
    { name: "36 Rooms Hostel Berlin Kreuzberg", address: "Spreewaldplatz 8, 10999 Berlin", url: "https://www.booking.com/hotel/de/36-rooms-berlin-kreuzberg.html", directions: "https://www.google.com/maps/dir//36+Rooms+Hostel+Berlin/", type: "Budget", distance: "15 min walk" },
    { name: "Generator Berlin Mitte", address: "Berlin Mitte", url: "https://staygenerator.com/hostels/berlin/mitte?lang=en-GB", directions: "https://www.google.com/maps/dir//Generator+Berlin+Mitte/", type: "Budget", distance: "7 min walk" },
    { name: "Heart of Gold Hostel Berlin", address: "Berlin Mitte", url: "https://www.heartofgold-hostel.de/", directions: "https://www.google.com/maps/dir//Heart+of+Gold+Hostel+Berlin/", type: "Budget", distance: "8 min walk" },
    { name: "Metropol Hostel Berlin", address: "Berlin Kreuzberg", url: "https://www.momondo.com/hotels/berlin/Metropol-Hostel-Berlin.mhd349548.ksp", directions: "https://www.google.com/maps/dir//Metropol+Hostel+Berlin/", type: "Budget", distance: "10 min walk" },
    { name: "Nena Hostel Berlin Mitte", address: "Provinzstraße 16, Berlin", url: "https://www.nena-apartments.de/en/locations/berlin/nena-hostel-berlin-mitte/", directions: "https://www.google.com/maps/dir//Nena+Hostel+Berlin+Mitte/", type: "Budget", distance: "9 min walk" },
    { name: "Ballhaus Berlin Hostel", address: "Chausseestraße 102, Berlin", url: "https://www.ballist-haus-berlin-hostel.de/", directions: "https://www.google.com/maps/dir//Ballhaus+Berlin+Hostel/", type: "Budget", distance: "11 min walk" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[black] via-[#1B2A49]/95 to-[#10182B] text-white pt-16 pb-10 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-2">
            Buganda Bumu European Convention
          </h1>
          <p className="text-white text-2xl md:text-3xl font-bold mb-2">
            Hosted by the Berlin Chapter in Berlin, Germany
          </p>
          <p className="text-white text-base md:text-lg max-w-2xl mb-4">
            Join us in celebrating our heritage, connecting with fellow Buganda community members, and being part of an unforgettable European Convention experience!
          </p>
          <p className="text-yellow-400 text-lg md:text-xl font-semibold mb-6">
            May 22–24, 2026 | Gloria Events Center, Berlin
          </p>

          {/* Countdown */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
              <div key={i} className="flex flex-col items-center bg-white/10 rounded-xl p-3 w-20 shadow border border-yellow-400/40">
                <span className="text-2xl font-extrabold text-yellow-400">{formatTime(timeLeft[unit.toLowerCase()])}</span>
                <span className="text-xs text-gray-200 uppercase">{unit}</span>
              </div>
            ))}
          </div>

          <div className="text-yellow-300 font-mono text-lg md:text-xl mb-4">
            🕒 {digitalTime} | 📅 {dateString}
          </div>

          <a
            href="https://forms.gle/PaD39jWRFeZJFxFLA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-yellow-300 transition"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Info Cards */}
      <main className="flex-grow py-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Convention Card */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-xl text-white flex flex-col justify-between min-h-[480px] hover:shadow-2xl transition">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-yellow-400">Convention 2026</h2>
              <p className="text-lg mb-4 italic text-gray-200 leading-relaxed">Theme: “Preserving Heritage & Navigating Modernity in the Diaspora”</p>
              <ul className="text-base space-y-2 leading-relaxed mb-4">
                <li><strong>Date:</strong> May 22–24, 2026</li>
                <li><strong>Location:</strong> Gloria Events Center<p className="text-gray-300 text-sm">Markgrafenstraße 67, 10969 Berlin</p></li>
                <li><strong>Activities:</strong> Cultural Workshops, Networking, Entertainment</li>
              </ul>
              <div className="text-center mt-4 mb-4">
                <a href="https://forms.gle/PaD39jWRFeZJFxFLA" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-md hover:bg-yellow-300 transition">Register Now</a>
              </div>
            </div>
          </div>

          {/* Tickets Card */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl text-white flex flex-col justify-between min-h-[480px] hover:shadow-2xl transition">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Tickets</h2>
              <ul className="space-y-2 text-base">
                <li>Early Bird (Nov–Dec) — €100</li>
                <li>Regular (Jan–Feb) — €120</li>
                <li>Late (March onwards) — €150</li>
                <li>Ugandan Delegates — €350</li>
                <li>Children (Below 12) — Free</li>
              </ul>
              <div className="mt-4 bg-indigo-900 text-white rounded-xl py-4 px-4 text-center text-sm space-y-2">
                <p>📞 Linda Sekayita – <span className="text-yellow-400">+31 6 85740954</span></p>
                <p>📞 Frank Kyambadde – <span className="text-yellow-400">+49 1523 5867655</span></p>
                <p>📞 Samuel Muwonge – <span className="text-yellow-400">+49 1520 8514008</span></p>
              </div>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl text-white flex flex-col justify-between min-h-[480px] hover:shadow-2xl transition">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-yellow-400">Payment Methods</h2>
              <div className="bg-white/5 border-l-4 border-yellow-400 rounded-lg p-4 mb-4 text-sm font-semibold text-white-900">
                ⚠️ <span className="text-white font-bold uppercase">IMPORTANT:</span> For <strong>ALL</strong> payments (Bank, PayPal, or Mobile Money), please include the payment reason: <span className="text-yellow-400 font-bold uppercase">BBECO BERLIN 2026</span>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li>🏦 <strong>Bank NL:</strong><br />Rabobank – M.VORSTENBOSCH / STICHTING BUGANDA RHINELANDS<br />IBAN: <strong>NL76 RABO 0162 8971 89</strong></li>
                <li>🏦 <strong>Bank DE:</strong><br />Deutsche Bank – M. Vorstenbosch / Buganda Berlin 2026<br />IBAN: <strong>DE89 1007 0000 0123 4567 00</strong></li>
                <li>💳 <strong>Tikkie Option:</strong> +31 681 941613 (Margret)</li>
                <li>📲 <strong>Mobile Money:</strong> +256 757 595578 (Nsereko Justine)</li>
                <li>💻 <strong>PayPal 1:</strong> paypal.me/bugandabumu</li>
                <li>💻 <strong>PayPal 2:</strong> bbeco2026@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hotels Section */}
        <div className="max-w-7xl mx-auto mt-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Nearby Hotels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((place, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg hover:bg-[#D2B48C] hover:text-white transition-all">
                <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
                <p className="text-gray-600 mb-2">{place.address}</p>
                <p className="text-gray-500 text-sm mb-3">🏷️ {place.type} — 🚶 {place.distance}</p>
                <div className="flex justify-between text-sm font-medium">
                  <a href={place.url} target="_blank" rel="noopener noreferrer" className="hover:underline">Website</a>
                  <a href={place.directions} target="_blank" rel="noopener noreferrer" className="hover:underline">Directions</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hostels Section */}
        <div className="max-w-7xl mx-auto mt-12 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Nearby Hostels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostels.map((place, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg hover:bg-[#D2B48C] hover:text-white transition-all">
                <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
                <p className="text-gray-600 mb-2">{place.address}</p>
                <p className="text-gray-500 text-sm mb-3">🏷️ {place.type} — 🚶 {place.distance}</p>
                <div className="flex justify-between text-sm font-medium">
                  <a href={place.url} target="_blank" rel="noopener noreferrer" className="hover:underline">Website</a>
                  <a href={place.directions} target="_blank" rel="noopener noreferrer" className="hover:underline">Directions</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Partnerships Section */}
      <section className="bg-blue-100 py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Partners
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We proudly collaborate with organizations that share our vision of unity, culture, and community development. 
            Together, we make the Buganda Bumu European Convention a success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {/* Partner 1: Ugandische Deutsche Gemeinde Berlin-Brandenburg */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <img
                src="/src/assets/udgbb-logo.png" // 👈 make sure this path is correct
                alt="Ugandische Deutsche Gemeinde Berlin-Brandenburg (UDGBB e.V.)"
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Ugandische Deutsche Gemeinde Berlin-Brandenburg (UDGBB e.V.)
              </h3>
              <a
                href="https://udgbb.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:underline mt-2 text-sm"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
