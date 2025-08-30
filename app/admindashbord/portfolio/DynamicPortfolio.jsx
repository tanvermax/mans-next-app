"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Dyportfolio from "./Porfolio";

const DynamicPortfolio = () => {
  const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({
    type: "",
    name: "",
    alt: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new field
  const handleAddField = async (e) => {
    e.preventDefault();
    if (!newField.type || !newField.name || !newField.alt) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newField),
      });

      const data = await res.json();

      if (data.success) {
        setFields((prev) => [...prev, newField]);
        setNewField({ type: "", name: "", alt: "" });
        toast.success("Portfolio item added successfully!");
      } else {
        toast.error("Failed to add portfolio item.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 px-5">
      {/* Add Form */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Portfolio Item
        </h2>

        <form onSubmit={handleAddField} className="space-y-5">
          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <input
              type="text"
              name="type"
              value={newField.type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Food, Web Design, Photography"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="name"
              value={newField.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste image URL here"
            />
          </div>

          {/* Alt Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alt Text
            </label>
            <input
              type="text"
              name="alt"
              value={newField.alt}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Delicious pasta plate"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Adding..." : "Add Portfolio Item"}
          </button>
        </form>

        {/* Preview of added fields */}
        {fields.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recently Added
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border rounded-xl shadow-sm p-4 hover:shadow-md transition"
                >
                  <img
                    src={field.name}
                    alt={field.alt}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-sm font-medium text-gray-700">
                    Type: {field.type}
                  </h3>
                  <p className="text-xs text-gray-500">Alt: {field.alt}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Portfolio Grid */}
      <div className="py-10">
        <Dyportfolio />
      </div>
    </div>
  );
};

export default DynamicPortfolio;
