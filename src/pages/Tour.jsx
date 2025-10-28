import React from "react";
import Layout from "../components/Layout";

export default function Tour() {
  const attractions = [
    {
      img: "/branden.jpg",
      title: "Brandenburg Gate",
      desc: "A symbol of unity and peace, Pariser Platz, 10117 Berlin.",
      link: "https://www.visitberlin.de/en/brandenburg-gate",
      mapsQuery: "Brandenburg+Gate+Berlin",
    },
    {
      img: "/island.jpg",
      title: "Museum Island",
      desc: "UNESCO World Heritage site on the Spree River.",
      link: "https://www.smb.museum/en/museums-institutions/museum-island-berlin/home/",
      mapsQuery: "Museum+Island+Berlin",
    },
    {
      img: "/tv.jpg",
      title: "Berlin TV Tower (Fernsehturm)",
      desc: "Panoramic views from Panoramastraße 1A, 10178 Berlin.",
      link: "https://www.tv-turm.de/en/",
      mapsQuery: "Fernsehturm+Berlin",
    },
    {
      img: "/house.jpg",
      title: "Reichstag Building",
      desc: "German Parliament, Platz der Republik 1, 11011 Berlin.",
      link: "https://www.bundestag.de/en/visittheBundestag/dome/registration-245686",
      mapsQuery: "Reichstag+Berlin",
    },
    {
      img: "/checkpoint1.jpg",
      title: "Checkpoint Charlie",
      desc: "Historic Cold War border crossing, Friedrichstraße 43-45.",
      link: "https://www.mauermuseum.de/en/",
      mapsQuery: "Checkpoint+Charlie+Berlin",
    },
    {
      img: "/palace.jpg",
      title: "Charlottenburg Palace",
      desc: "Baroque palace, Spandauer Damm 20-24, 14059 Berlin.",
      link: "https://www.spsg.de/en/palaces-gardens/object/charlottenburg-palace/",
      mapsQuery: "Charlottenburg+Palace+Berlin",
    },
    {
      img: "/church.jpg",
      title: "Berlin Cathedral (Berliner Dom)",
      desc: "Protestant cathedral on Museum Island.",
      link: "https://www.berlinerdom.de/",
      mapsQuery: "Berliner+Dom",
    },
    {
      img: "/holo.jpg",
      title: "Holocaust Memorial",
      desc: "Memorial to the murdered Jews of Europe, Cora-Berliner-Straße 1.",
      link: "https://www.stiftung-denkmal.de/en/memorials/the-memorial-to-the-murdered-jews-of-europe/",
      mapsQuery: "Holocaust+Memorial+Berlin",
    },
    {
      img: "/potsdam.jpg",
      title: "Potsdamer Platz",
      desc: "Modern plaza with shops and entertainment, 10785 Berlin.",
      link: "https://www.potsdamer-platz.com/en/",
      mapsQuery: "Potsdamer+Platz+Berlin",
    },
  ];

  // helper to create a Google Maps search URL that opens in a new tab
  const mapsUrl = (query) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <Layout>
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Visit Berlin</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          Welcome to Berlin — a vibrant city of history, innovation, and culture.
          Below are top attractions with official links and quick access to Google Maps.
        </p>

        {/* Attractions grid */}
        <div className="grid md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
          {attractions.map((place, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition flex flex-col"
            >
              <img
                src={place.img}
                alt={place.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-semibold text-lg text-indigo-700">{place.title}</h3>
              <p className="text-gray-600 text-sm mt-1 flex-grow">{place.desc}</p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href={place.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Official page →
                </a>

                <a
                  href={mapsUrl(place.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm border border-indigo-100 hover:bg-indigo-100"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Working Google map embed centered on Berlin */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Explore Berlin on the Map</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          The embedded map below is centered on Berlin. Use the attraction links to open specific locations
          or click the map to open Google Maps for full navigation and layers.
        </p>

        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg border">
          {/* This is a stable way to embed a map centered on Berlin */}
          <iframe
            title="Berlin map"
            src="https://www.google.com/maps?q=Berlin+Germany&z=12&output=embed"
            width="100%"
            height="520"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
            
      </section>

      {/* Transport section (unchanged but kept for completeness) */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Berlin Transport System</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Berlin’s transport is run by <strong>BVG</strong>. Below is a quick overview and links to the BVG app.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 rounded-xl shadow text-left">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="p-3 font-semibold">Mode</th>
                  <th className="p-3 font-semibold">Description & Routes</th>
                  <th className="p-3 font-semibold">Average Fare (EUR)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t">
                  <td className="p-3 font-medium">U-Bahn</td>
                  <td className="p-3">Berlin subway — frequent service across the city.</td>
                  <td className="p-3">€2.90 (AB single)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">S-Bahn</td>
                  <td className="p-3">City trains connecting suburbs and central Berlin.</td>
                  <td className="p-3">€2.90 (AB)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Trams & Buses</td>
                  <td className="p-3">Extensive tram network (east) and 24h buses. Route 100 scenic route.</td>
                  <td className="p-3">€2.90</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Day Pass</td>
                  <td className="p-3">Unlimited travel for a day (AB zone).</td>
                  <td className="p-3">€9.70</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 text-sm mt-6">
            Get the official BVG Fahrinfo and ticketing:{" "}
            <a
              href="https://www.bvg.de/en/tickets-tariffs/bvg-apps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              BVG Fahrinfo App (web)
            </a>{" "}
            • App Store • Google Play
          </p>
        </div>
      </section>
    </Layout>
  );
}
