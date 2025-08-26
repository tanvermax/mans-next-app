"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useAxiosPublic from "@/app/Hook/useaxiospublic";

const Ourclient = () => {
  const [clients, setClients] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    let isMounted = true;
    axiosPublic
      .get("/client")
      .then((res) => {
        if (isMounted) setClients(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching client data:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [axiosPublic]);

  // Duplicate array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      className="mx-auto py-16 bg-gray-50"
      aria-labelledby="our-clients-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2
          id="our-clients-title"
          className="lg:text-5xl md:text-4xl text-2xl font-extrabold tracking-tight text-gray-900"
        >
          Our <span className="text-blue-600">Clients</span>
        </h2>
        <p className="mt-3 lg:text-lg text-sm text-gray-600">
          Trusted by leading brands and businesses
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative mt-12 overflow-hidden">
        <motion.div
          className="flex space-x-12 min-w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 90, // faster scroll
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
            >
              <Image
                src={logo.imageUrl}
                alt={logo.name ? `${logo.name} logo` : "Client Logo"} // SEO
                width={160}
                height={96}
                loading={index < 4 ? "eager" : "lazy"} // eager load first few
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ourclient;
