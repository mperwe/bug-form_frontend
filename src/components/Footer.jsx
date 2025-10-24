import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-16">
      <p className="text-sm">
        © {new Date().getFullYear()} BBECO Berlin Chapter. All rights reserved.
      </p>
      <p className="text-xs mt-2 opacity-70">
        Built with ❤️ for the Buganda community.
      </p>
    </footer>
  );
}
