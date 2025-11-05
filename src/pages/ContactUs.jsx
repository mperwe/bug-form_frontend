import React from "react";
import Layout from "../components/Layout";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-8">
          Need information or assistance? Reach out to us directly — we’re happy to help!
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:bbecoberlin@gmail.com"
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition"
          >
            <FaEnvelope className="text-indigo-600 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-sm text-gray-600">bbecoberlin@gmail.com</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/4915235867655"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition"
          >
            <FaWhatsapp className="text-green-500 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-1">WhatsApp Chat</h3>
            
          </a>

          <a
            href="https://wa.me/31685740954"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition"
          >
            <FaWhatsapp className="text-green-500 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-1">WhatsApp Chat</h3>
            
          </a>

          {/* Phone */}
          <a
            href="tel:+4915235867655"
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition"
          >
            <FaPhone className="text-indigo-600 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
            <p className="text-sm text-gray-600">+49 1523 5867655 </p>
            <p className="text-sm text-gray-600">+31 6 85740954 </p>
          </a>

          {/* Address */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
            <FaMapMarkerAlt className="text-red-500 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-1">Office Location</h3>
            <p className="text-sm text-gray-600">
              <br />
              Berlin, Germany
            </p>
            <p className="text-sm text-gray-500 mt-2">Working Hours: Mon–Fri, 9am–5pm</p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
            <FaMapMarkerAlt className="text-red-500 mb-3" size={30} />
            <h3 className="text-lg font-semibold mb-1">Office Location</h3>
            <p className="text-sm text-gray-600">
              Essaza Rhinelands<br />
             
            </p>
            <p className="text-sm text-gray-500 mt-2">Working Hours: Mon–Fri, 9am–5pm</p>
          </div>
        </div>

        {/* Optional message */}
        <p className="text-gray-700 text-sm">
          Feel free to contact us using any of the options above. We’ll respond as quickly as possible!
        </p>
      </section>
    </Layout>
  );
}
