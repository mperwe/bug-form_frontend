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
    {
      name: "TITANIC Chaussee Berlin",
      address: "Chausseestraße 30, 10115 Berlin",
      url: "https://www.titanic.com.tr/titanic-chaussee-berlin",
      directions:
        "https://www.google.com/maps/dir//TITANIC+Chaussee+Berlin,+Chausseestraße+30,+10115+Berlin/",
      type: "Luxury",
      distance: "10 min walk",
    },
  ];

  const filteredPlaces =
    filter === "All" ? places : places.filter((p) => p.type === filter);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
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
          <Link
            to="https://forms.gle/PaD39jWRFeZJFxFLA"
            target="_blank"
            className="mt-6 inline-block px-6 sm:px-8 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Main Section */}
      <main className="flex-grow py-12 px-4 sm:px-6 md:px-12">
        {/* Your existing convention info, tickets, payment methods, contact info remain unchanged */}
      </main>

      {/* Hotels Section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 text-indigo-900 drop-shadow">
            Nearby Hotels & Accommodations
          </h2>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {["All", "Budget", "Mid-range", "Luxury"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  filter === cat
                    ? "bg-yellow-400 text-indigo-900 shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4 md:p-6"
              >
                <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-2">{hotel.name}</h3>
                <p className="text-xs sm:text-sm md:text-sm text-gray-600 mb-1">{hotel.address}</p>
                <p className="text-xs sm:text-sm md:text-sm text-gray-500 mb-1 italic">{hotel.type}</p>
                <p className="text-xs sm:text-sm md:text-sm text-gray-500 mb-4">Distance: {hotel.distance}</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <a
                    href={hotel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-indigo-900 font-semibold px-3 py-2 rounded-full hover:bg-yellow-300 text-xs sm:text-sm md:text-sm transition"
                  >
                    Book Now
                  </a>
                  <a
                    href={hotel.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-900 text-white font-semibold px-3 py-2 rounded-full hover:bg-indigo-800 text-xs sm:text-sm md:text-sm transition"
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
