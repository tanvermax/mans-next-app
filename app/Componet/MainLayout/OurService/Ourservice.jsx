"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Ourservice = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
    const res = await axios.get("https://mans-server.vercel.app/service");
    if(res){ setLoading(false);}
    setServices(res.data || []);
     };
     fetchData();
  }, [setServices]);




  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <section className="bg-linear-to-b from-gray-50 to-gray-100 md:py-16" aria-label="Our services loading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-64 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg h-80 animate-pulse">
                <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-linear-to-b from-gray-50 to-gray-100 py-16" aria-label="Our services">
      <div className="container mx-auto px-4">
        {/* SEO-optimized heading structure */}
        <header className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            className="text-xs md:text-base text-gray-700 max-w-2xl mx-auto"
          >
            Discover our comprehensive range of packaging solutions designed to meet your unique needs
          </motion.p>
        </header>

        {/* Services grid with enhanced animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative items-center mx-auto md:h-[40vh]  h-[20vh] md:w-full w-[50vw] overflow-hidden">
                <Image
                  src={service.service}
                  alt={service.heading || "Service Image"}
                  fill
                  className="object-cover md:p-5  group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 25vw"
                />
                
              </div>
              <div className="md:p-6 p-3">
                <h3 className="md:text-xl text-md font-semibold text-gray-900 mb-3 group-hover:text-[#25A6E2] transition-colors">
                  {service.heading}
                </h3>
                <p className="text-gray-600  text-xs md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 mb-6">Ready to elevate your packaging experience?</p>
          {/* <button className="bg-[#25A6E2] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"> */}
            {/* contact-us */}
            <Link className="bg-[#25A6E2] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl" href="/contact-us">Contact Us Today</Link>
          {/* </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Ourservice;