"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from '../Componet/Element/Loading';

function Portfolioo() {

    const [filterType, setFilterType] = useState("All");
    const [data, setData] = useState([]);


  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mans-server.vercel.app/portfolio");
      if (res.data && res.data.length > 0) {
        setLoading(false)
      }
      setData(res.data.reverse() || []);
    };
    fetchData();
  }, [setData]);




    const filteredData =
        filterType === "All"
            ? data
            : data.filter((item) => item.type === filterType.toLowerCase());


            if (loading) {
                return <div><Loading /></div>
            }
    return (
        <div>
            <div className=" place-items-center md:py-24 bg-gray-300 text-center">
                <h3 className="text-xl md:text-4xl font-bold text-black">PROJECT PORTFOLIO</h3>
                <p className="pt-5 md:text-xl text-xs p-4  text-black">
                    We are always committed to providing high-quality packaging
                    products as per client requirements. Be Happy With Us!
                </p>
            </div>

            <div className="md:flex  grid grid-cols-3 justify-center gap-1 md:gap-4 md:p-5 p-2 flex-wrap container mx-auto ">
                {["All", "e-commerce", "Food", "Industrial", "Garments"].map((type) => (
                    <button
                        key={type}
                        className={`px-4 py-2 rounded text-[8px] md:text-base ${filterType === type
                            ? "bg-[#25A6E2] text-white"
                            : "bg-gray-200 text-black"
                            } hover:bg-blue-500 hover:text-white transition m-1`}
                        onClick={() => setFilterType(type)}
                    >
                        {type === "e-commerce" ? "Ecommerce" : type}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 md:max-w-7xl mx-auto">
    {filteredData.map((imagedata) => (
        <div 
            key={imagedata._id} 
            className="group relative w-full h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100"
        >
            {/* Image Wrapper */}
            <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                <Image
                    src={imagedata.name}
                    alt={imagedata.alt || "Portfolio Image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover" // Changed from contain to cover for a modern look
                />
            </div>

            {/* Stylish Overlay (Shows on Hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {imagedata.type || "View Project"}
                </p>
            </div>
        </div>
    ))}
</div>
        </div>
    )
}

export default Portfolioo