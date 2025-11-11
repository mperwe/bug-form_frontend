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

  // Hotels
  const hotels = [
    { name: "Titanic Chaussee Berlin", address: "Chausseestraße 30, 10115 Berlin", url: "https://www.titanic.com.tr/titanic-chaussee-berlin", directions: "https://www.google.com/maps/dir//Titanic+Chaussee+Berlin/", type: "Luxury", distance: "10 min walk" },
    { name: "Mondrian Suites Berlin", address: "Markgrafenstraße 16/16a, 10969 Berlin", url: "https://www.mondriansuites.com/", directions: "https://www.google.com/maps/dir//Mondrian+Suites+Berlin/", type: "Luxury", distance: "3 min walk" },
    { name: "Adina Apartment Hotel Berlin", address: "Krausenstraße 35-36, 10117 Berlin", url: "https://www.adinahotels.com/de/apartments/berlin-checkpoint-charlie/", directions: "https://www.google.com/maps/dir//Adina+Apartment+Hotel+Berlin/", type: "Luxury", distance: "10 min walk" },
  ];

  // Hostels
  const hostels = [
    { name: "Check In Hostel Berlin", address: "Markgrafenstraße 68, 10969 Berlin", url: "https://www.booking.com/hotel/de/check-in-hostel-berlin.html", directions: "https://www.google.com/maps/dir//Check+In+Hostel+Berlin/", type: "Budget", distance: "2 min walk" },
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
          <div className="bg-gray-900 rounded-2xl p-6 shadow-xl text-white flex flex-col justify-between hover:shadow-2xl transition">
            <div>
              <h2 className="text-3xl font-bold mb-5 text-yellow-400 text-center">Convention 2026</h2>
              <p className="text-lg mb-4 italic text-gray-200 leading-relaxed">
                Theme: “Preserving Heritage & Navigating Modernity in the Diaspora”
              </p>
              <ul className="text-base space-y-2 leading-relaxed mb-4">
                <li><strong>Date:</strong> May 22–24, 2026</li>
                <li><strong>Location:</strong> Gloria Events Center<p className="text-gray-300 text-sm">Markgrafenstraße 67, 10969 Berlin</p></li>
                <li><strong>Activities:</strong> Cultural Workshops, Networking, Entertainment</li>
              </ul>
              <div className="text-center mt-4 mb-4">
                <a href="https://forms.gle/PaD39jWRFeZJFxFLA" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-md hover:bg-yellow-300 transition">
                  Register Now
                </a>
              </div>
            </div>
          </div>

          {/* Tickets Card (Improved Boxed Format) */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl text-white flex flex-col justify-between hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold mb-5 text-yellow-400 text-center">Tickets</h2>
            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400/30 shadow-inner">
              <ul className="space-y-3 text-gray-200">
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Early Bird (Nov–Dec)</span>
                  <span className="font-semibold text-yellow-400">€100</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Regular (Jan–Feb)</span>
                  <span className="font-semibold text-yellow-400">€120</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Late (March onwards)</span>
                  <span className="font-semibold text-yellow-400">€150</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Ugandan Delegates</span>
                  <span className="font-semibold text-yellow-400">€350</span>
                </li>
                <li className="flex justify-between">
                  <span>Children (Below 12)</span>
                  <span className="font-semibold text-green-400">Free</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-indigo-900 text-white rounded-xl py-4 px-4 text-center text-sm space-y-2">
              <p>📞 Linda Sekayita – <span className="text-yellow-400">+31 6 85740954</span></p>
              <p>📞 Frank Kyambadde – <span className="text-yellow-400">+49 1523 5867655</span></p>
              <p>📞 Samuel Muwonge – <span className="text-yellow-400">+49 1520 8514008</span></p>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl text-white flex flex-col justify-between hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold mb-5 text-yellow-400 text-center">Payment Methods</h2>
            
            
            <div className="bg-white/5 border-l-4 border-yellow-400 rounded-lg p-4 mb-4 text-sm font-semibold text-white-900">
              ⚠️ <span className="text-white font-bold uppercase">IMPORTANT:</span> For <strong>ALL</strong> payments, please include: <span className="text-yellow-400 font-bold uppercase">BBECO BERLIN 2026</span>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>🏦 <strong>Bank NL:</strong><br />Rabobank – M.VORSTENBOSCH / STICHTING BUGANDA RHINELANDS<br />IBAN: <strong>NL76 RABO 0162 8971 89</strong></li>

              {/* 🏦 Bank DE (hidden)
              <li>🏦 <strong>Bank DE:</strong><br />Deutsche Bank – M. Vorstenbosch / Buganda Berlin 2026<br />IBAN: <strong>DE89 1007 0000 0123 4567 00</strong></li>
              */}

              <li>💳 <strong>Tikkie Option:</strong> +31 681 941613 (Margret)</li>
              <li>📲 <strong>Mobile Money:</strong> +256 757 595578 (Nsereko Justine)</li>
              <p className="text-xs italic text-yellow-300 mt-1">
                ⚠️ Please contact <strong>Linda Sekayita – +31 6 85740954</strong> with proof after sending via Mobile Money.
              </p>

              {/* 💻 PayPal options (hidden)
              <li>💻 <strong>PayPal 1:</strong> paypal.me/bugandabumu</li>
              <li>💻 <strong>PayPal 2:</strong> bbeco2026@gmail.com</li>
              */}
            </ul>
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

      {/* Partnerships Section (Hidden)
      <section className="bg-blue-100 py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Partners
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We proudly collaborate with organizations that share our vision of unity, culture, and community development.
          </p>
        </div>
      </section>
      */}

      <Footer />
    </div>
  );
}
