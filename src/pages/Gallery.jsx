import React from "react";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";

const imageFiles = [
  "holo.jpg",
  "house.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
];

export default function Gallery() {
  const images = imageFiles.map((file) => `/gallery/${file}`);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-4 md:px-12 py-10 bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
