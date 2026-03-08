import React from "react";
import Layout from "../components/Layout";

export default function About() {

  const committeeMembers = [
    { name: "Owek Sam Sekajjugo", role: "Rhinelands", image: "/sam.png" },
    { name: "Owek Nelson Mugenyi", role: "Scandinavia", image: "/nelson.png" },
    { name: "Owek Ssalongo Kibuuka", role: "United Kingdom", image: "/kibuuka.png" },
    { name: "Omuk Linda Sekayita", role: "Chairperson, BBECO Organising Committee (Rhinelands)", image: "/linda.png" },
    { name: "Frank Kyambadde", role: "Vice-Chairperson (Germany)", image: "/frank.png" },
    { name: "Stephen Bwete", role: "Chairman UGDBB e.V (Germany)", image: "/steve.png" },
    { name: "Precious Fisher", role: "Finance Lead (Germany)", image: "/precious.png" },
    { name: "Priscilla Nakawesi", role: "Welfare (Germany)", image: "/priscilla.png" },
    { name: "Florence Nasuuna", role: "Youth Lead (Germany)", image: "/flo.png" },
    { name: "Chris Rightho", role: "Transport & Logistics (Germany)", image: "/chris.png" },
    { name: "Communication - Lead", role: "Communication (United Kingdom)", image: "/flag.jpg" },
    { name: "Protocol & Coordination", role: "Protocol (Rhinelands)", image: "/flag.jpg" },
  ];

  return (
    <Layout>

      {/* ABOUT BBECO */}
      <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-justify">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 tracking-tight">
            About BBECO
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            BBECO is a biennial cultural and community convention bringing together
            members of the Baganda community and their partners across Europe to
            strengthen engagement with the Buganda Kingdom, preserve cultural
            heritage, and promote unity and sustainable development within the diaspora.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            This convention follows the inaugural event held in London,
            United Kingdom in September 2024 under the theme
            “Preserving Heritage & Navigating Modernity in the Diaspora.”
            Several topics are addressed including educational training,
            entrepreneurship, culture and identity in a multicultural world,
            marriage and modernity, and building relationships across communities.
          </p>
        </div>
      </section>

      {/* MESSAGE FROM LEADERSHIP */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Katikkiro */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/5">
              <img
                src="/cp.jpg"
                alt="Katikkiro of Buganda"
                className="w-full h-[400px] rounded-xl shadow-2xl object-cover border-4 border-indigo-300"
              />
            </div>

            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
                Message from the Katikkiro
              </h2>

              <p className="text-lg leading-relaxed mb-4 italic text-gray-800">
                “On behalf of the Kingdom of Buganda, I commend the organisers
                of BBECO Germany 2026 for their dedication to unity,
                cultural preservation, and community advancement.
              </p>

              <p className="text-lg leading-relaxed mb-4 italic text-gray-800">
                I encourage all Baganda and friends of Buganda across Europe
                to participate actively as we strengthen our global presence.”
              </p>

              <p className="font-semibold text-indigo-700 mt-4">
                Rt. Hon. Charles Peter Mayiga
                <br />
                Katikkiro of Buganda
              </p>
            </div>
          </div>

          {/* Minister */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/5">
              <img
                src="/kawuki.png"
                alt="Owek Joseph Kawuki"
                className="w-full h-[400px] rounded-xl shadow-2xl object-cover border-4 border-yellow-400"
              />
            </div>

            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
                Message from the Minister of Local Govt.
              </h2>

              <p className="text-lg leading-relaxed mb-4 italic text-gray-800">
                “I commend the BBECO Germany 2026 team for promoting unity,
                cultural pride, and development among the diaspora in Europe.”
              </p>

              <p className="text-lg leading-relaxed mb-4 italic text-gray-800">
                Let us strengthen ties with the Kingdom for a brighter future.”
              </p>

              <p className="font-semibold text-indigo-700 mt-4">
                Owek Joseph Kawuki Balikuddembe
                <br />
                Minister of Local Government, Royal Tours & Diaspora Affairs
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* COMMITTEE */}
      <section className="bg-gradient-to-r from-indigo-50 via-white to-yellow-50 py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-700">
            Hosts & Organising Committee
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg p-6 text-center transition-transform duration-300 transform hover:-translate-y-3 hover:shadow-3xl hover:scale-105"
            >
              <div className="relative mx-auto w-40 h-40 md:w-44 md:h-44 mb-5 rounded-full overflow-hidden border-4 border-gradient-to-tr from-yellow-400 via-pink-400 to-indigo-500 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "/flag.jpg"; }}
                />
              </div>

              <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors">
                {member.name}
              </h3>

              {member.role && (
                <p className="text-sm text-gray-500 mt-2">
                  {member.role}
                </p>
              )}

              {member.role?.includes("Chairperson") && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full font-bold">
                  Lead
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BBECO GENERAL INFORMATION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-700">
              BBECO General Information
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Registration & Payment */}
          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-gradient-to-tr from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Registration
              </h3>

              <p className="text-gray-700">
                Registration is not the same as payment. Registering simply
                signals interest in attending the convention.
              </p>

              <p className="text-gray-700 mt-3">
                Only participants who complete the full payment will qualify
                as official delegates to attend the event.
              </p>
            </div>

            <div className="bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Payment
              </h3>

              <p className="text-gray-700 mb-4">
                Full payment of the BBECO convention fee grants access to the
                three-day gathering in Berlin from Friday 22 May 2026
                to Sunday 24 May 2026.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Conference sessions</li>
                <li>Sunday closing ceremony & grand dinner</li>
                <li>Saturday all-night Kasiki entertainment</li>
                <li>Artist performances</li>
              </ul>

              <p className="text-gray-600 mt-4 text-sm">
                Accommodation, Berlin tour, and additional meals are not included.
              </p>
            </div>

          </div>

          {/* Venue */}
          <div className="mt-16 bg-gradient-to-tr from-indigo-50 to-indigo-100 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Venue
            </h3>

            <p className="font-semibold">Gloria Event Center</p>
            <p className="text-gray-700 mb-4">
              Markgrafenstrasse 67, 10969 Berlin
            </p>

            <p className="text-gray-700">
              BBECO 2026 will be hosted at Gloria Event Center, a centrally
              located venue near Checkpoint Charlie and easily accessible
              via Kochstraße U-Bahn station.
            </p>
          </div>

          {/* Accommodation */}
          <div className="mt-16 bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-200 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-indigo-700 mb-6">
              Accommodation
            </h3>

            <p className="text-gray-700 mb-6">
              The venue does not provide accommodation, but many hotels,
              hostels, and apartments are available nearby.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="font-semibold text-lg">
                Mondrian Suites Berlin Checkpoint Charlie
              </p>

              <p className="text-gray-700 mt-2">
                Email: Info@mondriansuites.com
              </p>

              <p className="text-gray-700">
                Booking Code: <strong>Inter26</strong>
              </p>

              <h4 className="font-semibold mt-4 mb-2">
                Discounted Prices
              </h4>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Single: €240 per night</li>
                <li>Double: €259 (€130 per person)</li>
                <li>Triple: €309 (€103 per person)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </Layout>
  );
}