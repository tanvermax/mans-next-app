"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useAxiosPublic from '@/app/Hook/useaxiospublic';

const HomePortfolio = () => {
  const [data, setData] = useState([]);
  const axiospublic = useAxiosPublic();

  useEffect(() => {
    axiospublic.get("/portfolio")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching portfolio data:", err);
      });
  }, [axiospublic]);

  return (
    <div>
      <div className="mx-auto place-items-center lg:py-10 py-5">
        <h2 className="lg:text-5xl md:text-3xl text-xl font-bold lg:py-4">Our Portfolio</h2>
        <p className="lg:text-xl text-xs text-gray-700 pb-10">Portfolio We Have Done</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[...data].reverse().slice(0, 8).map((client, index) => (
            <div key={index} className="group relative overflow-hidden rounded shadow-lg">
              <Image
                src={client.name}
                alt="Portfolio"
                width={400}
                height={300}
                className="rounded group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
