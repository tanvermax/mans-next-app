"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user");
        setUsers(response.data.data);
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [axios]);

  // Delete user
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/user/${id}`);
          if (response.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            setUsers((prev) => prev.filter((user) => user._id !== id));
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire("Error!", "Failed to delete user.", "error");
        }
      }
    });
  };

  // Update role -> Make User
  const handleMakeUser = async (user) => {
    try {
      const res = await axiosSecure.patch(`/user/user/${user._id}`);
      if (res.data.success) {
        Swal.fire("Updated!", res.data.message, "success");
        setUsers((prev) =>
          prev.map((u) => (u._id === user._id ? { ...u, role: "user" } : u))
        );
      } else {
        Swal.fire("Error!", res.data.message || "Could not update role.", "error");
      }
    } catch {
      Swal.fire("Error!", "Role update failed.", "error");
    }
  };

  // Update role -> Make Admin
  const handleMakeAdmin = async (user) => {
    try {
      const res = await axiosSecure.patch(`/user/admin/${user._id}`);
      if (res.data.success) {
        Swal.fire("Updated!", res.data.message, "success");
        setUsers((prev) =>
          prev.map((u) => (u._id === user._id ? { ...u, role: "admin" } : u))
        );
      } else {
        Swal.fire("Error!", res.data.message || "Could not update role.", "error");
      }
    } catch {
      Swal.fire("Error!", "Role update failed.", "error");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        👥 Manage Users
      </h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No users found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full border border-gray-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white text-sm">
              <tr>
                <th className="p-3 text-center">#</th>
                <th className="p-3">Photo</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3 text-center">Role</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {users.map((user, idx) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-3 text-center">{idx + 1}</td>
                  <td className="p-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/0jqHpnp/default-user.png"
                      }
                      alt={user.userName}
                    />
                  </td>
                  <td className="p-3 font-medium">{user.userName}</td>
                  <td className="p-3 text-sm text-gray-600">{user.email}</td>
                  <td className="p-3 text-center">
                    {user.role === "admin" ? (
                      <span
                        onClick={() => handleMakeUser(user)}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-green-200 transition"
                      >
                        Admin
                      </span>
                    ) : (
                      <span
                        onClick={() => handleMakeAdmin(user)}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-blue-200 transition"
                      >
                        {user.role || "User"}
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
