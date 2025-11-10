import React from "react";
import img1 from "../assets/hero section images/cctv.avif";
import img2 from "../assets/hero section images/computer.avif";
import img3 from "../assets/hero section images/photocopier.jpg";
import img4 from "../assets/hero section images/printer.avif";
import Brands from "./Brands.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  return (
    <>
      <section className="h-[calc(100vh-80px)] bg-gray-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 gap-10">
        {/* ---------- Left Section: Text ---------- */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            GK <span className="text-blue-600">IT Solutions</span>
          </h1>

          <p className="text-blue-500 italic text-lg font-medium">
            A Complete IT Service Provider
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
            CCTV • Hardware • Software • Networking
          </h2>

          <p className="text-gray-600 max-w-md">
            Delivering reliable IT infrastructure, modern security systems, and
            software solutions that power your business with efficiency.
          </p>

          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        {/* ---------- Right Section: 4 Image Cards ---------- */}
        <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6">
          {[img1, img2, img3, img4].map((image, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={image}
                alt={`Service ${i + 1}`}
                className="w-full h-40 md:h-48 lg:h-56 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Brand Section ---------- */}
      <Brands />

      {/* ---------- Services Section ---------- */}
      <Services />

      {/* ---------- About Section ---------- */}
      <About />

      {/* ---------- Contact Section ---------- */}
      <Contact />
    </>
  );
};

export default Home;
