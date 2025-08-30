"use client";

import Link from "next/link";
import Image from "next/image";
import {   useState } from "react";
import logo from "../../../app/manspackaginglogo.png";
// import useAdmin from "@/app/Hook/useAdmin";
import { useSession } from "next-auth/react";

// import useAuth from "@/app/provider/useAuth";



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
  // { label: "Login", href: "/login" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const {userRole} =useAdmin();

      const { data: session } = useSession();
  
    // console.log("session user",session?.user)
    const userRole = session?.user
    console.log("session user",userRole)

  // console.log("userRole",userRole)
//   const { user } = useAuth()
//   const [userRole, setUserRole] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//     const fetchUserRole = async () => {
//       if (user?.email) {
//         setIsLoading(true);
//         try {
//           const response = await fetch(`/api/user?email=${user.email}`);
//           const data = await response.json();
//           console.log("data.data",data.data)
//             setUserRole(data.data);
         
//         } catch (error) {
//           console.error("Failed to fetch user role:", error);
//           setUserRole(null);
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         setUserRole(null);
//       }
//     };

//     fetchUserRole();
//   }, [user]);

  // console.log(" userRole",userRole)

  const renderNavItems = (items, isMobile = false) =>
    items.map((item) => {
      if (item.children) {
        return (
          <li key={item.label} className={`relative group ${isMobile ? "" : "cursor-pointer"}`}>
            <span
              className={`block px-4 py-2 text-black  text-[8px] md:text-base ${isMobile ? "hover:bg-gray-100 rounded" : "hover:text-blue-600 transition-colors duration-300"
                }`}
            >
              {item.label}
            </span>
            <ul
              className={`${isMobile
                  ? "pl-4 mt-1 flex flex-col gap-1"
                  : "absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50"
                }`}
            >
              {renderNavItems(item.children, isMobile)}
            </ul>
          </li>
        );
      }

      return (
        <li key={item.label}>
          <Link
            href={item.href}
            className={`block px-4 text-black text-[8px] md:text-base md:w-full w-[100px] py-2 ${isMobile
                ? "hover:bg-gray-100 rounded"
                : "relative group hover:text-blue-600 transition-colors duration-300"
              }`}
          >
            {item.label}
            {!isMobile && (
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            )}
          </Link>
        </li>
      );
    });

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md ">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="w-32 md:w-44 lg:w-56" priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8 text-gray-800 font-medium">
            {renderNavItems(navItemsData)}
            {
            userRole ? <> {
              userRole.role ==="admin" ? (
                <Link href={'/admindashbord'} className="px-4 py-2 text-teal-500">{userRole.name}</Link>
              ) : (
                 <Link href={'/'} className="px-4 py-2 text-teal-500">{userRole.name}</Link>
              )
            }</> : <Link href="/login" className="px-4 py-2">
                  Login
                </Link>
           }

          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition-all"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div
            className={`absolute md:w-[300px] w-[200px] right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform ${mobileOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
              }`}
          >
            <ul className="flex  flex-col p-2">{renderNavItems(navItemsData, true)}</ul>
           <div className="p-2">
            {
            userRole ? <> {
              userRole.role ==="admin" ? (
                <Link href={'/admindashbord'} className="px-4 py-3 text-teal-500">{userRole.name}</Link>
              ) : (
                 <Link href={'/'} className="px-4 py-3 text-teal-500">{userRole.name}</Link>
              )
            }</> : <Link href="/login" className="px-4 py-3">
                  Login
                </Link>
           }
           </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
