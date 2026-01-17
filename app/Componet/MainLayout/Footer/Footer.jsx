import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaTiktok } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import photo1 from "../../../assets/MansPackaging2.png";
import Link from 'next/link';
import Image from 'next/image';


export const metadata={
    title: `Mans Packaging BD`,
    description: 'Packaging is the science, art, and technology of enclosing or protecting products for distribution, storage, sale, and use - Mans Packaging BD',
}
const Footer = () => {
    return (
        <div>
            <footer className="bg-linear-to-b from-[#0F172A] to-[#1E293B] text-gray-300 py-10">
                <div className="max-w-7xl mx-auto px-4 lg:grid lg:grid-cols-12 gap-10">

                    {/* Logo & Description */}
                    <div className="text-center lg:col-span-5 border-b lg:border-b-0 lg:border-r px-5 pb-6 lg:pb-0">
                        {/* <img src={photo1} className="w-40 mx-auto" alt="Mans Packaging" /> */}
                        <Image
                            src={photo1}
                            className="w-40 mx-auto"
                            alt="Mans Packaging"
                        />
                        <p className="mt-4 text-xs lg:text-base text-gray-400 leading-6">
                            Mans Packaging is a paper-based packaging manufacturing company in Bangladesh. We provide packaging service for Food, Cosmetics, Ecommerce, Jewelry, Ceramics, Glassware’s, Pharmaceuticals, Bakery & Pastry, Agriculture & more.
                        </p>
                        <p className="mt-4 text-xs md:text-base font-semibold text-white">CONNECT WITH US</p>
                        <div className="flex justify-center space-x-5 mt-4 ">
                            <a href="https://www.facebook.com/manspacking" className="text-blue-500 hover:scale-110 transition">
                                <FaFacebookF size={22} />
                            </a>
                            <a href="https://www.linkedin.com/company/manspackaging/" className="text-blue-700 hover:scale-110 transition">
                                <FaLinkedinIn size={22} />
                            </a>
                            <a href="https://www.instagram.com/manspackaging/" className="text-pink-500 hover:scale-110 transition">
                                <FaInstagram size={22} />
                            </a>
                            <a href="https://www.pinterest.com/manspacking/" className="hover:scale-110 transition">
                                <FaPinterest size={22} />
                            </a>
                            <a href="https://www.youtube.com/@MansPackaging" className="hover:scale-110 transition">
                                <IoLogoYoutube size={22} />
                            </a>
                            <a href="https://www.tiktok.com/@mans.packaging" className="hover:scale-110 transition">
                                <FaTiktok size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="lg:col-span-4 px-5 mt-8 lg:mt-0">
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4 items-center">
                                <FaPhoneAlt size={20} className="text-blue-400" />
                                <div>
                                    <p className="text-gray-400 text-sm">Tel</p>
                                    <p className="text-white font-medium text-xs md:text-base">+8801787-108216</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaEnvelope size={20} className="text-blue-400" />
                                <div>
                                    <p className="text-gray-400 text-xs md:text-base">Mail</p>
                                    <p className="text-white font-medium text-xs md:text-base">contact@manspackaging.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaMapMarkerAlt size={20} className="text-blue-400" />
                                <div>
                                    <p className="text-gray-400 text-xs md:text-base">Address</p>
                                    <p className="text-white font-medium text-xs md:text-base">
                                        Sonir Akhra, Mridha Bari Road, Dhaka-1362
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="mt-6 h-48 lg:h-56 rounded-lg overflow-hidden border border-[#25AAE1]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.5855444398253!2d90.45197649798642!3d23.706572301638943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1751125692204!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            />
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className=" lg:col-span-3 px-5 text-center lg:text-left mt-8 lg:mt-0 lg:border-l">
                        <p className="font-semibold text-center text-white mb-4">USEFUL LINKS</p>
                        <ul className=" text-center flex flex-col gap-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Security</a></li>
                            <li><Link href="/contactus" className="hover:text-white">Contact Us</Link></li>
                            <li><Link href="/aboutus" className="hover:text-white">About Us</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/* Bottom bar */}
            <div className="bg-[#1E293B] border-t border-gray-700">
                <p className="py-4 text-center text-[8px]  md:text-xs text-gray-500">
                    &copy; 2025 Mans Packaging | Developed by{" "}
                    <a href="https://portfolio-e021a.web.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        @tanver
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
