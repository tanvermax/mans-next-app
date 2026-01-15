"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import photo1 from "../../../assets/IMG-20230909-WA0019-1024x576.jpg";
import photo2 from "../../../assets/mans-packaging-factory--1024x768.jpg";
import photo3 from "../../../assets/mans-packaging-printing-factory-1-1024x759.png";
import photo4 from "../../../assets/mans-printing-and-packaging.jpg";

const Mansphoto = () => {
  return (
    <section
      id="about-us"
      className="lg:flex lg:py-20 py-10 w-11/12 mx-auto items-center"
    >
      {/* Left: Images */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-3 lg:gap-6 lg:p-10"
      >
        {[photo1, photo2, photo3, photo4].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl bg-transparent  "
          >
            <Image
              src={img}
              alt={
                i === 0
                  ? "Modern packaging and printing facility"
                  : i === 1
                  ? "Factory interior view of packaging production"
                  : i === 2
                  ? "Printing and packaging process at Mans"
                  : "Sustainable packaging products showcase"
              }
              className=" rounded-2xl transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Right: Text */}
      <motion.article
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:p-10 mt-10 lg:mt-0"
      >
        <h2 className="border-l-4 text-black border-blue-600 lg:text-5xl text-3xl px-6 font-extrabold leading-snug">
          About <span className="text-blue-600">Mans Printing & Packaging</span>
        </h2>
        <p className="py-5 text-gray-700 lg:text-lg text-sm leading-relaxed">
          Mans Printing and Packaging is a leading{" "}
          <strong>packaging manufacturing company in Dhaka, Bangladesh</strong>.
          Our mission is to deliver <em>customized</em> and{" "}
          <em>sustainable packaging solutions</em> for businesses of all sizes —
          from startups to enterprises.
        </p>
        <p className="py-2 text-gray-600 text-sm lg:text-base leading-relaxed">
          Founded in <strong>2020</strong>, we are a young, ambitious team with
          a passion for <strong>innovation, quality, and reliability</strong>.
          From <strong>e-commerce packaging</strong> to{" "}
          <strong>food & industrial solutions</strong>, we provide durable
          carton box packaging designed to protect your products and enhance
          your brand.
        </p>
        <p className="py-2 text-gray-600 text-sm lg:text-base leading-relaxed">
          We pride ourselves on offering{" "}
          <span className="font-semibold text-blue-600">
            fast, reliable service
          </span>{" "}
          while maintaining eco-friendly practices that support a greener
          future.
        </p>
      </motion.article>
    </section>
  );
};

export default Mansphoto;
