// app/components/Mansphoto.js (Server Component)
import React from "react";
import Image from "next/image";
import AnimationWrapper from "../Section1.jsx/AnimationWrapper"; // Using the wrapper we created earlier

import photo1 from "../../../assets/IMG-20230909-WA0019-1024x576.jpg";
import photo2 from "../../../assets/mans-packaging-factory--1024x768.jpg";
import photo3 from "../../../assets/mans-packaging-printing-factory-1-1024x759.png";
import photo4 from "../../../assets/mans-printing-and-packaging.jpg";

export const metadata = {
  title: "About MANS Packaging | Leading Box Manufacturer in Dhaka",
  description: "Founded in 2020, MANS Packaging provides sustainable and custom packaging solutions in Bangladesh. Meet the team behind our innovation.",
  keywords: ["About MANS Packaging", "Packaging factory Dhaka", "Minhazur Rahman CEO"],
};

const Mansphoto = () => {
  const images = [
    { src: photo1, alt: "Modern packaging manufacturing facility in Dhaka Bangladesh" },
    { src: photo2, alt: "Inside MANS Packaging factory interior production line" },
    { src: photo3, alt: "Advanced offset printing and packaging process in Bangladesh" },
    { src: photo4, alt: "Custom eco-friendly carton box packaging solutions" },
  ];
  

  return (
    <section id="about-us" className="lg:flex lg:py-20 py-10 md:px-0 px-5 container mx-auto items-center">
      
      {/* Left: Images (Animated) */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-3 lg:gap-6 lg:p-10">
        {images.map((img, i) => (
          <AnimationWrapper key={i} index={i}>
            <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-square relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </AnimationWrapper>
        ))}
      </div>

      {/* Right: Text (Static for SEO, Wrapped for Animation) */}
      <div className="lg:w-1/2 lg:p-10 mt-10 lg:mt-0">
        <AnimationWrapper index={2}>
          <article>
            <h2 className="border-l-4 text-black border-[#25A6E2] lg:text-5xl text-md px-6 font-extrabold leading-snug">
              About <span className="text-[#25A6E2]">MANS Printing & Packaging</span>
            </h2>
            
            <p className="py-5 text-gray-700 lg:text-lg text-xs leading-relaxed">
              MANS Printing and Packaging is a leading{" "}
              <strong>packaging manufacturing company in Dhaka, Bangladesh</strong>.
              Our mission is to deliver <em>customized</em> and{" "}
              <em>sustainable packaging solutions</em> for businesses of all sizes —
              from startups to large-scale enterprises.
            </p>

            <p className="py-2 text-gray-600 lg:text-lg text-xs leading-relaxed">
              Founded in <strong>2020</strong>, we are a young, ambitious team with
              a passion for <strong>innovation, quality, and reliability</strong>.
              From <strong>e-commerce packaging</strong> to{" "}
              <strong>food & industrial solutions</strong>, we provide durable
              carton box packaging designed to protect your products and enhance
              your brand identity.
            </p>

            <p className="py-2 text-gray-600 lg:text-lg text-xs leading-relaxed">
              We pride ourselves on offering{" "}
              <span className="font-semibold text-[#25A6E2]">
                fast, reliable service
              </span>{" "}
              while maintaining eco-friendly practices that support a greener
              future for the packaging industry in Bangladesh.
            </p>
          </article>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Mansphoto;