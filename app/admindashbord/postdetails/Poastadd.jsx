// File: app/admin/page.jsx or pages/admin.jsx

"use client"; // This is needed if you're using the 'app' directory in Next.js 13+

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios'; // Using a direct axios import for demonstration

// Helper function to simulate your useAxiosSecure hook
// In a real app, you would import and use your actual hook
const useAxiosSecure = () => {
  return axios.create({
    baseURL: 'https://your-api-base-url.com', // Replace with your actual API base URL
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}` // Add authorization header if needed
    }
  });
};

const Postadd = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();

  const photoUrl = watch('photoUrl');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);
    
    const news = {
      headline: data.headline,
      description: data.description,
      photoUrl: data.photoUrl,
    };

    try {
      const res = await axios.post('https://mans-server.vercel.app/newspost', news);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "News post created successfully!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            container: 'z-50'
          }
        });
        reset();
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center p-4">
      <div className="bg-gray-800 border border-gray-700 mb-6 rounded-2xl shadow-2xl p-8 w-full max-w-2xl transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-white mb-6 text-center tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Create a New Post</span> ✨
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div>
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-400 mb-2">
              Photo URL
            </label>
            <input
              id="photoUrl"
              type="url"
              className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition-colors duration-300"
              placeholder="Paste image URL here"
              {...register('photoUrl', {
                required: 'Photo URL is required',
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Please enter a valid URL."
                }
              })}
            />
            {errors.photoUrl && (
              <p className="mt-2 text-sm text-red-400">{errors.photoUrl.message}</p>
            )}
          </div>

          {photoUrl && (
            <div className="flex justify-center p-2 rounded-xl bg-gray-700">
              <img
                src={photoUrl}
                alt="Image Preview"
                className="w-full max-h-80 object-contain rounded-lg border border-gray-600 shadow-md"
              />
            </div>
          )}

          <div>
            <label htmlFor="headline" className="block text-sm font-medium text-gray-400 mb-2">
              Headline
            </label>
            <input
              id="headline"
              type="text"
              className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition-colors duration-300"
              placeholder="Enter a captivating headline"
              {...register('headline', {
                required: 'Headline is required',
                maxLength: {
                  value: 100,
                  message: 'Headline cannot exceed 100 characters',
                },
              })}
            />
            {errors.headline && (
              <p className="mt-2 text-sm text-red-400">{errors.headline.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows="6"
              className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition-colors duration-300 resize-none"
              placeholder="Write a detailed description..."
              {...register('description', {
                required: 'Description is required',
                maxLength: {
                  value: 500,
                  message: 'Description cannot exceed 500 characters',
                },
              })}
            ></textarea>
            {errors.description && (
              <p className="mt-2 text-sm text-red-400">{errors.description.message}</p>
            )}
          </div>

          {error && <p className="text-sm text-red-400 text-center font-semibold mt-4">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 ${isSubmitting
              ? 'bg-purple-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Post News'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postadd;