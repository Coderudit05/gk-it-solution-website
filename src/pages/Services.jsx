import React from "react";
import { Link } from "react-router-dom";
import { LinearGradient } from "react-text-gradients";
import {
  VideoCameraIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  PrinterIcon,
  WifiIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center shadow-lg shadow-cyan-500/20 w-full max-w-xs transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 border border-cyan-500/20">
      {/* Icon Wrapper */}
      <div className="mb-4 text-white bg-[#1447E6] rounded-full p-4 shadow-inner shadow-slate-900/50">
        {React.cloneElement(icon, { className: "h-16 w-16" })}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-6">{description}</p>

      {/* Button */}
      <Link to="/contact">
        <button
          className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg 
                     hover:bg-blue-700 transition-colors duration-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:ring-offset-2 focus:ring-offset-slate-800"
        >
          Book Service
        </button>
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <VideoCameraIcon />,
      title: "CCTV Installation",
      desc: "Complete CCTV setup and maintenance for homes, offices, and businesses.",
    },
    {
      id: 2,
      icon: <WrenchScrewdriverIcon />,
      title: "Computer Repairing",
      desc: "Expert diagnosis, repair, and upgrades for all types of desktop systems.",
    },
    {
      id: 3,
      icon: <ComputerDesktopIcon />,
      title: "Laptop Servicing",
      desc: "Comprehensive laptop repair, cleaning, and software optimization.",
    },
    {
      id: 4,
      icon: <PrinterIcon />,
      title: "Printer & Photocopier",
      desc: "Repairing, servicing, and cartridge refilling for printers and copiers.",
    },
    {
      id: 5,
      icon: <WifiIcon />,
      title: "Networking Solutions",
      desc: "LAN/WAN setup, router configuration, and network troubleshooting.",
    },
    {
      id: 6,
      icon: <CpuChipIcon />,
      title: "Hardware Supply and More...",
      desc: "Providing top-quality IT hardware and accessories with installation support.",
    },
  ];

  return (
    <section id="services" className="py-12 px-4 sm:px-6 md:px-16 lg:px-24 mt-16 sm:mt-20">
      {/* ---------- Heading ---------- */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <LinearGradient
          gradient={["to left", "#17acff ,#ff68f0"]}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 px-2"
        >
          Our Services
        </LinearGradient>
        <p className="text-sm sm:text-base text-[#E0E0E0] max-w-2xl mx-auto px-4">
          We provide end-to-end IT services — from installation to maintenance —
          ensuring your business runs smoothly and securely.
        </p>
      </div>

      {/* ---------- Service Cards ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
