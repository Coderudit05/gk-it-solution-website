import React from "react";
import aboutImg from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { ShieldCheckIcon, WrenchScrewdriverIcon, PhoneIcon, CurrencyDollarIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const About = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Experienced & Certified Technicians",
      color: "cyan"
    },
    {
      icon: <WrenchScrewdriverIcon className="h-8 w-8" />,
      title: "On-site Remote Technical Support",
      color: "cyan"
    },
    {
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      title: "Affordable & Transparent Pricing",
      color: "cyan"
    },
    {
      icon: <CheckBadgeIcon className="h-8 w-8" />,
      title: "100% Customer Satisfaction Guaranteed",
      color: "cyan"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-20 relative overflow-hidden">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        {/* Glowing Lines */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-5xl w-full bg-slate-900/80 backdrop-blur-md rounded-3xl border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 p-8 md:p-12 relative z-10">
        
        {/* Header with Logo */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-cyan-400">GK IT Solutions</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              GK IT Solutions is a trusted technology service provider based in Bisalpur. 
              With vision, we specialize in delivering complete IT solutions and installations. 
              With years of experience, computer-end setup and Printer services, and more — 
              all backed by expert technical customer satisfaction.
            </p>
          </div>
          
          {/* Logo with Glow Effect */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-1 shadow-lg shadow-cyan-500/50">
              <div className="w-full h-full rounded-full bg-slate-800 border-2 border-cyan-500/50 flex items-center justify-center overflow-hidden">
                <img 
                  src={aboutImg} 
                  alt="GK IT Solutions Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Animated Glow Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="text-cyan-400 bg-slate-900 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm md:text-base leading-relaxed">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </Link>
          <Link to="/services">
            <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50 rounded-br-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default About;
