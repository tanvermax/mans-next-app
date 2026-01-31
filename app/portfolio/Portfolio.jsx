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
            try {
                const res = await axios.get("https://mans-server.vercel.app/portfolio");
                if (res.data) {
                    setData(res.data.reverse());
                }
            } catch (error) {
                console.error("Error fetching portfolio:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // 1. DYNAMIC CATEGORIES: Extract unique types from your data
    // We add "All" manually as the first option.
    const dynamicCategories = ["All", ...new Set(data.map(item => item.type))];

    // 2. UPDATED FILTER LOGIC: 
    // We compare values directly. If "All" is selected, show everything.
    const filteredData = filterType === "All"
        ? data
        : data.filter((item) => item.type === filterType);

    if (loading) {
        return <div><Loading /></div>
    }

    return (
        <div>
            <div className="place-items-center md:py-24 py-10 bg-gray-300 text-center">
                <h3 className="text-xl md:text-4xl font-bold text-black">PROJECT PORTFOLIO</h3>
                <p className="pt-2 md:text-xl text-xs text-black">
                    We are always committed to providing high-quality packaging
                    products as per client requirements. Be Happy With Us!
                </p>
            </div>

            {/* 3. DYNAMIC BUTTONS */}
            <div className="md:flex grid grid-cols-3 justify-center gap-1 md:gap-4 md:p-5 p-2 flex-wrap container mx-auto ">
                {dynamicCategories.map((type) => (
                    <button
                        key={type}
                        className={`px-4 py-2 rounded text-[10px] md:text-base capitalize transition m-1 ${
                            filterType === type
                                ? "bg-[#25A6E2] text-white"
                                : "bg-gray-200 text-black hover:bg-blue-500 hover:text-white"
                        }`}
                        onClick={() => setFilterType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 md:max-w-7xl mx-auto">
                {filteredData.length > 0 ? (
                    filteredData.map((imagedata) => (
                        <div
                            key={imagedata._id}
                            className="group relative w-full h-80 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100"
                        >
                            <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                                <Image
                                    src={imagedata.name}
                                    alt={imagedata.alt || "Portfolio Image"}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className=" " 
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-[#6c6f70] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 capitalize">
                                    {imagedata.type || "View Project"}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 text-gray-500">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolioo;