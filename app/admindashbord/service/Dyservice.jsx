"use client";

import { useState, useEffect } from "react";
import useaxiospublic from "@/app/Hook/useaxiospublic";
import Swal from "sweetalert2";
import DynamicServiceList from "./DynamicServiceList";

const Dyservice = ({ serviceToEdit, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    service: "",
    heading: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const axiosPublic = useaxiospublic();

  // Populate form if editing
  useEffect(() => {
    if (serviceToEdit) {
      setFormData({
        id: serviceToEdit._id || "",
        service: serviceToEdit.service || "",
        heading: serviceToEdit.heading || "",
        description: serviceToEdit.description || "",
      });
    } else {
      setFormData({
        id: "",
        service: "",
        heading: "",
        description: "",
      });
    }
  }, [serviceToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (serviceToEdit) {
        // Update existing service
        await axiosPublic.put(`/services/${formData.id}`, formData);
        Swal.fire("Updated!", "Service has been updated successfully.", "success");
      } else {
        // Add new service
        const response = await axiosPublic.post("/service", formData);
        if (response.data) {
          Swal.fire("Added!", "New service has been added successfully.", "success");
        }
      }

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error saving service:", error);
      Swal.fire("Error!", "Something went wrong while saving service.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen  items-center justify-center p-6">
      <div className="w-full  bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {serviceToEdit ? "Edit Service" : "Add New Service"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="heading"
            >
              Service Title
            </label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Enter service title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Write a short description..."
              required
            />
          </div>

          {/* Image Path / Upload */}
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="service"
            >
              Image Path (or Upload)
            </label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-3 transition"
            />
            <input
              type="file"
              id="imageUpload"
              onChange={handleFileChange}
              accept="image/*"
              className="block w-full text-sm text-gray-600 
                file:mr-4 file:py-2 file:px-4 
                file:rounded-md file:border-0 
                file:text-sm file:font-semibold 
                file:bg-indigo-50 file:text-indigo-700 
                hover:file:bg-indigo-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-2.5 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading
                ? "Saving..."
                : serviceToEdit
                ? "Update Service"
                : "Add Service"}
            </button>
          </div>
        </form>
      </div>
      <DynamicServiceList/>
    </div>
        
</>
  );
};

export default Dyservice;
