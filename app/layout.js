import { Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "./Componet/MainLayout/Navber";
import Footer from "./Componet/MainLayout/Footer/Footer";
import FloatingChat from './Componet/MainLayout/FloatingChat/FloatingChat';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Link from 'next/link';
// import AuthProvider from './provider/AuthProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "MANS Packaging - Premium Packaging Solutions",
  description: "MANS Packaging offers high-quality packaging solutions for businesses of all sizes. Contact us for custom packaging needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {/* Top Info Bar */}
        <div className="bg-gradient-to-r from-blue-800 to-purple-700 text-white py-2 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mb-2 md:mb-0">
              <div className="flex items-center gap-1">
                <FaPhone className="text-blue-300" size={12} />
                <span>+8801787-108216</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEnvelope className="text-blue-300" size={12} />
                <span>contact:manspacking@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-blue-300" size={12} />
                <span>Sonir akhra, mridha bari road, Dhaka-1362</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="https://www.facebook.com/manspacking" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebook className="text-blue-300 hover:text-white transition-colors" size={16} />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/manspackaging/" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <FaLinkedin className="text-blue-300 hover:text-white transition-colors" size={16} />
              </Link>
              <Link 
                href="https://www.instagram.com/manspackaging/" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <CiInstagram className="text-blue-300 hover:text-white transition-colors" size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Header */}
        <header className="sticky top-0 z-50 bg-white ">
          <div className="max-w-7xl mx-auto">
            <Navbar />
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
         {/* <AuthProvider> */}
           {children}
         {/* </AuthProvider> */}
        </main>

        {/* Floating Chat Component */}
        <FloatingChat />
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}