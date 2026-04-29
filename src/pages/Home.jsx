import React, { useState, useEffect } from "react";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const eventDate = new Date("May 22, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeFilter, setActiveFilter] = useState("hotels");

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

  // ACCOMMODATIONS
  const hotels = [
    { name: "Holiday Inn Express Berlin – Alexanderplatz", address: "Stralauer Straße 45, 10179 Berlin", phone: "+49 30 7501 070", website: "http://www.hiexpress.com/hotels/de/de/berlin/berab/hoteldetail", distance: "10 min drive (3.5 km)", price: "€90–€120 / night", recommended: true },
    { name: "ADELANTE Boutique Hotel", address: "Borsigstraße 1, 10115 Berlin", phone: "+49 30 2009 5060", website: "http://www.adelanteboutiquehotel.de/", distance: "7 min walk (0.6 km)", price: "€100–€140 / night", recommended: true },
    { name: "IntercityHotel Berlin Hauptbahnhof", address: "Katharina-Paulus-Straße 5, 10557 Berlin", phone: "+49 30 2887 550", website: "https://hrewards.com/de/intercityhotel-berlin-hauptbahnhof", distance: "8 min drive (3 km)", price: "€100–€150 / night", recommended: true },
    { name: "H2 Hotel Berlin-Alexanderplatz", address: "Dircksenstraße 36, 10178 Berlin", phone: "+49 30 206 7550", website: "https://www.h2hotel.com/en/hotels/berlin-alexanderplatz", distance: "12 min drive (4 km)", price: "€110–€160 / night", recommended: true },
    { name: "Novotel Suites Berlin City", address: "Anhalter Str. 2, 10963 Berlin", website: "https://all.accor.com/hotel/3745/index.en.shtml", distance: "9 min walk (0.8 km)", price: "€130–€180 / night", recommended: true },
    { name: "Hotel Gat Point Charlie", address: "Mauerstraße 81–82, 10117 Berlin", website: "https://www.hotelgatpointcharlie.com/", distance: "5 min walk (0.4 km)", price: "€150–€200 / night", recommended: true },
    { name: "Mondrian Suites Berlin", address: "Markgrafenstraße 16–16a, 10969 Berlin", phone: "+49 30 700 140 0", website: "https://www.mondrian-suites.de/", distance: "3 min walk (0.3 km)", price: "€120–€170 / night", recommended: true },
  ];

  const hostels = [
    { name: "Check In Hostel Berlin", address: "Markgrafenstraße 68, 10969 Berlin", website: "https://www.booking.com/hotel/de/check-in-hostel-berlin.html", distance: "2 min walk", price: "€25–€40 / night" },
    { name: "Nena Hostel Berlin Mitte", address: "Provinzstraße 16, Berlin", website: "https://www.nena-apartments.de/en/locations/berlin/nena-hostel-berlin-mitte/", distance: "5 min walk", price: "€30–€45 / night" },
    { name: "Generator Berlin Mitte", address: "Berlin Mitte", website: "https://staygenerator.com/hostels/berlin/mitte?lang=en-GB", distance: "7 min walk", price: "€35–€50 / night" },
    { name: "Heart of Gold Hostel Berlin", address: "Berlin Mitte", website: "https://www.heartofgold-hostel.de/", distance: "8 min walk", price: "€35–€55 / night" },
  ];

  const apartments = [
    { name: "Simple & Smart Apartment Neukölln", address: "Neukölln, Berlin", website: "https://www.airbnb.com/rooms/752358", distance: "15 min drive (5 km)", price: "€45–€80 / night" },
    { name: "Berlin Center Entire Apartment", address: "Berlin Mitte", website: "https://www.airbnb.com.mt/rooms/1475507641436828123", distance: "10 min drive (3.5 km)", price: "€90–€160 / night" },
  ];

  const tickets = [
    { type: "Late (Mar onwards)", price: "€120" },
    { type: "Children (12yrs - 18 yrs)", price: "€50" },
    { type: "Children (Below 12 yrs)", price: "Free" },
  ];

  const getPlaces = () => {
    if (activeFilter === "hotels") return hotels;
    if (activeFilter === "hostels") return hostels;
    if (activeFilter === "apartments") return apartments;
    return [];
  };
  const places = getPlaces();

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1B3D] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-24 pb-24 px-4 text-center bg-[url('/bbeco.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-black/20"></div>
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-2 text-black">Buganda Bumu European Convention</h1>
          <p className="text-lg md:text-xl font-semibold mb-1 text-gray-700">Hosted by Berlin Chapter, Germany</p>
          <p className="text-sm md:text-base mb-2 text-gray-600">Celebrate heritage, connect with community, and experience an unforgettable European Convention!</p>
          <p className="text-blue-900 font-bold text-lg md:text-xl mb-4">May 22–24, 2026 | Gloria Events Center, Berlin - Vicom Festsaal</p>

          {/* Countdown */}
          <div className="flex justify-center gap-2 mb-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
              <div key={i} className="flex flex-col items-center bg-[#F5E6D3]/20 rounded-xl p-2 w-14 shadow-md border border-[#0B1B3D]">
                <span className="text-xl font-bold text-[#8B5E3C]">{formatTime(timeLeft[unit.toLowerCase()])}</span>
                <span className="text-xs text-[#8B5E3C] uppercase">{unit}</span>
              </div>
            ))}
          </div>

          <div className="font-mono text-sm md:text-base text-[#0B1B3D] mb-4">🕒 {digitalTime} | 📅 {dateString}</div>

          <a href="https://forms.gle/PaD39jWRFeZJFxFLA" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 md:px-8 md:py-3 bg-[#0B1B3D] text-white font-bold rounded-full shadow-lg hover:scale-105 hover:bg-[#1A2B5C] transition">Register Now</a>
        </div>
      </section>

      {/* CONVENTION INFO & PAYMENT */}
      <main className="flex-grow py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Theme & Tickets */}
          <div className="bg-[#1B2A49] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Convention 2026</h2>
            <p className="text-xl font-extrabold mb-4 text-center text-gray-200">"Preserving Heritage & Navigating Modernity in the Diaspora"</p>
            <ul className="text-lg space-y-2 mb-4 text-gray-200">
              <li><strong>Date:</strong> May 22–24, 2026</li>
              <li><strong>Location:</strong> Gloria Events Center - Vicom Festsaal, Markgrafenstraße 67, 10969 Berlin</li>
              <li><strong>Activities:</strong> Cultural Workshops, Networking, Entertainment</li>
            </ul>
            <h2 className="text-2xl font-bold mb-3 text-white text-center">Tickets</h2>
            <ul className="space-y-2 text-gray-200 text-lg">
              {tickets.map((ticket, i) => (
                <li key={i} className="flex justify-between border-b border-gray-600 pb-1">
                  {ticket.type} <span className="text-yellow-400 font-semibold">{ticket.price}</span>
                </li>
              ))}
            </ul>

            {/* Uganda registration / sponsorship note */}
            <p className="mt-4 text-yellow-300 text-center font-bold text-lg">
              ⚠️ Uganda participant registration is now closed. The current open window is available for sponsorship opportunities. For sponsorship inquiries, please contact the organisers.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="bg-[#1B2A49] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">Payment Methods</h2>
            <div className="space-y-4 text-gray-200">

              {/* Germany Bank & PayPal */}
              <div className="bg-[#0B1B3D] p-3 rounded-xl border border-white/40">
                <h3 className="text-yellow-400 font-bold mt-2">💻 PayPal</h3>
                <p>frankmperwe@gmail.com</p>
                <p className="text-xs italic text-yellow-300">⚠️ Include purpose: <strong>BBECO BERLIN 2026</strong></p>
              </div>

              {/* Netherlands */}
              <div className="bg-[#0B1B3D] p-3 rounded-xl border border-white/40">
                <h3 className="text-yellow-400 font-bold mb-1">🏦 Netherlands Account</h3>
                <p>Bank: <strong>Rabobank</strong></p>
                <p>Account Name: <strong>STICHTING BUGANDA RHINELANDS</strong></p>
                <p>IBAN: <strong>NL76 RABO 0162 897189</strong></p>
                <p>Swift Code: <strong>RABONL2U</strong></p>
                <p>Address: <strong>Theofrankelhof 46, 1087KD, Amsterdam</strong></p>
              </div>

              {/* Uganda */}
              <div className="bg-[#0B1B3D] p-3 rounded-xl border border-white/40">
                <h3 className="text-yellow-400 font-bold mb-1">🏦 Uganda Account</h3>
                <p>Bank: <strong>Centenary Bank Rubaga Branch</strong></p>
                <p>Account Name: <strong>Gwanika lya Buganda Ministry of Local Government</strong></p>
                <p>Account No: <strong>3100046659</strong></p>
                <p className="mt-2 text-yellow-300 text-sm">
                  Ugandan Delegates: Send payment records to <span className="underline">bbumugermany@gmail.com</span> or WhatsApp +31 6 85740954
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-8 flex justify-center gap-3">
          {["hotels","hostels","apartments"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1 rounded-full font-bold text-sm ${activeFilter === filter ? "bg-[#8B5E3C]" : "bg-[#1B2A49]"} hover:bg-[#8B5E3C] transition`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* ACCOMMODATIONS */}
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {places.map((place, i) => (
            <div key={i} className={`bg-[#1B2A49] rounded-lg p-3 shadow-md border ${place.recommended ? "border-yellow-400" : "border-gray-600"} hover:shadow-lg hover:bg-[#8B5E3C] transition-all text-sm`}>
              <h3 className="text-lg font-semibold flex items-center justify-between">
                {place.name}
                {place.recommended && <span className="text-yellow-300 text-xs font-bold bg-[#0B1B3D] px-1 py-0.5 rounded-full">Recommended</span>}
              </h3>
              <p className="text-gray-300">{place.address}</p>
              <p className="text-gray-400">{place.distance} • {place.price}</p>
              <div className="flex justify-between mt-1">
                {place.website && <a href={place.website} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Website</a>}
              </div>
            </div>
          ))}
        </section>

        {/* DISCLAIMER */}
        <section className="mt-8 bg-[#1B2A49] p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-white">General Inquiries</h2>
          <p className="text-gray-200 text-center mb-2">
            For inquiries, assistance, or additional information about the Buganda Bumu European Convention 2026, contact our team:
          </p>
          <p className="text-yellow-300 font-semibold text-center mb-2">+31 6 85740954 | +49 1523 5867655 | +49 173 9399094 | +49 1520 8514008</p>
          <p className="italic text-yellow-300 text-center">For formal inquiries: <strong>bbumugermany@gmail.com</strong></p>

          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white mb-2">Visa Disclaimer</h3>
            <p className="text-gray-300 mb-2">
              BBECO and Uganda Community Berlin-Brandenburg e.V. (UGDBB) are solely the organizers of the Buganda Bumu European Convention (BBECO 2026) and do not provide visa assistance, sponsorship, or guarantees of visa approval. All participants are individually responsible for obtaining the appropriate German (Schengen) visa and meeting all entry requirements. Please note that BBECO and UGDBB e.V. have not authorized or appointed any individual, company, or agency to act on their behalf in relation to visa processing, travel arrangements, or financial transactions. Any engagement with third parties claiming to offer such services is done entirely at the participant’s own risk, and the organizers shall not be held liable for any loss or fraud resulting from such dealings.

            </p>
            <p className="text-blue-400 mb-1"><a href="https://www.auswaertiges-amt.de/en/visa-service" target="_blank" rel="noopener noreferrer">Official German Visa Info</a></p>
            <p className="text-blue-400"><a href="https://kampala.diplo.de" target="_blank" rel="noopener noreferrer">German Embassy in Kampala</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}