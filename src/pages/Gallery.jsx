import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/pic7.jfif", alt: "Convention Pic 7" },
     { src: "/pic8.jfif", alt: "Convention Pic 8" },
      { src: "/pic2.jfif", alt: "Convention Pic 2" },
    { src: "/pic3.jfif", alt: "Convention Pic 3" },
    { src: "/pic5.jpg", alt: "Convention Pic 4" },
    { src: "/pic3.jfif", alt: "Convention Pic 5" },
    { src: "/pic6.jfif", alt: "Convention Pic 6" },
    { src: "/pic6.jfif", alt: "Convention Pic 6" },
    { src: "/pic3.jfif", alt: "Convention Pic 3" },
    { src: "/pic5.jpg", alt: "Convention Pic 4" },
    { src: "/pic3.jfif", alt: "Convention Pic 5" },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Layout>
      {/* ================= ACTIVITIES PROGRAM ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 text-center mb-14">
            Convention Program Overview
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-3xl shadow-xl overflow-hidden">
              <thead className="bg-indigo-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg md:text-xl font-semibold">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-lg md:text-xl font-semibold">
                    Day
                  </th>
                  <th className="px-6 py-4 text-left text-lg md:text-xl font-semibold">
                    Activities
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-indigo-50 transition">
                  <td className="px-6 py-4">22nd May 2026</td>
                  <td className="px-6 py-4">Friday</td>
                  <td className="px-6 py-4">
                    Arrival and registration of delegates, welcome and
                    hospitality, city tours and cultural exposure,
                    community interaction, informal evening social gathering
                  </td>
                </tr>
                <tr className="hover:bg-indigo-50 transition">
                  <td className="px-6 py-4">23rd May 2026</td>
                  <td className="px-6 py-4">Saturday</td>
                  <td className="px-6 py-4">
                    Official opening ceremony, cultural opening and keynote
                    address, diaspora dialogue & investment forum, thematic
                    sessions (Health, Education, Innovation & Leadership),
                    evening entertainment and networking
                  </td>
                </tr>
                <tr className="hover:bg-indigo-50 transition">
                  <td className="px-6 py-4">24th May 2026</td>
                  <td className="px-6 py-4">Sunday</td>
                  <td className="px-6 py-4">
                    Academic & policy discussions, extended youth & children
                    engagement sessions, address by Buganda Prime Minister,
                    convention resolutions & closing session, cultural dinner
                    & farewell celebration
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= IMAGE CAROUSEL ================= */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">
          Event Highlight Gallery
        </h2>

        <div className="max-w-6xl mx-auto px-6">
          <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  currentIndex === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentIndex === i
                    ? "bg-indigo-700 scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO HIGHLIGHTS ================= */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-indigo-200 text-center mb-12">
          Video Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          <iframe
            className="aspect-video rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/tG-Kamb1eQo"
            title="BBECO Highlight 1"
            allowFullScreen
          />
          <iframe
            className="aspect-video rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/kItmJ63DOF4"
            title="BBECO Highlight 2"
            allowFullScreen
          />
          <iframe
            className="aspect-video rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/b-cBkJiXfMI"
            title="BBECO Highlight 3"
            allowFullScreen
          />
        </div>
      </section>

      {/* ================= SPONSORS (COMMENTED OUT) ================= */}
      {/*
      <section className="py-24 bg-white">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">
          Our Valued Sponsors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-6xl mx-auto px-6 items-center">
          {sponsors.map((s, i) => (
            <img
              key={i}
              src="/pic5.jpg"
              alt={`Sponsor ${s}`}
              className="max-h-20 mx-auto grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>
      */}
    </Layout>
  );
}
