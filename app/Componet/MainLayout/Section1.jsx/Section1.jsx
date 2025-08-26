"use client";

import { motion } from "framer-motion";
import { BsBoxes } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { PiCodesandboxLogoLight } from "react-icons/pi";

const features = [
  {
    icon: PiCodesandboxLogoLight,
    title: "Starting From 1000 Quantity",
    description: "Order packaging boxes in bulk starting at just 1000 pieces.",
  },
  {
    icon: BsBoxes,
    title: "Custom Design & Size",
    description: "Get cardboard boxes tailored to your brand’s design and exact dimensions.",
  },
  {
    icon: GiBoxUnpacking,
    title: "Competitive Price",
    description: "Affordable pricing without compromising quality.",
  },
  {
    icon: FaBoxOpen,
    title: "High-Quality Assurance",
    description: "Durable, eco-friendly, and reliable packaging solutions.",
  },
];

export default function Section1() {
  return (
    <section
      className="w-11/12 mx-auto py-12 lg:py-20"
      aria-labelledby="features-heading"
    >
      {/* Section Heading for SEO */}
      <header className="text-center mb-10">
        <h2
          id="features-heading"
          className="text-2xl lg:text-4xl font-bold text-gray-800"
        >
          Why Choose Our Packaging?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
          We provide customized, durable, and cost-effective packaging solutions
          designed to fit your business needs.
        </p>
      </header>

      {/* Features Grid */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={index}
              className="bg-white border border-blue-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center justify-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4 group-hover:bg-yellow-200 transition-colors">
                <Icon
                  className="text-3xl lg:text-4xl text-[#e69f06]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
