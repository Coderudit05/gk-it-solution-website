import React from "react";
import hp from "../assets/brands image/hp.avif";
import canon from "../assets/brands image/canon.png";
import hikvision from "../assets/brands image/HIKVISION.webp";
import epson from "../assets/brands image/epson.webp";
import brother from "../assets/brands image/brother.jpg";
import xerox from "../assets/brands image/xerox.jpg";
import pantum from "../assets/brands image/pantum.webp";
import alhua from "../assets/brands image/alhua.webp";

const BrandSection = () => {
  const brands = [
    { id: 1, name: "HP", img: hp }, //
    { id: 2, name: "Canon", img: canon },//
    { id: 3, name: "Hikvision", img: hikvision },//
    { id: 4, name: "Epson", img: epson },//
    { id: 5, name: "Brother", img: brother },//
    { id: 6, name: "Xerox", img: xerox },//
    { id: 7, name: "Pantum", img: pantum },//
    { id: 8, name: "Alhua", img: alhua },//
    { id: 9, name: "CP Plus", img: canon },//
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 md:px-16 lg:px-24 text-center mt-20 md:mt-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-10 px-2">
        We Offer Service & Support For These Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center max-w-7xl mx-auto">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-full items-center justify-center bg-white shadow-md rounded-lg p-3 hover:shadow-xl transition transform hover:scale-105"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
