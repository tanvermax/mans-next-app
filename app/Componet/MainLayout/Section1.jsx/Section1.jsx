"use client";

import Head from "next/head"; // Or react-helmet in a different setup
import { motion } from "framer-motion";
import { BsBoxes } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { PiCodesandboxLogoLight } from "react-icons/pi";

// SEO Component to manage meta tags
const SEO = () => {
  return (
    <Head>
      <title>Custom Packaging Boxes & Wholesale | Your Company Name</title>
      <meta
        name="description"
        content="Get high-quality, custom-designed packaging boxes in bulk. We offer eco-friendly cardboard boxes, competitive pricing, and fast delivery for your business needs."
      />
      {/* Add more meta tags as needed, like og:title for social media */}
    </Head>
  );
};

// Expanded content with more keywords and details
const features = [
  {
    icon: PiCodesandboxLogoLight,
    title: "Wholesale & Bulk Orders",
    description: "Start your custom packaging journey with us! Order wholesale cardboard boxes in bulk, with minimum quantities starting at just 1000 pieces to meet your business scale.",
  },
  {
    icon: BsBoxes,
    title: "Custom Design & Size",
    description: "Create unique custom packaging boxes tailored to your brand. Our service includes custom printing, die-cut shapes, and specific dimensions to ensure a perfect fit and professional look.",
  },
  {
    icon: GiBoxUnpacking,
    title: "Competitive & Affordable Pricing",
    description: "Benefit from our affordable and competitive pricing on all custom packaging solutions, ensuring you get the best value without ever compromising on quality or durability.",
  },
  {
    icon: FaBoxOpen,
    title: "High-Quality & Eco-Friendly Materials",
    description: "We guarantee durable, eco-friendly, and reliable packaging solutions. Our high-quality corrugated cardboard is sourced sustainably to protect both your products and the environment.",
  },
];

export default function Section1() {
  return (
    <>
      <SEO />
      <section
        className="w-11/12 mx-auto py-12 lg:py-20"
        aria-labelledby="features-heading"
      >
        <header className="text-center mb-10">
          <h2
            id="features-heading"
            className="text-2xl lg:text-4xl font-bold text-gray-800"
          >
            Why Choose Our Custom Packaging Boxes?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
            We provide **customized, durable, and cost-effective packaging solutions** designed to fit your business needs, from custom cardboard boxes to bulk shipping supplies.
          </p>
        </header>

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
    </>
  );
}