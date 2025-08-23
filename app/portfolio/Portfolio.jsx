"use client"
import Image from 'next/image';
import React, { useState } from 'react'

function Portfolioo() {

    const [filterType, setFilterType] = useState("All");

    const data = [
        { id: 1, type: "e-commerce", name: "https://i.ibb.co.com/hFWZF0Vb/chaldal-com-egg-carton-box.png", alt: "Daraz carton box" },
        { id: 2, type: "industrial", name: "https://i.ibb.co.com/7J42Yv0z/Industrial-carton.png", alt: "Clothing carton box" },
        { id: 3, type: "e-commerce", name: "https://i.ibb.co.com/DfD1XMHr/Daraz-products-carton.png", alt: "Daraz products carton" },
        { id: 4, type: "e-commerce", name: "https://i.ibb.co.com/SX2LgKKy/Daaraz-carton-box-1-1.png", alt: "Daraz carton box variant" },
        { id: 5, type: "e-commerce", name: "https://i.ibb.co.com/zh5f6RYb/Daaraz-carton-box.png", alt: "Chaldal egg carton box" },
        { id: 6, type: "e-commerce", name: "https://i.ibb.co.com/pgx4G6Z/Clothing-carton-box-1.png", alt: "Carton box variant 2-1" },
        { id: 7, type: "industrial", name: "https://i.ibb.co.com/PZtcK206/Autocom-carton-1.png", alt: "Carton box variant 1-1" },
        { id: 8, type: "food", name: "https://i.ibb.co.com/DPV3mcb4/5.png", alt: "Carton box variant 5" },
        { id: 9, type: "food", name: "https://i.ibb.co.com/XkSHfZD8/4.png", alt: "Carton box variant 4" },
        { id: 10, type: "food", name: "https://i.ibb.co.com/Xk4pW4WB/3.png", alt: "Carton box variant 3" },
        { id: 11, type: "e-commerce", name: "https://i.ibb.co.com/cW20gQk/2-1.png", alt: "Autocom carton box" },
        { id: 12, type: "e-commerce", name: "https://i.ibb.co.com/8gLNs9Jf/1-1.png", alt: "Industrial carton box" },
    ];

    const filteredData =
        filterType === "All"
            ? data
            : data.filter((item) => item.type === filterType.toLowerCase());

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
                    <div key={imagedata.id} className="relative w-full h-60">
                        <Image
                            src={imagedata.name}
                            alt={imagedata.alt}
                            layout="fill"
                            objectFit="contain"
                            className="rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolioo