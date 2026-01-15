// app/layout.js
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "./Componet/MainLayout/Navber";
import Footer from "./Componet/MainLayout/Footer/Footer";
import FloatingChat from './Componet/MainLayout/FloatingChat/FloatingChat';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Link from 'next/link';


import { ToastContainer } from 'react-toastify';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "MANS Packaging - Premium Packaging Solutions",
  description: "MANS Packaging offers high-quality packaging solutions for businesses of all sizes. Contact us for custom packaging needs.",
  keywords: ["packaging dhaka", "custom boxes bangladesh", "MANS packaging", "industrial packaging"],
};



export default async function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      {/* CHANGED: Wrap the body with the new client component and pass the session prop */}
      <head>
        {/* The main GTM Script goes here (as we discussed before) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFJSN3JD');`}
        </Script>
      </head>
      <body suppressHydrationWarning className={`${montserrat.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFJSN3JD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* Top Info Bar */}
        <div className="bg-linear-to-r from-blue-800 to-purple-700 text-white py-2 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mb-2 md:mb-0">
              <div className="flex md:text-xs lg:text-base text-[4px] items-center gap-1">
                <FaPhone className="text-blue-300" />
                <span>+8801787-108216</span>
              </div>
              <div className="flex md:text-xs lg:text-base text-[4px] items-center gap-1">
                <FaEnvelope className="text-blue-300" />
                <span>contact@manspackaging.com</span>
              </div>
              <div className="flex md:text-xs lg:text-base text-[4px] items-center gap-1">
                <FaMapMarkerAlt className="text-blue-300" />
                <span>Sonir akhra, mridha bari road, Dhaka-1362</span>
              </div>
            </div>

            <div className="flex md:gap-4 gap-8 justify-between">
              <Link
                href="https://www.facebook.com/manspacking"
                className="bg-white p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebook className="text-blue-800 md:text-xs lg:text-base text-[5px] hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/manspackaging/"
                className="bg-white p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <FaLinkedin className="text-blue-800 md:text-xs lg:text-base text-[5px] hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/manspackaging/"
                className="bg-white p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <CiInstagram className="text-blue-800 md:text-xs lg:text-base text-[5px] hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <header className="sticky top-0 z-50 bg-white">
          <div className="max-w-7xl mx-auto">
          </div>
        </header>
        <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
          <ToastContainer />
          <Navbar />
          {children}
        </main>
        <FloatingChat />
        <Footer />
      </body>

    </html>
  );
}