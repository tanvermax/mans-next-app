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
      setData(res.data || []);
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
            <div className="place-items-center md:p-24 bg-gray-300 text-center">
                <h3 className="text-xl md:text-4xl font-bold">PROJECT PORTFOLIO</h3>
                <p className="pt-5 md:text-xl text-xs p-4">
                    We are always committed to providing high-quality packaging
                    products as per client requirements. Be Happy With Us!
                </p>
            </div>

            <div className="md:flex grid grid-cols-3 justify-center gap-1 md:gap-4 md:p-5 p-2 flex-wrap">
                {["All", "e-commerce", "Food", "Industrial", "Garments"].map((type) => (
                    <button
                        key={type}
                        className={`px-4 py-2 rounded text-[8px] ${filterType === type
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                            } hover:bg-blue-500 hover:text-white transition m-1`}
                        onClick={() => setFilterType(type)}
                    >
                        {type === "e-commerce" ? "Ecommerce" : type}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10 w-11/12 mx-auto">
                {filteredData.map((imagedata) => (
                    <div key={imagedata._id} className="relative w-full h-60">
                        <Image
                            src={imagedata.name}
                            alt={imagedata.alt}

                            fill={true}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'contain' }}
                            className="rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolioo