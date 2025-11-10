import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Common style for all links (DRY principle)
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-4 border-blue-600 pb-2 transition-all duration-300"
      : "hover:text-blue-600 transition-colors duration-300";

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* ---------- Logo ---------- */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="GK IT Solutions"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-lg font-bold text-gray-800">
             <span className="text-blue-600">IT</span> Solutions
          </h1>
        </div>

        {/* ---------- Desktop Menu ---------- */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkStyle}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/brands" className={navLinkStyle}>
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* ---------- Mobile Menu Button ---------- */}
        <div
          className="md:hidden text-3xl text-gray-800 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>

      {/* ---------- Mobile Dropdown Menu ---------- */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0">
          <ul className="flex flex-col items-center space-y-4 py-5 text-gray-700 font-medium">
            <li onClick={toggleMenu}>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/services" className={navLinkStyle}>
                Services
              </NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/brands" className={navLinkStyle}>
                Brands
              </NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/about" className={navLinkStyle}>
                About
              </NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/contact" className={navLinkStyle}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
