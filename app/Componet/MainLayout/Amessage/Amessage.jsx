import React from "react";
import Image from "next/image";
import photo from "../../../assets/minhazrahman.jpg";
import logo from "../../../assets/manspackaginglogo.png?url";

const Amessage = () => {
  // JSON-LD for Person and Organization Authority
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
    <section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-22 lg:px-8">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />

      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          src={logo}
          alt="MANS Packaging Official Logo"
          className="mx-auto lg:h-14 h-8 w-auto" // Added w-auto for better aspect ratio
          width={200}
          height={56}
          loading="lazy"
        />
        
        <figure className="mt-10">
          <blockquote className="text-center lg:text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p className="md:text-lg text-[14px] italic leading-relaxed">
              “<strong>Packaging</strong> is not just about protecting products; it’s about creating an experience and telling a story. Let <strong>MANS Printing and Packaging</strong> help you bring your brand to life through premium <strong>custom packaging solutions in Bangladesh</strong>.”
            </p>
          </blockquote>
          
          <figcaption className="mt-10">
            <Image
              src={photo}
              alt="Minhazur Rahman CEO of MANS Packaging"
              className="mx-auto rounded-full shadow-lg"
              width={100}
              height={100}
            />
            <div className="mt-4 flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-3 text-center">
              <cite className="font-bold lg:text-lg text-sm text-gray-900 not-italic">
                Minhazur Rahman
              </cite>
              <span className="hidden md:inline text-gray-400">|</span>
              <div className="text-blue-700 font-medium lg:text-base text-xs uppercase tracking-wider">
                Founder & CEO, MANS Packaging
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Amessage;