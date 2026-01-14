"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";




const HomePortfolio = () => {
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mans-server.vercel.app/portfolio");
      setData(res.data || []);
    };
    fetchData();
  }, [setData]);




  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-16 py-10 text-center">
      {/* Heading */}
      <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold tracking-tight text-gray-900">
        Our <span className="text-blue-600">Portfolio</span>
      </h2>
      <p className="mt-4 lg:text-lg text-sm text-gray-600">
        A showcase of the projects we’ve successfully delivered
      </p>

      {/* Portfolio Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...data].reverse().slice(0, 8).map((client, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={client.name}
              alt={`Portfolio project ${index + 1}`} // better SEO
              width={400}
              height={300}
              priority={index < 2} // lazy loads except first 2
              className="rounded-2xl object-cover w-full h-52 group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000028] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white font-semibold text-sm md:text-base">
                View Project
              </span>
            </div>
          </article>
        ))}
      </div>
      <button className="text-xl font-semibold p-5"><a href="/portfolio">View more</a></button>

    </section>
  );
};

export default HomePortfolio;
