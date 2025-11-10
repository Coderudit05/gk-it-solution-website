import React from "react";
import aboutImg from '../assets/logo.jpg'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 md:px-16 lg:px-24 mt-20 md:mt-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* ---------- Left Side: Image ---------- */}
        <div className="flex-1 relative w-full">
          <img
            src={aboutImg}
            alt="About GK IT Solutions"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-none object-cover hover:scale-105 transition-transform duration-500"
          />
          {/* Optional decorative border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-blue-500 rounded-xl -z-10 hidden md:block"></div>
        </div>

        {/* ---------- Right Side: Content ---------- */}
        <div className="flex-1 space-y-4 md:space-y-6 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About <span className="text-blue-600">GK IT Solutions</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            GK IT Solutions is a trusted technology service provider based in Bhopal, 
            delivering complete IT solutions for individuals, businesses, and institutions. 
            With years of hands-on experience, we specialize in <span className="font-semibold text-gray-800">
            CCTV installation, networking, computer and laptop repair, printer servicing,</span> 
            and more — all backed by expert technical support and customer satisfaction.
          </p>

          <ul className="text-gray-700 space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              Experienced & Certified Technicians
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              On-site & Remote Technical Support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              Affordable & Transparent Pricing
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              100% Customer Satisfaction Guaranteed
            </li>
          </ul>

          <Link to="/contact">
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
