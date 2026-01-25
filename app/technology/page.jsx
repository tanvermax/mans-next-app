"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Technology data - replace with your actual technology offerings
const technologyData = {
  main: {
    title: "Cutting-Edge Packaging Technology",
    description: "At Mans Printing and Packaging, we leverage the latest technological advancements to deliver superior packaging solutions that meet the highest quality standards and sustainability goals.",
    image: "/api/placeholder/800/500"
  },
  features: [
    {
      title: "Digital Printing Technology",
      description: "High-resolution digital printing for vibrant colors and sharp details on all packaging materials.",
      icon: "🖨️",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Eco-Friendly Materials",
      description: "Sustainable packaging solutions using recycled and biodegradable materials without compromising quality.",
      icon: "🌿",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Automated Production Lines",
      description: "State-of-the-art automated machinery for precision cutting, folding, and assembly with minimal waste.",
      icon: "⚙️",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Quality Control Systems",
      description: "Advanced inspection systems ensuring every product meets our rigorous quality standards.",
      icon: "🔍",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Custom Design Software",
      description: "3D modeling and design software to visualize your packaging before production.",
      icon: "💻",
      image: "/api/placeholder/400/300"
    },
    {
      title: "RFID Integration",
      description: "Smart packaging solutions with RFID technology for inventory tracking and authentication.",
      icon: "📡",
      image: "/api/placeholder/400/300"
    }
  ],
  stats: [
    { value: "99%", label: "Accuracy Rate" },
    { value: "48h", label: "Fastest Turnaround" },
    { value: "100+", label: "Projects Monthly" },
    { value: "15%", label: "Less Material Waste" }
  ]
};

const Technology = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-4xl font-bold mb-6">{technologyData.main.title}</h1>
              <p className="text-xl mb-8 opacity-90">{technologyData.main.description}</p>
              <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Request a Technology Demo
              </button>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative h-80 md:h-96 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src={technologyData.main.image}
                alt="Advanced packaging technology"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologyData.stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-blue-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Technological Capabilities
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyData.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Technology Process
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/api/placeholder/600/400"
                alt="Technology process at Mans Packaging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-8">
                {[
                  { step: "1", title: "Design & Prototyping", desc: "Using advanced CAD software to create precise packaging designs" },
                  { step: "2", title: "Material Selection", desc: "Choosing sustainable materials that meet quality and environmental standards" },
                  { step: "3", title: "Precision Manufacturing", desc: "Automated production with quality checks at every stage" },
                  { step: "4", title: "Quality Assurance", desc: "Rigorous testing to ensure durability and functionality" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25A6E2] to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Experience Our Advanced Packaging Technology?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact us today to discuss how our technology can enhance your packaging solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg mr-4 hover:bg-blue-50 transition-colors duration-300">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-300">
              Schedule a Tour
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;