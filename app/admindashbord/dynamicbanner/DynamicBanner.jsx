"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import useAxiosPublic from "@/app/Hook/useaxiospublic";
import BannerEdit from "./BannerEdit";

const Dynamicbanner = () => {
  const [formData, setFormData] = useState({
    image: "",
    heading: "",
    description: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const axiospublic = useAxiosPublic();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiospublic.post("/banner", formData);
      console.log("Data submitted successfully:", response.data);

      setSubmittedData((prev) => [...prev, formData]);
      setFormData({ image: "", heading: "", description: "" });

      toast.success("🎉 Banner submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("❌ Failed to submit banner.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      {/* Banner Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#000A64]">
          🏠 Home Banner Section
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Background Image (ImageBB link)"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#000A64] outline-none transition"
            required
          />
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            placeholder="Headline"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#000A64] outline-none transition"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#000A64] outline-none transition"
            rows={3}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#000A64] hover:bg-blue-800"
            }`}
          >
            {loading ? "Submitting..." : "🚀 Submit"}
          </button>
        </form>
      </div>

      {/* Submitted Banner Cards */}
      {submittedData.length > 0 && (
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {submittedData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt="Banner"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#000A64]">
                  {item.heading}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Banner Edit Section */}
      <div className="pt-16">
        <BannerEdit />
      </div>
    </div>
  );
};

export default Dynamicbanner;
