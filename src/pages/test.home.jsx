import React from "react";
import Layout from "../components/Layout";

export default function About() {
  const committeeMembers = [
    { name: "Owek Sam Sekajjugo", role: "Rhinelands", image: "/sam.png" },
    { name: "Owek Nelson Mugenyi", role: "Scandinavia", image: "/nelson.png" },
    { name: "Owek Ssalongo Kibuuka", role: "United Kingdom", image: "/kibuuka.png" },
    { name: "Linda Sekayita", role: "Chairperson (Rhinelands)", image: "/linda.png" },
    { name: "Frank Kyambadde", role: " Vice-Chairperson (Germany)", image: "/frank.png" },
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

      {/* ================= HERO BANNER ================= */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
            BUGANDA BUMU EUROPEAN CONVENTION
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            The premier gathering of the Buganda diaspora across Europe,
            uniting leadership, culture, and development for a stronger global community.
          </p>
        </div>
      </section>

      {/* ================= ABOUT BBECO ================= */}

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-justify">
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-6">
            About BBECO
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            BBECO is a biennial cultural and community convention bringing together members of the Baganda community and their partners across Europe to strengthen engagement with the Buganda Kingdom, preserve cultural heritage, and promote unity and sustainable development within the diaspora.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            This convention follows the inaugural event held in London, United Kingdom, in September 2024 under the theme “Preserving Heritage & Navigating Modernity in the Diaspora.” Several topics are addressed including but not limited to educational training, entrepreneurship, the role of culture and identity in a multicultural world, marriage and modernity, and building relationships across communities.
          </p>

        </div>
      </section>


      {/* ================= MESSAGE FROM LEADERSHIP ================= */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Katikkiro */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/5">
              <img
                src="/cp.jpg"
                alt="Katikkiro of Buganda"
                className="w-full h-[400px] rounded-xl shadow-xl object-cover"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">
                Message from the Katikkiro
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                “On behalf of the Kingdom of Buganda, I commend the organisers
                of BBECO Germany 2026 for their dedication to unity,
                cultural preservation, and community advancement.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I encourage all Baganda and friends of Buganda across Europe
                to participate actively as we strengthen our global presence.”
              </p>
              <p className="font-semibold text-indigo-700">
                Rt. Hon. Charles Peter Mayiga<br />
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
                className="w-full h-[400px] rounded-xl shadow-xl object-cover"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">
                Message from the Minister of Local Govt.
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                “I commend the BBECO Germany 2026 team for promoting unity,
                cultural pride, and development among the diaspora in Europe.”
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Let us strengthen ties with the Kingdom for a brighter future.”
              </p>
              <p className="font-semibold text-indigo-700">
                Owek Joseph Kawuki Balikuddembe<br />
                Minister of Local Government, Royal Tours & Diaspora Affairs
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= COMMITTEE ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
            Hosts & Organising Committee
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md p-6 text-center
                         transition-all duration-300 transform
                         hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 md:w-44 md:h-44 rounded-full mx-auto mb-5
                           object-cover border-4 border-yellow-400"
                onError={(e) => {
                  e.target.src = "/flag.jpg";
                }}
              />
              <h3 className="text-lg font-semibold group-hover:text-yellow-600">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-sm text-gray-500 mt-2">{member.role}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= EVENT DETAILS ================= */}
      <section className="bg-white py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-indigo-50 rounded-xl p-10 shadow-md">
          <p className="text-xl font-semibold text-indigo-700 mb-6 text-center">
            Theme: “Preserving Heritage & Navigating Modernity in the Diaspora”
          </p>

          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li><strong>Date:</strong> May 22–24, 2026</li>
            <li><strong>Location:</strong> Gloria Events Center, Berlin, Germany</li>
            <li><strong>Activities:</strong> Cultural Workshops, Networking, Investment Forums, Youth Engagement Sessions, Entertainment & Gala Night</li>
            <li><strong>More details coming soon...</strong></li>
          </ul>
        </div>
      </section>

    </Layout>
  );
}