import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { LinearGradient } from 'react-text-gradients';

import img1 from "../assets/hero_Section_Image/cctv.avif"
import img2 from "../assets/hero_Section_Image/computer.avif";
import img3 from "../assets/hero_Section_Image/photocopier.jpg";
import img4 from "../assets/hero_Section_Image/printer.avif";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Brands from "./Brands.jsx";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef();
  const leftSectionRef = useRef();
  const rightSectionRef = useRef();
  const servicesRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline();
    tl.fromTo(leftSectionRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" })
      .fromTo(rightSectionRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }, "-=1")
      .fromTo(".hero-text h1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo(".hero-text h2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .fromTo(".hero-text p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .fromTo(".hero-text button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .fromTo(".trust-indicators", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3");

    // Image grid animations
    gsap.fromTo(".image-grid .image-item", { opacity: 0, scale: 0.9, y: 20 }, {
      opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out"
    });

    // Scroll-triggered animations for sections
    gsap.fromTo(servicesRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: servicesRef.current, start: "top 80%" }
    });
    gsap.fromTo(aboutRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: aboutRef.current, start: "top 80%" }
    });
    gsap.fromTo(contactRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: contactRef.current, start: "top 80%" }
    });

    // Scroll indicator animation
    gsap.to(".scroll-indicator", { y: 10, duration: 1, repeat: -1, yoyo: true });
  }, []);

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section ref={heroRef} className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 gap-8 sm:gap-12 py-10 sm:py-12 relative overflow-hidden">
        {/* Background Elements (unchanged) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 -z-10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10"></div>

        {/* Left Section */}
        <div ref={leftSectionRef} className="flex-1 text-center md:text-left space-y-5 sm:space-y-6 relative z-10 hero-text">
          <div className="h-32 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center md:justify-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-l from-[#17acff] to-[#ff68f0] bg-clip-text text-transparent leading-tight">
              <Typewriter
                options={{
                  strings: ["GK IT Solutions", "A Complete IT Service Provider"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h1>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-2 text-center md:text-left">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent whitespace-nowrap">CCTV</span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">Hardware</span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">Software</span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">Networking</span>
          </h2>
          <p className="text-base text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
            Delivering reliable IT infrastructure, modern security systems, and software solutions that power your business with efficiency.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold group">
              <span className="flex items-center gap-2">
                Contact Us
                <span className="inline-block animate-bounce">→</span>
              </span>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 text-sm text-gray-400 trust-indicators">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900"></div>
                ))}
              </div>
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐ 4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div ref={rightSectionRef} className="flex-1 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-lg md:max-w-none relative z-10 image-grid">
          {[img1, img2, img3, img4].map((image, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer image-item">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <span className="text-white font-semibold text-sm">
                  {["CCTV Solutions", "IT Hardware", "Office Equipment", "Printing Solutions"][i]}
                </span>
              </div>
              <img src={image} alt={`Service ${i + 1}`} className="w-full h-36 sm:h-44 md:h-52 lg:h-60 object-cover transform group-hover:scale-110 transition duration-700" />
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block cursor-pointer scroll-indicator" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
          <div className="text-gray-400 text-sm flex flex-col items-center">
            <span>Scroll to explore</span>
            <div className="w-4 h-4 border-r-2 border-b-2 border-gray-400 transform rotate-45 mt-1"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div ref={servicesRef} id="services">
        <Services />
      </div>

      {/* Brands Section */}
      <div>
        <Brands />
      </div>

      {/* About Section */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Home;