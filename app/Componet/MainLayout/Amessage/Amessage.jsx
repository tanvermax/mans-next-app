"use client"; // Required for Framer Motion in Next.js App Router
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import photo from "../../../assets/minhazurrahmanCEO.png";

const Amessage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Minhazur Rahman",
    "jobTitle": "CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "MANS Packaging",
      "location": "Dhaka, Bangladesh"
    },
    "description": "Expert in custom packaging solutions and paper-based manufacturing."
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto relative mt-10 lg:mt-24">
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#D91E41] rounded-[30px] lg:rounded-[50px] overflow-hidden lg:overflow-visible shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            
            {/* Mobile Circle Image */}
            <div className="flex justify-center mt-10 lg:hidden">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-white/30 overflow-hidden shadow-xl"
              >
                <Image
                  src={photo}
                  alt="Minhazur Rahman CEO"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </div>

            {/* Left Spacer for Desktop Overlap */}
            <div className="hidden lg:block lg:col-span-5"></div>

            {/* Content Side */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-20 text-white text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
              >
                Leading the Future of <br className="hidden lg:block" /> Custom Packaging in BD!
              </motion.h2>
              
              <motion.blockquote 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xs sm:text-base lg:text-lg text-white/90 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                “<strong>Packaging</strong> is not just about protecting products; it’s about creating an experience and telling a story. Let <strong>MANS Printing and Packaging</strong> help you bring your brand to life.”
              </motion.blockquote>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center lg:items-start gap-2"
              >
                <span className="font-bold text-xl lg:text-2xl">Minhazur Rahman</span>
                <span className="text-[10px] lg:text-xs text-white/80 tracking-widest uppercase font-semibold">
                  Founder & CEO, MANS Packaging
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Image with Slide-in Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block absolute bottom-0 left-0 lg:left-3 w-full max-w-[650px] pointer-events-none"
        >
          <Image
            src={photo}
            alt="Minhazur Rahman CEO of MANS Packaging"
            className="w-full h-auto  lg:h-[70vh] drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
            width={600}
            height={800}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Amessage;