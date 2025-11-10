import React from "react";
import { Link } from "react-router-dom";

// ---------- Import your service images ----------
import cctvImg from "../assets/services img/cctvImg .avif";

import computerImg from "../assets/services img/computerImg.webp";
import laptopImg from "../assets/services img/laptopImg.webp";
import printerImg from "../assets/services img/printerImg.webp";
import networkImg from "../assets/services img/networkImg.avif";
import hardwareImg from "../assets/services img/hardwareImg.avif";

const Services = () => {
  const services = [
    {
      id: 1,
      image: cctvImg,
      title: "CCTV Installation",
      desc: "Complete CCTV setup and maintenance for homes, offices, and businesses.",
    },
    {
      id: 2,
      image: computerImg,
      title: "Computer Repairing",
      desc: "Expert diagnosis, repair, and upgrades for all types of desktop systems.",
    },
    {
      id: 3,
      image: laptopImg,
      title: "Laptop Servicing",
      desc: "Comprehensive laptop repair, cleaning, and software optimization.",
    },
    {
      id: 4,
      image: printerImg,
      title: "Printer & Photocopier",
      desc: "Repairing, servicing, and cartridge refilling for printers and copiers.",
    },
    {
      id: 5,
      image: networkImg,
      title: "Networking Solutions",
      desc: "LAN/WAN setup, router configuration, and network troubleshooting.",
    },
    {
      id: 6,
      image: hardwareImg,
      title: "Hardware Supply",
      desc: "Providing top-quality IT hardware and accessories with installation support.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      {/* ---------- Heading ---------- */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We provide end-to-end IT services — from installation to maintenance — 
          ensuring your business runs smoothly and securely.
        </p>
      </div>

      {/* ---------- Service Cards ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* ---------- Image ---------- */}
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* ---------- Content ---------- */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              
              <Link to="/contact">
                <button className="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-all">
                  Book Service
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
