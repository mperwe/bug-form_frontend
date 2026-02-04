import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 9 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    { src: "/pic5.jpg", alt: "Convention Pic 1" },
    { src: "/pic2.jfif", alt: "Convention Pic 2" },
    { src: "/pic3.jfif", alt: "Convention Pic 3" },
    { src: "/pic5.jpg", alt: "Convention Pic 4" },
    { src: "/pic3.jfif", alt: "Convention Pic 5" },
    { src: "/pic5.jpg", alt: "Convention Pic 6" },
    { src: "/pic5.jpg", alt: "Convention Pic 7" },
    { src: "/pic3.jfif", alt: "Convention Pic 8" },
    { src: "/pic5.jpg", alt: "Convention Pic 9" },
    { src: "/pic3.jfif", alt: "Convention Pic 10" },
  ];

  const sponsors = [1, 2, 3, 4, 5];

  return (
    <Layout>
      {/* ================= INTRO ================= */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
            BBECO  2026
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Preserving Heritage & Navigating Modernity in the Diaspora
          </p>
        </div>
      </section>

      {/* ================= ACTIVITIES PROGRAM ================= */}
      <section className="py-20 bg-gray-400">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">
          Activities Program
        </h2>
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 text-lg">
          <div>
            <span className="font-semibold">22 May 2026, Friday:</span> Guest Arrivals, Tour
          </div>
          <div>
            <span className="font-semibold">23 May 2026, Saturday:</span> Registration, Workshops, Opening Ceremony, Entertainment with an Artist
          </div>
          <div>
            <span className="font-semibold">24 May 2026, Sunday:</span> Children & Youth Conference, Closing & Grand Dinner, Dance
          </div>
          <div>
            <span className="font-semibold">25 May 2026, Monday:</span> Self-Guided Tours, Departure
          </div>
        </div>
      </section>

      {/* ================= IMAGE CAROUSEL ================= */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">
          Event Highlight Gallery
        </h2>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-3xl shadow-xl flex items-center justify-center bg--100">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute max-h-full max-w-full transition-opacity duration-1000 ${
                  currentIndex === i ? "opacity-100" : "opacity-0"
                }`}
                style={{ objectFit: "contain" }}
              />
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full ${
                  currentIndex === i ? "bg-indigo-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO HIGHLIGHTS ================= */}
      <section className="py-20 bg-gray-700">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-12">
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

      {/* ================= SPONSORS ================= */}
      <section className="py-24 bg-white">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">
          Our Valued Sponsors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-6xl mx-auto px-6 items-center">
          {sponsors.map((s, i) => (
            <a key={i} href="#" className="grayscale hover:grayscale-0 transition">
              <img src="/pic5.jpg" alt={`Sponsor ${s}`} className="max-h-20 mx-auto" />
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
