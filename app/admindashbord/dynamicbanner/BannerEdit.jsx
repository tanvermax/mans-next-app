"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import useaxiospublic from "@/app/Hook/useaxiospublic"; // adjust path

const BannerEdit = () => {
  const [data, setData] = useState([]);
  const axiospublic = useaxiospublic();

  // Fetch banner data
  useEffect(() => {
    axiospublic
      .get("/banner")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching banner data:", err));
  }, [axiospublic]);

  // Delete banner
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This banner will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiospublic.delete(`/banner/${id}`);
          if (response.data.success === true) {
            Swal.fire("Deleted!", "Banner has been deleted.", "success");
            setData((prev) => prev.filter((item) => item._id !== id));
          }
        } catch (error) {
          console.error("Error deleting banner:", error);
          Swal.fire("Error!", "Failed to delete banner.", "error");
        }
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-[#000A64] mb-8">
        Edit Banner Info
      </h2>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item._id}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="Banner"
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.heading}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <Link
                  href={`/dashboard/banner/${item._id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No banners available. Add some banners to get started.
        </p>
      )}
    </div>
  );
};

export default BannerEdit;
