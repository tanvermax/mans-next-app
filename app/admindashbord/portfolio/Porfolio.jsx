"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

const Dyportfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch portfolio data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/portfolio"); // Replace with your actual API endpoint
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This portfolio item will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`/api/portfolio/${id}`, {
            method: "DELETE",
          });
          const response = await res.json();

          if (response.success === true) {
            Swal.fire("Deleted!", "Portfolio item has been deleted.", "success");
            setData((prev) => prev.filter((item) => item._id !== id));
          }
        } catch (error) {
          console.error("Error deleting portfolio:", error);
          Swal.fire("Error!", "Failed to delete portfolio.", "error");
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-60">
        <p className="text-gray-600 animate-pulse">Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <p className="text-lg font-semibold mb-6">
        Total Projects:{" "}
        <span className="text-blue-600 font-bold">{data.length}</span>
      </p>

      {data.length === 0 ? (
        <p className="text-gray-500">No portfolio items available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden group transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.name} // Ensure your API returns a valid image URL
                  alt="Portfolio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl shadow-md text-sm font-medium"
                >
                  Delete
                </button>
              </div>

              {/* Info Section */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                  {item.title || "Untitled Project"}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {item.description || "No description available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dyportfolio;
