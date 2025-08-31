"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditClinet from "./EditClinet";
import useAxiosPublic from "@/app/Hook/useaxiospublic";

const ClientDynamic = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [altText, setAltText] = useState("");
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiospublic = useAxiosPublic();


  // Fetch all clients
  const fetchClients = async () => {
    try {
      axiospublic.get("/client")
        .then(res => {
          console.log(res.data)
          setClients(res.data)
        })

      // setClients(data);
    } catch (err) {
      console.error("Error fetching client data:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Submit new client
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl || !altText) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      axiospublic.post("/client")
        .then(res => {
          console.log(res.data)
          if (res.data.acknowledged == true) {
            toast.success("Client added successfully!");
            fetchClients();
            setImageUrl("");
            setAltText("");
          }
          else {
            toast.error("Failed to add client.");
          }
        })

     
    } catch (error) {
      console.error("Error submitting client data:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen px-5">
      {/* Add New Client Form */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md border">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Client
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Paste client logo URL"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Alt Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alt Text (Company Name)
            </label>
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Enter company name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition ${loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading ? "Adding..." : "Add Client"}
          </button>
        </form>

        {/* Live Preview */}
        {imageUrl && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2">Live Preview:</p>
            <div className="border rounded-lg p-3 bg-gray-50 flex items-center justify-center">
              <img
                src={imageUrl}
                alt={altText || "Client preview"}
                className="max-h-20 object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Client List (Edit/Delete Section) */}
      <div className="mt-10">
        <EditClinet data={clients} refresh={fetchClients} />
      </div>
    </div>
  );
};

export default ClientDynamic;
