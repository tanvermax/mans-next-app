"use client";

import { useEffect, useState } from "react";
import useaxiospublic from "@/app/Hook/useaxiospublic";
import Swal from "sweetalert2";

const DynamicServiceList = ({ onEdit }) => {
  const axiosPublic = useaxiospublic();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all services
  const fetchServices = async () => {
    try {
      const res = await axiosPublic.get("/service");
      setServices(res.data);
    } catch (error) {
      console.error("Error fetching services:", error);
      Swal.fire("Error", "Failed to fetch services", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Delete service
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This service will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete!",
    });

    if (result.isConfirmed) {
      try {
        await axiosPublic.delete(`/service/${id}`);
        setServices((prev) => prev.filter((s) => s._id !== id));
        Swal.fire("Deleted!", "Service has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting service:", error);
        Swal.fire("Error!", "Failed to delete service.", "error");
      }
    }
  };

  if (loading)
    return <div className="text-center py-10 text-gray-500">Loading services...</div>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        All Services
      </h2>

      {services.length === 0 ? (
        <p className="text-center text-gray-500">No services found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service._id}
              className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              {/* Service Info */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {service.service && (
                  <img
                    src={service.service}
                    alt={service.heading}
                    className="w-28 h-20 object-cover rounded-xl border border-gray-200 shadow-sm"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.heading}
                  </h3>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-3 md:mt-0">
                <button
                  onClick={() => onEdit(service)}
                  className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl font-medium shadow-md transition transform hover:scale-105"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium shadow-md transition transform hover:scale-105"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DynamicServiceList;
