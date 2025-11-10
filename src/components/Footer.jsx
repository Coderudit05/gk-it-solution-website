import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* ---------- Main Footer Section ---------- */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
        
        {/* ---------- Column 1: Brand ---------- */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            GK <span className="text-blue-500">IT Solutions</span>
          </h2>
          <p className="text-blue-400 italic text-base font-medium mb-3">
            A Complete IT Service Provider
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Offering reliable solutions for CCTV, Hardware, Software, and
            Networking — delivering trusted IT services across Bhopal, M.P.
          </p>
        </div>

        {/* ---------- Column 2: Quick Links ---------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-500 transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Services
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              About
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        {/* ---------- Column 3: Services ---------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>

          {/* 2-column responsive grid for services */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-500 transition cursor-pointer">
              CCTV Installation
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Hardware Supply
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Networking Solutions
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Computer Repairing
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Laptop Repairing
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Photocopier
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Printer Repairing
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              and more...
            </li>
          </ul>
        </div>

        {/* ---------- Column 4: Contact Info ---------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm mb-2">
            📍 Dolaptura, Near Bansal College, Bhopal, M.P.
          </p>
          <p className="text-gray-400 text-sm mb-2">📞 +91 8319663425</p>
          <p className="text-gray-400 text-sm mb-4">
            ✉️ gk.itsolution3425@gmail.com
          </p>

          {/* ---------- Social Icons ---------- */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500 transition text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500 transition text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} GK IT Solutions | Designed & Developed by{" "}
        <span className="text-blue-500 font-semibold">Udit Namdev</span>
      </div>
    </footer>
  );
};

export default Footer;
