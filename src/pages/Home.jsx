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
    { name: "Hilton Berlin", address: "Mohrenstraße 30, 10117 Berlin", url: "https://www.hilton.com/en/hotels/berhitw-hilton-berlin/", directions: "https://www.google.com/maps/dir//Hilton+Berlin/", type: "Luxury", distance: "15 min walk" },
    { name: "NH Collection Berlin Mitte", address: "Leipziger Str. 106-111, 10117 Berlin", url: "https://www.nh-hotels.com/hotel/nh-collection-berlin-mitte-checkpoint-charlie", directions: "https://www.google.com/maps/dir//NH+Collection+Berlin+Mitte/", type: "Luxury", distance: "6 min walk" },
    { name: "Select Hotel Berlin Checkpoint Charlie", address: "Hedemannstraße 11-12, 10969 Berlin", url: "https://www.select-hotels.com/en/hotel/select-hotel-berlin-checkpoint-charlie/", directions: "https://www.google.com/maps/dir//Select+Hotel+Berlin+Checkpoint+Charlie/", type: "Mid-range", distance: "4 min walk" },
    { name: "Novotel Suites Berlin City", address: "Anhalter Str. 2, 10963 Berlin", url: "https://all.accor.com/hotel/3745/index.en.shtml", directions: "https://www.google.com/maps/dir//Novotel+Suites+Berlin+City+Potsdamer+Platz/", type: "Mid-range", distance: "9 min walk" },
    { name: "Mövenpick Hotel Berlin", address: "Schöneberger Str. 3, 10963 Berlin", url: "https://www.movenpick.com/", directions: "https://www.google.com/maps/dir//Mövenpick+Hotel+Berlin/", type: "Luxury", distance: "10 min walk" },
    { name: "Hotel Gat Point Charlie", address: "Mauerstraße 81–82, 10117 Berlin", url: "https://www.hotelgatpointcharlie.com/", directions: "https://www.google.com/maps/dir//Hotel+Gat+Point+Charlie/", type: "Mid-range", distance: "5 min walk" },
    { name: "Wilde Aparthotels Berlin", address: "Friedrichstraße, Berlin", url: "https://www.wilde-aparthotels.com/en/berlin-friedrichstrasse", directions: "https://www.google.com/maps/dir//Wilde+Aparthotels+Berlin+Friedrichstrasse/", type: "Mid-range", distance: "8 min walk" }
  ];

  // Hostels
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
      <section className="relative bg-gradient-to-b from-gray-900 via-[#1B2A49]/95 to-[#10182B] text-white pt-20 pb-14 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide mb-4">Buganda Bumu European Convention</h1>
          <p className="text-2xl md:text-3xl font-bold mb-3">Hosted by the Berlin Chapter in Berlin, Germany</p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-5">
            Celebrate our heritage, connect with the community, and experience an unforgettable European Convention!
          </p>
          <p className="text-yellow-400 text-xl md:text-2xl font-semibold mb-6">May 22–24, 2026 | Gloria Events Center, Berlin</p>

          {/* Countdown */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
              <div key={i} className="flex flex-col items-center bg-white/10 rounded-2xl p-4 w-24 shadow-lg border border-yellow-400/40">
                <span className="text-3xl font-extrabold text-yellow-400">{formatTime(timeLeft[unit.toLowerCase()])}</span>
                <span className="text-sm text-gray-200 uppercase">{unit}</span>
              </div>
            ))}
          </div>

          <div className="text-yellow-300 font-mono text-lg md:text-xl mb-6">🕒 {digitalTime} | 📅 {dateString}</div>

          <a href="https://forms.gle/PaD39jWRFeZJFxFLA" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-yellow-300 transition">
            Register Now
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Convention & Tickets */}
          <div className="md:col-span-1 bg-gray-900 rounded-2xl p-6 shadow-xl text-white hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold mb-5 text-yellow-400 text-center">Convention 2026</h2>
            <p className="text-2xl font-extrabold mb-4 text-center text-gray-200">“Preserving Heritage & Navigating Modernity in the Diaspora”</p>
            <ul className="text-lg space-y-2 leading-relaxed mb-6">
              <li><strong>Date:</strong> May 22–24, 2026</li>
              <li>
                <strong>Location:</strong> Gloria Events Center
                <p className="text-gray-300 text-sm">Markgrafenstraße 67, 10969 Berlin</p>
              </li>
              <li><strong>Activities:</strong> Cultural Workshops, Networking, Entertainment</li>
            </ul>

            <h2 className="text-3xl font-bold mb-5 text-yellow-400 text-center">Tickets</h2>
            <div className="bg-gray-800 rounded-xl p-6 border border-white/20 shadow-inner">
              <ul className="space-y-3 text-gray-200 text-lg">
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
                  <span className="font-semibold text-yellow-400">UGX 1,500,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Children (Below 12)</span>
                  <span className="font-semibold text-green-400">Free</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <a href="https://forms.gle/PaD39jWRFeZJFxFLA" target="_blank" rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-md hover:bg-yellow-300 transition">
                Register Now
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl text-white hover:shadow-2xl transition md:col-span-2">
            <h2 className="text-3xl font-bold mb-5 text-yellow-400 text-center">Payment Methods</h2>
            <div className="bg-white/5 border-l-4 border-yellow-400 rounded-lg p-4 mb-6 text-sm font-semibold">
              ⚠️ <span className="text-white font-bold uppercase">IMPORTANT:</span> Include: <span className="text-yellow-400 font-bold uppercase">BBECO BERLIN 2026</span>
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-gray-200">
             
              <div className="bg-white/5 p-4 rounded-xl border border-white">
                  {/* Germany 
                <h3 className="font-bold text-yellow-400 text-lg mb-2">Germany Account</h3>
                <h4 className="font-bold text-yellow-300 text-md mb-1">Bank DE</h4>
                
               
                <p>Bank: <strong>Deutsche Bank</strong> </p>
                <p>Account Holder: <strong>Precious Fischer</strong> </p>
                <p>IBAN: <strong>DE88 2507 0024 0202 9155 05</strong></p> */}
                <h4 className="font-bold text-yellow-300 text-md mb-1 mt-2">🅿️ PayPal</h4>
                <p>frankmperwe@gmail.com</p>
                <p className="text-xs italic text-yellow-300 mt-1">⚠️ Include purpose: <strong>BBECO BERLIN 2026</strong></p>
              </div>

              {/* Netherlands */}
              <div className="bg-white/5 p-4 rounded-xl border border-white">
                <h3 className="font-bold text-yellow-400 text-lg mb-2">Netherlands Account</h3>
                <h4 className="font-bold text-yellow-300 text-md mb-1">Bank NL</h4>

                <p>Bank: <strong>Rabobank</strong> </p>
                <p>Account Holder: <strong>STICHTING BUGANDA RHINELANDS</strong> </p>
                <p>IBAN: <strong>NL76 RABO 0162 8971 89</strong></p>
                <p>Swift Code: <strong>RABONL2U</strong></p>
                <p><strong>Theofrankelhof 46 , 1087KD, Amsterdam</strong></p>
                
                
                <h4 className="font-bold text-yellow-300 text-md mb-1 mt-2">💳 Tikkie</h4>
                <p>+31 681 941613 (Margret)</p>
              </div>

              {/* Uganda */}
              <div className="bg-white/5 p-4 rounded-xl border border-white">
                <h3 className="font-bold text-yellow-400 text-lg mb-2">Uganda Payments</h3>
                <h4 className="font-bold text-yellow-300 text-md mb-1">Mobile Money</h4>
                <p>+256 757 595578 (Nsereko Justine)</p>
                <p className="text-xs italic text-yellow-300 mt-1">⚠️ Contact <strong>Linda Sekayita – +31 6 85740954</strong> after sending.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hotels Section */}
        <section className="mt-14 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Nearby Hotels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg hover:bg-[#D2B48C] hover:text-white transition-all">
                <h3 className="text-xl font-semibold mb-1">{hotel.name}</h3>
                <p className="text-gray-600 mb-2">{hotel.address}</p>
                <p className="text-gray-500 text-sm mb-3">{hotel.type} • {hotel.distance}</p>
                <div className="flex justify-between">
                  <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">Website</a>
                  <a href={hotel.directions} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">Directions</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hostels Section */}
        <section className="mt-12 max-w-7xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Nearby Hostels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostels.map((hostel, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg hover:bg-[#D2B48C] hover:text-white transition-all">
                <h3 className="text-xl font-semibold mb-1">{hostel.name}</h3>
                <p className="text-gray-600 mb-2">{hostel.address}</p>
                <p className="text-gray-500 text-sm mb-3">{hostel.type} • {hostel.distance}</p>
                <div className="flex justify-between">
                  <a href={hostel.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">Website</a>
                  <a href={hostel.directions} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">Directions</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
