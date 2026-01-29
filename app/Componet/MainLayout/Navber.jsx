"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Install lucide-react or use a SVG
import logo from "../../../app/manspackaginglogo.png";

const navItemsData = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "E-commerce Packaging", href: "/e-commerce-packaging" },
      { label: "Industrial Packaging", href: "/industrial" },
      { label: "Food Packaging", href: "/foodpack" },
      { label: "Garments Packaging", href: "/garmentpack" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Knowledge", href: "/knowledge" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderNavItems = (items, isMobile = false) =>
    items.map((item) => {
      if (item.children) {
        return (
          <li key={item.label} className={`relative group ${isMobile ? "w-full" : ""}`}>
            <button
              className={`flex items-center justify-between w-full px-4 py-2 text-gray-700 font-semibold transition-colors
                ${isMobile ? "hover:bg-gray-50 rounded-lg" : "hover:text-[#25A6E2] cursor-default"}
                text-sm md:text-base`}
            >
              {item.label}
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isMobile ? "" : "group-hover:rotate-180"}`} />
            </button>
            
            {/* Desktop Dropdown Wrapper */}
            <ul
              className={`${
                isMobile
                  ? "pl-4 space-y-1 hidden group-hover:block" // Or use a separate state for mobile accordion
                  : "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]"
              }`}
            >
              <div className={`${isMobile ? "" : "bg-white shadow-xl rounded-xl border border-gray-100 py-2 min-w-[220px]"}`}>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#25A6E2] hover:bg-blue-50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </li>
        );
      }

      return (
        <li key={item.label} className={isMobile ? "w-full" : ""}>
          <Link
            href={item.href}
            className={`block px-4 py-2 text-sm md:text-base font-semibold transition-all duration-300
              ${isMobile 
                ? "text-gray-700 hover:bg-gray-50 rounded-lg" 
                : "text-gray-700 hover:text-[#25A6E2] relative group"
              }`}
          >
            {item.label}
            {!isMobile && (
              <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-[#25A6E2] transition-all duration-300 group-hover:w-[calc(100%-32px)]"></span>
            )}
          </Link>
        </li>
      );
    });

  return (
    <nav className="  bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0 transition-transform hover:scale-105">
          <Image src={logo} alt="Logo" className="w-32 md:w-44 lg:w-52" priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-2">
            {renderNavItems(navItemsData)}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#25A6E2] hover:bg-blue-50 rounded-lg transition-colors"
          >
            {mobileOpen ? (
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${mobileOpen ? "max-height-screen border-b shadow-lg" : "max-h-0"}`}>
        <ul className="p-4 space-y-2">
          {renderNavItems(navItemsData, true)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;