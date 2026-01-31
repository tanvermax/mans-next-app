"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";





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
    <section className="mx-auto py-10  flex flex-col gap-5  container  text-center ">
      {/* Heading */}
      <div>
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold tracking-tight text-gray-900">
          {/* Our <span className="text-[#25A6E2]">Portfolio</span> */}
        </h2>
        <p className="mt-4 lg:text-lg text-sm text-gray-600">
          A showcase of the projects we’ve successfully delivered
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className=" mt-10 grid  grid-cols-2 md:grid-cols-3  lg:grid-cols-4 md:py-1 px-5 gap-5">
        {[...data].reverse().slice(0, 8).map((client, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={client.name}
              alt={`Portfolio project ${index + 1}`} // better SEO
              width={450}
              height={300}
              priority={index < 2} // lazy loads except first 2
              className="rounded-2xl  w-full md:h-[40vh] group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />

           
          </article>
        ))}

      </div>
     
        <Link className=" md:w-[10%] mx-auto  bg-[#25A6E2] text-white p-3 rounded-full font-semibold " href={"/portfolio"} >View more</Link>


    </section>
  );
};

export default HomePortfolio;
