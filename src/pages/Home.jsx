import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const places = [
    {
      name: "Mondrian Suites Berlin am Checkpoint Charlie",
      address: "Markgrafenstraße 16/16a, 10969 Berlin",
      url: "https://www.mondriansuites.com/",
      directions:
        "https://www.google.com/maps/dir//Mondrian+Suites+Berlin+am+Checkpoint+Charlie,+Markgrafenstraße+16%2F16a,+10969+Berlin/",
      type: "Luxury",
      distance: "3 min walk",
    },
    {
      name: "Adina Apartment Hotel Berlin Checkpoint Charlie",
      address: "Krausenstraße 35-36, 10117 Berlin",
      url: "https://www.adinahotels.com/de/apartments/berlin-checkpoint-charlie/",
      directions:
        "https://www.google.com/maps/dir//Adina+Apartment+Hotel+Berlin+Checkpoint+Charlie,+Krausenstraße+35-36,+10117+Berlin/",
      type: "Luxury",
      distance: "10 min walk",
    },
    {
      name: "Acama Hotel & Hostel Kreuzberg",
      address: "Tempelhofer Ufer 8/9, 10963 Berlin",
      url: "https://www.booking.com/hotel/de/acama-hotel-hostel-kreuzberg.html",
      directions:
        "https://www.google.com/maps/dir//acama+Hotel+%26+Hostel+Kreuzberg,+Tempelhofer+Ufer+8%2F9,+10963+Berlin/",
      type: "Budget",
      distance: "12 min walk",
    },
    {
      name: "36 Rooms Hostel Berlin Kreuzberg",
      address: "Spreewaldplatz 8, 10999 Berlin",
      url: "https://www.booking.com/hotel/de/36-rooms-berlin-kreuzberg.html",
      directions:
        "https://www.google.com/maps/dir//36+Rooms+Hostel+Berlin,+Spreewaldplatz+8,+10999+Berlin/",
      type: "Budget",
      distance: "15 min walk",
    },
    {
      name: "Hilton Berlin",
      address: "Mohrenstraße 30, 10117 Berlin",
      url: "https://www.hilton.com/en/hotels/berhitw-hilton-berlin/",
      directions:
        "https://www.google.com/maps/dir//Hilton+Berlin,+Mohrenstraße+30,+10117+Berlin/",
      type: "Luxury",
      distance: "15 min walk",
    },
    {
      name: "Select Hotel Berlin Checkpoint Charlie",
      address: "Hedemannstraße 11-12, 10969 Berlin",
      url: "https://www.select-hotels.com/en/hotel/select-hotel-berlin-checkpoint-charlie/",
      directions:
        "https://www.google.com/maps/dir//Select+Hotel+Berlin+Checkpoint+Charlie,+Hedemannstraße+11-12,+10969+Berlin/",
      type: "Mid-range",
      distance: "4 min walk",
    },
    {
      name: "NH Collection Berlin Mitte am Checkpoint Charlie",
      address: "Leipziger Str. 106-111, 10117 Berlin",
      url: "https://www.nh-hotels.com/hotel/nh-collection-berlin-mitte-checkpoint-charlie",
      directions:
        "https://www.google.com/maps/dir//NH+Collection+Berlin+Mitte+am+Checkpoint+Charlie,+Leipziger+Str.+106-111,+10117+Berlin/",
      type: "Luxury",
      distance: "6 min walk",
    },
    {
      name: "Hotel Gat Point Charlie",
      address: "Mauerstraße 81–82, 10117 Berlin",
      url: "https://www.hotelgatpointcharlie.com/",
      directions:
        "https://www.google.com/maps/dir//Hotel+Gat+Point+Charlie,+Mauerstraße+81–82,+10117+Berlin/",
      type: "Mid-range",
      distance: "5 min walk",
    },
    {
      name: "Novotel Suites Berlin City Potsdamer Platz",
      address: "Anhalter Str. 2, 10963 Berlin",
      url: "https://all.accor.com/hotel/3745/index.en.shtml",
      directions:
        "https://www.google.com/maps/dir//Novotel+Suites+Berlin+City+Potsdamer+Platz,+Anhalter+Str.+2,+10963+Berlin/",
      type: "Mid-range",
      distance: "9 min walk",
    },
    {
      name: "Ibis Berlin City Potsdamer Platz",
      address: "Anhalter Str. 4, 10963 Berlin",
      url: "https://all.accor.com/hotel/3109/index.en.shtml",
      directions:
        "https://www.google.com/maps/dir//ibis+Berlin+City+Potsdamer+Platz,+Anhalter+Str.+4,+10963+Berlin/",
      type: "Budget",
      distance: "8 min walk",
    },
    {
      name: "Relexa Hotel Stuttgarter Hof Berlin",
      address: "Anhalter Str. 8-9, 10963 Berlin",
      url: "https://www.relexa-hotel-berlin.de/",
      directions:
        "https://www.google.com/maps/dir//relexa+hotel+Stuttgarter+Hof,+Anhalter+Str.+8-9,+10963+Berlin/",
      type: "Mid-range",
      distance: "9 min walk",
    },
    {
      name: "Mövenpick Hotel Berlin",
      address: "Schöneberger Str. 3, 10963 Berlin",
      url: "https://www.movenpick.com/",
      directions:
        "https://www.google.com/maps/dir//M%C3%B6venpick+Hotel+Berlin,+Sch%C3%B6neberger+Str.+3,+10963+Berlin/",
      type: "Luxury",
      distance: "10 min walk",
    },
    {
      name: "Check In Hostel Berlin",
      address: "Markgrafenstraße 68, 10969 Berlin",
      url: "https://www.booking.com/hotel/de/check-in-hostel-berlin.html",
      directions:
        "https://www.google.com/maps/dir//Check+In+Hostel+Berlin,+Markgrafenstra%C3%9Fe+68,+10969+Berlin/",
      type: "Budget",
      distance: "2 min walk",
    },
    {
      name: "MEININGER Hotel Berlin Mitte",
      address: "Oranienburger Str. 67/68, 10117 Berlin",
      url: "https://www.meininger-hotels.com/en/hotels/berlin/mitte-humboldthaus/",
      directions:
        "https://www.google.com/maps/dir//MEININGER+Hotel+Berlin+Mitte,+Oranienburger+Str.+67%2F68,+10117+Berlin/",
      type: "Budget",
      distance: "15 min walk",
    },
  ];

  const filteredPlaces =
    filter === "All" ? places : places.filter((p) => p.type === filter);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1B2A49] via-[#1B2A49]/95 to-[#10182B] text-white pt-28 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/berlin1.jpg')] bg-cover bg-center"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight uppercase">
            Buganda Bumu European Convention
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-yellow-400 mb-4 uppercase">
            Hosted by Germany – Berlin 2026
          </h2>

          <p className="text-sm md:text-base max-w-2xl mx-auto opacity-90 leading-relaxed">
            Join us for a grand cultural celebration uniting the Buganda community
            across Europe — fostering heritage, networking, and development in the
            heart of Berlin.
          </p>

          <Link
            to="https://forms.gle/PaD39jWRFeZJFxFLA"
            target="_blank"
            className="mt-6 inline-block px-8 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Main Section */}
      <main className="flex-grow py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Panel – Event Info */}
          <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 shadow-lg text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400">
              Ttabamiruka 2026
            </h2>
            <p className="text-sm md:text-base mb-6 opacity-90 italic">
              Theme: “Preserving Heritage & Navigating Modernity in the Diaspora”
            </p>

            <ul className="space-y-3 text-sm md:text-base mb-6">
              <li>📅 <strong>Date:</strong> May 22–24, 2026</li>
              <li>
                📍 <strong>Location:</strong> Gloria Events Center  
                <p className="text-gray-300 text-xs">Markgrafenstraße 67, 10969 Berlin</p>
              </li>
              <li>🎶 <strong>Activities:</strong> Cultural Workshops, Networking, Live Entertainment</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 underline text-yellow-400">
              Ticket Categories
            </h3>
            <ul className="space-y-2 mb-6 text-sm md:text-base">
              <li>💶 <strong>Early Bird:</strong> €100 (Nov – Dec)</li>
              <li>💶 <strong>Regular:</strong> €120 (Jan – Feb)</li>
              <li>💶 <strong>Late:</strong> €150 (March onwards)</li>
              <li>💶 <strong>Uganda:</strong> €350 (March onwards)</li>
              
            </ul>

            <h3 className="text-xl font-semibold mb-3 underline text-yellow-400">
              Contact Information
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>📞 Linda S – <span className="text-yellow-400">+31 6 85740954</span> (Essaza Rhinelands)</li>
              <li>📞 Frank K – <span className="text-yellow-400">+49 1523 5867655</span> (Berlin)</li>
              <li>📞 Samuel M – <span className="text-yellow-400">+49 1520 8514008</span> (Munich)</li>
            </ul>
          </div>

          {/* Right Panel – Payment Methods */}
          <div className="flex-1 bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-yellow-400">
              Payment Methods
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Please choose one of the following payment options.  
              <br />
              <strong className="text-yellow-400">Payment Reason: BBECO 2026</strong>
            </p>

            <ul className="space-y-6 text-sm md:text-base">
              {/* PayPal */}
              <li>
                💻 <strong>PayPal</strong>
                <div className="mt-2 text-xs text-gray-300 leading-relaxed">
                  <p><strong>Account 1:</strong> bbecoberlin@gmail.com <br /><span className="ml-4 text-gray-400">Name: BBECO Berlin </span></p>
                  
                {/* <p className="mt-2"><strong>Account 2:</strong> finance.bbeco2026@gmail.com <br /><span className="ml-4 text-gray-400">Name: BBECO Finance Dept</span></p> */}
                
                </div>
              </li>

              {/* Bank Transfers */}
              <li>
                🏦 <strong>Bank Transfer</strong>
                <div className="mt-2 text-xs text-gray-300 leading-relaxed">
                  <p><strong>Account 1:</strong><br />Bank: ABN AMRO Bank N.V.<br />Account Name: HK NDUGGA<br />IBAN: NL80 ABNA 0875436439</p>
                  <br />
                  
                {/* <p><strong>Account 2:</strong><br />Bank: Berlin Community Bank<br />Account Name: BBECO Finance<br />IBAN: DE89 3704 0044 0532 0130 00</p> */}
                
                </div>
              </li>
                {/*  <p><strong>Account 2:</strong><br />Bank: Berlin Community Bank<br />Account Name: BBECO Finance<br />IBAN: DE89 3704 0044 0532 0130 00</p>
                </div>
              </li> */} 
              {/* Tikkie */}
              <li>
                💳 <strong>Tikkie Option</strong><br />
                <span className="text-yellow-400 text-xs">Request a Tikkie from Hamza: +31 636 556030</span>
              </li>

              {/* Mobile Money */}
              <li>
                📲 <strong>Mobile Money (Uganda)</strong><br />
                <span className="text-yellow-400 text-xs">+256 757 595578 (Nsereko Justine)</span>
                <p className="mt-2 text-xs text-gray-300">
                  ✅ After payment, please send confirmation on WhatsApp:{" "}
                  <strong className="text-yellow-400">+31 685 740954</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Hotels */}
      <section className="bg-gray-50 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-indigo-900">
            Nearby Hotels & Accommodations
          </h2>

          {/* Filter */}
          <div className="flex justify-center gap-4 mb-8">
            {["All", "Budget", "Mid-range", "Luxury"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  filter === cat
                    ? "bg-yellow-400 text-indigo-900"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="w-full h-96 mb-12 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Hotels near Gloria Events Center Berlin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.3682267296345!2d13.392069877020108!3d52.506319737204835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e26dfca07f1%3A0x3a5b7a4f69f1e8a1!2sGloria%20Events%20Center%2C%20Markgrafenstra%C3%9Fe%2067%2C%2010969%20Berlin!5e0!3m2!1sen!2sde!4v1730134800000!5m2!1sen!2sde"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 p-6"
              >
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{hotel.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{hotel.address}</p>
                <p className="text-xs text-gray-500 mb-1 italic">{hotel.type}</p>
                <p className="text-xs text-gray-500 mb-4">Distance: {hotel.distance}</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={hotel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-indigo-900 font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition"
                  >
                    Book Now
                  </a>
                  <a
                    href={hotel.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-900 text-white font-semibold px-4 py-2 rounded-full hover:bg-indigo-800 transition"
                  >
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
