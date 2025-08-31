"use client";

import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const PostDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mans-server.vercel.app/newspost");
        setData(response.data);
        // console.log(response.data.data)
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axios]);

  // Delete handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This post will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log(id)
          const response = await axios.delete(`https://mans-server.vercel.app/newspost/${id}`);
          if (response.status == 200) {
            Swal.fire("Deleted!", "Your post has been deleted.", "success");
            setData((prev) => prev.filter((item) => item._id !== id));
          }
        } catch (error) {
          console.error("Error deleting post:", error);
          Swal.fire("Error!", "Something went wrong while deleting the post.", "error");
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        📰 All News Posts
      </h2>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No news posts available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((alldata) => (
            <div
              key={alldata._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {alldata.photoUrl && (
                <img
                  src={alldata.photoUrl}
                  alt="News Photo"
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {alldata.headline}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {alldata.description?.slice(0, 120)}...
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(alldata._id)}
                  className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-200 mt-auto"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostDetails;
