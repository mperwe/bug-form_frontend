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
          <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400">
                Ttabamiruka 2026
              </h2>
              <p className="text-sm md:text-base mb-6 opacity-90 italic">
                Theme: “Preserving Heritage & Navigating Modernity in the Diaspora”
              </p>

              {/* Event Details */}
              <ul className="space-y-3 text-sm md:text-base mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-lg">📅</span>
                  <span><strong>Date:</strong> May 22–24, 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">📍</span>
                  <span>
                    <strong>Location:</strong> Gloria Events Center
                    <p className="text-gray-300 text-xs mt-1">
                      Markgrafenstraße 67, 10969 Berlin
                    </p>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🎶</span>
                  <span>
                    <strong>Activities:</strong> Cultural Workshops, Networking, Live Entertainment
                  </span>
                </li>
              </ul>

              {/* Ticket Categories */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 underline text-yellow-400">
                  Ticket Categories
                </h3>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>💶 <strong>Early Bird:</strong> €100 (Oct – Dec)</li>
                  <li>💶 <strong>Regular:</strong> €120 (Jan – Mar)</li>
                  <li>💶 <strong>Late:</strong> €150 (Apr onwards)</li>
                </ul>
              </div>

              {/* Contacts */}
              <div>
                <h3 className="text-xl font-semibold mb-3 underline text-yellow-400">
                  Contact Information
                </h3>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>📞 Linda S – <span className="text-yellow-400">+31 6 85740954</span> (Esaaza Rhinelands)</li>
                  <li>📞 Frank K – <span className="text-yellow-400">+49 1523 5867655</span> (Berlin)</li>
                  <li>📞 Samuel S – <span className="text-yellow-400">+49 1520 8514008</span> (Munich)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Panel – Payment Methods */}
          <div className="flex-1 bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-yellow-400">
                Payment Methods
              </h2>
              <p className="text-sm md:text-base mb-6 opacity-90">
                Choose one of the methods below to complete your registration payment:
              </p>

              <ul className="space-y-5 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🏦</span>
                  <div>
                    <strong className="underline">Bank Transfer</strong>
                    <p className="text-gray-300 text-xs md:text-sm mt-1 leading-snug">
                      <strong>Bank:</strong> ABN AMRO Bank N.V.<br />
                      <strong>Account Name:</strong> HK NDUGGA<br />
                      <strong>IBAN:</strong> NL80 ABNA 0875436439<br />
                      Request a <strong>Tikkie</strong> from Hamza:{" "}
                      <span className="text-yellow-400">+31 636 556030</span><br />
                      <strong>Reason:</strong> BBECO 2026
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">💻</span>
                  <div>
                    <strong className="underline">PayPal</strong>
                    <p className="text-gray-300 text-xs md:text-sm mt-1 leading-snug">
                      Send payments to:<br />
                      <span className="text-yellow-400">hamuza@gmail.com</span><br />
                      <span className="text-yellow-400">bbeco@gmail.com</span>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">📲</span>
                  <div>
                    <strong className="underline">Mobile Money (Uganda)</strong>
                    <p className="text-gray-300 text-xs md:text-sm mt-1 leading-snug">
                      Send to: <span className="text-yellow-400">+256 757 595578</span> (Nsereko Justine)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Accommodations Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-indigo-900">
            Nearby Hotels & Accommodations
          </h2>

          {/* Filter Buttons */}
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

          {/* Google Map */}
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

          <p className="text-center text-sm text-gray-600 mt-10">
            All locations are within a short walk or transit ride from{" "}
            <strong>Gloria Events Center, Markgrafenstraße 67, 10969 Berlin</strong>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
