"use client";

import React from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import useaxiospublic from "../../Hook/useaxiospublic";

const EditClinet = ({ data, refresh }) => {
  const axiosPublic = useaxiospublic();

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This client will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#2563eb",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosPublic.delete(`/client/${id}`);
          if (response.data.success === true) {
            Swal.fire("Deleted!", "Client has been deleted.", "success");
            refresh();
          }
        } catch (error) {
          console.error("Error deleting client:", error);
          Swal.fire("Error!", "Failed to delete client.", "error");
        }
      }
    });
  };

  return (
    <section className="py-8 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Client Portfolio <span className="text-gray-500">({data.length})</span>
        </h2>
        <p className="text-sm text-gray-500">
          Manage and showcase your clients beautifully
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={item.imageUrl}
                alt={item.altText}
                fill
                className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-gray-700 font-medium truncate">
                {item.altText || "Untitled Client"}
              </p>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-3">
              <button
                onClick={() => handleDelete(item._id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-medium shadow-md transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No clients found yet 🚀</p>
        </div>
      )}
    </section>
  );
};

export default EditClinet;
