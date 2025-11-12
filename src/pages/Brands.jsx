import React from "react";
import hp from "../assets/brands_img/hp.webp"
import canon from "../assets/brands_img/canon.png";
import hikvision from "../assets/brands_img/HIKVISION.webp";
import epson from "../assets/brands_img/epson.webp";
import brother from "../assets/brands_img/brother.webp";
import xerox from "../assets/brands_img/xerox.webp";
import pantum from "../assets/brands_img/pantum.webp";
import alhua from "../assets/brands_img/alhua.webp";

import { LinearGradient } from "react-text-gradients";

const BrandSection = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Computer Servicing",
      subtitle:
        "We repair and maintain desktops & laptops from leading manufacturers.",
      brands: [
        { id: 1, name: "HP", img: hp },
        { id: 2, name: "Canon", img: canon },
        { id: 3, name: "Hikvision", img: hikvision },
        { id: 4, name: "Brother", img: brother },
        { id: 5, name: "Pantum", img: pantum },
      ],
    },
    {
      id: 2,
      title: "Printer Servicing",
      subtitle:
        "We service & repair all major inkjet, and multifunction printers.",
      brands: [
        { id: 1, name: "Epson", img: epson },
        { id: 2, name: "Canon", img: canon },
        { id: 3, name: "HP", img: hp },
        { id: 4, name: "Xerox", img: xerox },
        { id: 5, name: "Brother", img: brother },
      ],
    },
    {
      id: 3,
      title: "CCTV & Security",
      subtitle: "Installation & support for surveillance systems.",
      brands: [
        { id: 1, name: "Hikvision", img: hikvision },
        { id: 2, name: "Alhua", img: alhua },
        { id: 3, name: "Pantum", img: pantum },
        { id: 4, name: "CP Plus", img: canon },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 lg:px-24 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <LinearGradient
          gradient={["to left", "#17acff ,#ff68f0"]}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          We Provide Services for These Brands
        </LinearGradient>
        
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="space-y-16 mt-20">
          {serviceCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-white">
                    {category.title.split(" ")[0]}{" "}
                  </span>
                  <span className="text-cyan-400">
                    {category.title.split(" ").slice(1).join(" ")}
                  </span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base italic">
                  {category.subtitle}
                </p>
              </div>

              {/* Brands Grid for Desktop */}
              <div className="hidden min-[600px]:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                {category.brands.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex h-24 sm:h-28 items-center justify-center bg-white rounded-lg p-4 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Infinite Scrolling for Mobile */}
              <div className="min-[600px]:hidden overflow-hidden">
                <div className="flex animate-scroll">
                  {/* First set of brands */}
                  {category.brands.map((brand) => (
                    <div
                      key={`first-${brand.id}`}
                      className="flex-shrink-0 w-32 h-24 mx-2 flex items-center justify-center bg-white rounded-lg p-3"
                    >
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {category.brands.map((brand) => (
                    <div
                      key={`second-${brand.id}`}
                      className="flex-shrink-0 w-32 h-24 mx-2 flex items-center justify-center bg-white rounded-lg p-3"
                    >
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
