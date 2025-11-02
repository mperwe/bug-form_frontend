import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A1B3D] text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Copy & Email */}
        <div className="flex flex-col space-y-3">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Berlin Bbeco. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:bbecoberlin@gmail.com" className="hover:underline">
              bbecoberlin@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">Contact</h3>
          <p>📞 +49 1523 5867655</p>
          <p>📍 Berlin – Germany</p>
          <p>🌐 <a href="https://bbecoberlin.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">bugandaconvention.com</a></p>
        </div>

        {/* Links & Social Media */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base">
            <Link to="/visit-berlin" className="hover:underline">Visit Berlin</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>

          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
