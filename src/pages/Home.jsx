import React, { useState, useEffect } from "react";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const eventDate = new Date("May 22, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
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

  const digitalTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const dateString = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  //
  // HOTELS LIST
  //
  const hotels = [
    {
      name: "Mondrian Suites Berlin",
      address: "Markgrafenstraße 16/16a, 10969 Berlin",
      url: "https://www.mondriansuites.com/",
      directions: "https://www.google.com/maps/dir//Mondrian+Suites+Berlin/",
      type: "Luxury",
      distance: "2 min walk",
      recommended: true,
    },
    {
      name: "Select Hotel Berlin Checkpoint Charlie",
      address: "Hedemannstraße 11-12, 10969 Berlin",
      url: "https://www.select-hotels.com/en/hotel/select-hotel-berlin-checkpoint-charlie/",
      directions: "https://www.google.com/maps/dir//Select+Hotel+Berlin+Checkpoint+Charlie/",
      type: "Mid-range",
      distance: "4 min walk",
    },
    {
      name: "Hotel Gat Point Charlie",
      address: "Mauerstraße 81–82, 10117 Berlin",
      url: "https://www.hotelgatpointcharlie.com/",
      directions: "https://www.google.com/maps/dir//Hotel+Gat+Point+Charlie/",
      type: "Mid-range",
      distance: "5 min walk",
    },
    {
      name: "NH Collection Berlin Mitte",
      address: "Leipziger Str. 106-111, 10117 Berlin",
      url: "https://www.nh-hotels.com/hotel/nh-collection-berlin-mitte-checkpoint-charlie",
      directions: "https://www.google.com/maps/dir//NH+Collection+Berlin+Mitte/",
      type: "Luxury",
      distance: "6 min walk",
    },
    {
      name: "Novotel Suites Berlin City",
      address: "Anhalter Str. 2, 10963 Berlin",
      url: "https://all.accor.com/hotel/3745/index.en.shtml",
      directions: "https://www.google.com/maps/dir//Novotel+Suites+Berlin+City+Potsdamer+Platz/",
      type: "Mid-range",
      distance: "9 min walk",
    },
    {
      name: "Titanic Chaussee Berlin",
      address: "Chausseestraße 30, 10115 Berlin",
      url: "https://www.titanic.com.tr/titanic-chaussee-berlin",
      directions: "https://www.google.com/maps/dir//Titanic+Chaussee+Berlin/",
      type: "Luxury",
      distance: "10 min walk",
    },
    {
      name: "Adina Apartment Hotel Berlin",
      address: "Krausenstraße 35-36, 10117 Berlin",
      url: "https://www.adinahotels.com/de/apartments/berlin-checkpoint-charlie/",
      directions: "https://www.google.com/maps/dir//Adina+Apartment+Hotel+Berlin/",
      type: "Luxury",
      distance: "10 min walk",
    },
    {
      name: "Mövenpick Hotel Berlin",
      address: "Schöneberger Str. 3, 10963 Berlin",
      url: "https://www.movenpick.com/",
      directions: "https://www.google.com/maps/dir//Mövenpick+Hotel+Berlin/",
      type: "Luxury",
      distance: "10 min walk",
    },
    {
      name: "Hilton Berlin",
      address: "Mohrenstraße 30, 10117 Berlin",
      url: "https://www.hilton.com/en/hotels/berhitw-hilton-berlin/",
      directions: "https://www.google.com/maps/dir//Hilton+Berlin/",
      type: "Luxury",
      distance: "15 min walk",
    },
  ];

  const sortedHotels = hotels.sort(
    (a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0)
  );

  //
  // HOSTELS LIST
  //
  const hostels = [
    {
      name: "Check In Hostel Berlin",
      address: "Markgrafenstraße 68, 10969 Berlin",
      url: "https://www.booking.com/hotel/de/check-in-hostel-berlin.html",
      directions: "https://www.google.com/maps/dir//Check+In+Hostel+Berlin/",
      type: "Budget",
      distance: "2 min walk",
    },
    {
      name: "Nena Hostel Berlin Mitte",
      address: "Provinzstraße 16, Berlin",
      url: "https://www.nena-apartments.de/en/locations/berlin/nena-hostel-berlin-mitte/",
      directions: "https://www.google.com/maps/dir//Nena+Hostel+Berlin+Mitte/",
      type: "Budget",
      distance: "5 min walk",
    },
    {
      name: "Generator Berlin Mitte",
      address: "Berlin Mitte",
      url: "https://staygenerator.com/hostels/berlin/mitte?lang=en-GB",
      directions: "https://www.google.com/maps/dir//Generator+Berlin+Mitte/",
      type: "Budget",
      distance: "7 min walk",
    },
    {
      name: "Heart of Gold Hostel Berlin",
      address: "Berlin Mitte",
      url: "https://www.heartofgold-hostel.de/",
      directions: "https://www.google.com/maps/dir//Heart+of+Gold+Hostel+Berlin/",
      type: "Budget",
      distance: "8 min walk",
    },
    {
      name: "Metropol Hostel Berlin",
      address: "Berlin Kreuzberg",
      url: "https://www.momondo.com/hotels/berlin/Metropol-Hostel-Berlin.mhd349548.ksp",
      directions: "https://www.google.com/maps/dir//Metropol+Hostel+Berlin/",
      type: "Budget",
      distance: "10 min walk",
    },
    {
      name: "Ballhaus Berlin Hostel",
      address: "Chausseestraße 102, Berlin",
      url: "https://www.ballist-haus-berlin-hostel.de/",
      directions: "https://www.google.com/maps/dir//Ballhaus+Berlin+Hostel/",
      type: "Budget",
      distance: "11 min walk",
    },
    {
      name: "Acama Hotel & Hostel Kreuzberg",
      address: "Tempelhofer Ufer 8/9, 10963 Berlin",
      url: "https://www.booking.com/hotel/de/acama-hotel-hostel-kreuzberg.html",
      directions: "https://www.google.com/maps/dir//acama+Hotel+%26+Hostel+Kreuzberg/",
      type: "Budget",
      distance: "12 min walk",
    },
    {
      name: "36 Rooms Hostel Berlin Kreuzberg",
      address: "Spreewaldplatz 8, 10999 Berlin",
      url: "https://www.booking.com/hotel/de/36-rooms-berlin-kreuzberg.html",
      directions: "https://www.google.com/maps/dir//36+Rooms+Hostel+Berlin/",
      type: "Budget",
      distance: "15 min walk",
    },
  ];

  //
  // TICKETS
  //
  const tickets = [
    
    { type: "Regular (Jan–Feb)", price: "€120" },
    { type: "Late (Mar onwards)", price: "€150" },
    { type: "Children (12yrs - 18 yrs)", price: "€50" },
    { type: "Ugandan Delegates", price: "1,500,000 UGX" },
   
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1B3D] text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative bg-white text-[#0B1B3D] pt-32 pb-32 px-4 flex items-center justify-center"
        style={{
          backgroundImage: "url('/bbeco.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-black/20"></div>

        <div className="relative max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-3 text-black">
            Buganda Bumu European Convention
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-2 text-gray-700">
            Hosted by the Berlin Chapter in Berlin, Germany
          </p>
          <p className="text-sm md:text-base mb-4 text-gray-600">
            Celebrate our heritage, connect with the community, and experience
            an unforgettable European Convention!
          </p>
          <p className="text-blue-900 text-lg md:text-xl font-bold mb-6">
            May 22–24, 2026 | Gloria Events Center, Berlin
          </p>

          {/* COUNTDOWN */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-[#F5E6D3]/20 rounded-2xl p-3 w-20 shadow-lg border border-[#0B1B3D]"
              >
                <span className="text-2xl font-extrabold text-[#8B5E3C]">
                  {formatTime(timeLeft[unit.toLowerCase()])}
                </span>
                <span className="text-xs md:text-sm text-[#8B5E3C] uppercase">
                  {unit}
                </span>
              </div>
            ))}
          </div>

          <div className="text-[#0B1B3D] font-mono text-sm md:text-base mb-6">
            🕒 {digitalTime} | 📅 {dateString}
          </div>

          <a
            href="https://forms.gle/PaD39jWRFeZJFxFLA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-[#0B1B3D] text-white font-bold rounded-full shadow-lg hover:scale-105 hover:bg-[#1A2B5C] transition"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-grow py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CONVENTION INFO */}
          <div className="bg-[#1B2A49] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold mb-5 text-white text-center">
              Convention 2026
            </h2>
            <p className="text-2xl font-extrabold mb-4 text-center text-gray-200">
              "Preserving Heritage & Navigating Modernity in the Diaspora"
            </p>

            <ul className="text-lg space-y-2 leading-relaxed mb-6">
              <li>
                <strong>Date:</strong> May 22–24, 2026
              </li>
              <li>
                <strong>Location:</strong> Gloria Events Center,
                Markgrafenstraße 67, 10969 Berlin
              </li>
              <li>
                <strong>Activities:</strong> Cultural Workshops, Networking,
                Entertainment
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-5 text-white text-center">
              Tickets
            </h2>
            <ul className="space-y-3 text-gray-200 text-lg">
              {tickets.map((ticket, i) => (
                <li
                  key={i}
                  className="flex justify-between border-b border-gray-600 pb-2"
                >
                  {ticket.type}{" "}
                  <span className="text-yellow-400 font-semibold">
                    {ticket.price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-center mt-6">
              <a
                href="https://forms.gle/PaD39jWRFeZJFxFLA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-[#0B1B3D] text-white font-bold rounded-full shadow-lg hover:scale-105 hover:bg-[#1A2B5C] transition"
              >
                Register Now
              </a>
            </div>

            <p className="mt-4 text-yellow-300 text-sm text-center font-semibold">
              Payment deadline for Ugandan Delegates:{" "}
              <span className="underline">15 February 2026</span>
            </p>
          </div>

          {/* PAYMENT METHODS */}
          <div className="bg-[#1B2A49] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition md:col-span-2">
            <h2 className="text-3xl font-bold mb-5 text-white text-center">
              Payment Methods
            </h2>

            <div className="space-y-6 text-gray-200">
              {/* Germany Bank + PayPal */}
              <div className="bg-[#0B1B3D] p-4 rounded-xl border border-white-400">
                <h3 className="text-yellow-400 font-bold mb-2">🏦 Germany Bank</h3>
                <p>
                  Bank: <strong>Finom</strong>
                </p>
                
                  Account Name:{" "}
                  {/* <strong>
                    Ugandische Deutsche Gemeinde Berlin-Brandenburg e. V.
                  </strong>
                  <p>
                  IBAN: <strong>DE51 1001 8000 0790 3176 89</strong>
                </p> */}
                
                <p>
                  IBAN: <strong>DE51 1001 8000 0790 3176</strong>
                </p>
                <p>
                  BIC: <strong>FNOMDEB2</strong>
                </p>

                <div className="my-4 border-t border-gray-500"></div>

                <h3 className="text-yellow-400 font-bold mb-2">💻 PayPal</h3>
                <p>frankmperwe@gmail.com</p>
                <p className="text-xs italic text-yellow-300 mt-1">
                  ⚠️ Include purpose: <strong>BBECO BERLIN 2026</strong>
                </p>
              </div>


              {/* Netherlands */}
              <div className="bg-[#0B1B3D] p-4 rounded-xl border border-white-400">
                <h3 className="text-yellow-400 font-bold mb-2">
                  🏦 Netherlands Account
                </h3>
                <p>
                  Bank: <strong>Rabobank</strong>
                </p>
                <p>
                  Account Name:{" "}
                  <strong>STICHTING BUGANDA RHINELANDS</strong>
                </p>
                <p>
                  IBAN: <strong>NL76 RABO 0162 897189 </strong>
                </p>
                <p>
                  Swift Code: <strong>RABONL2U</strong>
                </p>
                <p>
                  <strong>Theofrankelhof 46, 1087KD, Amsterdam</strong>
                </p>
              </div>

              {/* Uganda */}
              <div className="bg-[#0B1B3D] p-4 rounded-xl border border-white-400">
                <h3 className="text-yellow-400 font-bold mb-2">
                  🏦 Uganda Account
                </h3>
                <p>
                  Bank: <strong>Centenary Bank Rubaga Branch</strong>
                </p>
                <p>
                  Account Name: <strong>Gwanika lya Buganda Ministry of local government</strong>
                </p>
                <p>
                  Account No: <strong>3100046659</strong>
                </p>

                <div className="mt-4 p-3 bg-yellow-300/10 border border-white-300 rounded-lg">
                  <p className="text-yellow-300 font-semibold">
                    Uganda Delegates:
                    <br />
                    Please send your payment records to{" "}
                    <span className="underline">bbumugermany@gmail.com</span>
                    <br />
                    or WhatsApp Linda on{" "}
                    <span className="underline">+31 6 85740954</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-12 max-w-7xl mx-auto flex justify-center gap-4">
          <button
            onClick={() => setActiveFilter("hotels")}
            className={`px-6 py-2 rounded-full font-bold ${
              activeFilter === "hotels"
                ? "bg-[#8B5E3C]"
                : "bg-[#1B2A49]"
            } hover:bg-[#8B5E3C] transition`}
          >
            Hotels
          </button>

          <button
            onClick={() => setActiveFilter("hostels")}
            className={`px-6 py-2 rounded-full font-bold ${
              activeFilter === "hostels"
                ? "bg-[#8B5E3C]"
                : "bg-[#1B2A49]"
            } hover:bg-[#8B5E3C] transition`}
          >
            Hostels
          </button>
        </div>

        {/* HOTEL / HOSTEL LIST */}
        <section className="mt-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeFilter === "hotels" ? sortedHotels : hostels).map(
              (place, i) => (
                <div
                  key={i}
                  className={`bg-[#1B2A49] rounded-xl shadow-md p-5 border ${
                    place.recommended
                      ? "border-yellow-400 shadow-yellow-400"
                      : "border-gray-600"
                  } hover:shadow-lg hover:bg-[#8B5E3C] hover:text-white transition-all`}
                >
                  <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                    {place.name}
                    {place.recommended && (
                      <span className="text-yellow-300 text-xs font-bold bg-[#0B1B3D] px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
                  </h3>

                  <p className="text-gray-300 mb-2">{place.address}</p>
                  <p className="text-gray-400 text-sm mb-3">
                    {place.type} • {place.distance}
                  </p>

                  <div className="flex justify-between">
                    <a
                      href={place.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 font-semibold hover:underline"
                    >
                      Website
                    </a>
                    <a
                      href={place.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 font-semibold hover:underline"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

{/* CONTACT SECTION (POLISHED) */}
<section className="mt-12 bg-[#1B2A49] p-6 rounded-2xl max-w-4xl mx-auto shadow-lg">
  <h2 className="text-3xl font-bold text-center mb-4 text-white">General Inquiries</h2>

  <p className="text-center text-gray-300 mb-4">
    For inquiries, assistance, or additional information about the Buganda Bumu European Convention 2026,
    please contact our team below.
    <p className="font-semibold"> +31 6 85740954 | +49 1523 5867655 |+49 173 9399094 | +49 1520 8514008</p>
  </p>

  <p className="mt-3 italic text-yellow-300 text-center">
For formal inquiries, please write to: <strong className="text-lg">bbumugermany@gmail.com</strong>
</p>

  
  

  <div className="grid grid-cols-1 gap-6 text-gray-200">
    <div className="bg-[#0B1B3D] p-4 rounded-xl border border-gray-600">
      

      <div className="space-y-1 text-justify">
        
             </div>

      {/* VISA DISCLAIMER */}
<div className="mt-6 bg-[#0B1B3D] p-5 rounded-xl border border-yellow-400 shadow-md">
  <h3 className="text-2xl font-bold text-yellow-300 mb-3 text-center">
    Visa Disclaimer
  </h3>

  <p className="text-gray-200 text-sm leading-relaxed mb-4 text-justify">
    
    BBECO and UGDBB e.V. are solely the organisers of this convention and do not provide visa assistance, sponsorship, or guarantees of visa approval. 
    All participants are responsible for obtaining the appropriate German (Schengen) visa and for meeting all entry requirements. 
    Participants travelling from Uganda require a visa to enter Germany.
  </p>

  <p className="text-gray-200 text-sm mb-2">
    For official visa information, please visit the German Federal Foreign Office:
  </p>
  <a
    href="https://www.auswaertiges-amt.de/en/visa-service"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-300 font-semibold hover:underline break-all"
  >
    https://www.auswaertiges-amt.de/en/visa-service
  </a>

  <p className="text-gray-200 text-sm mt-4 mb-2">
    For applicants in Uganda, please consult the German Embassy in Kampala:
  </p>
  <a
    href="https://kampala.diplo.de"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-300 font-semibold hover:underline break-all"
  >
    https://kampala.diplo.de
  </a>
</div>

     <p className="mt-3 italic text-yellow-300 text-justify">
For formal inquiries, please write to: <strong className="text-lg">bbumugermany@gmail.com</strong>
</p>
    </div>
  </div>
</section>
</main>


      <Footer />
    </div>
  );
}
