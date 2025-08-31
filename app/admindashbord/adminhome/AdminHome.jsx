// "use client";

// import axios from "axios";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

// const Adminhome = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm();

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   // Watch photo URL input
//   const photoUrl = watch("photoUrl");

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setError(null);
//     setSuccess(null);

//     const news = {
//       headline: data.headline,
//       description: data.description,
//       photoUrl: data.photoUrl,
//     };

//     try {
//       const res = await axios.post("/api/newspost", news);
//       console.log(res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Your work has been saved",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         reset();
//       }
//     } catch (err) {
//       setError(err.message || "An error occurred");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className=" bg-gray-100 flex items-center justify-center">
//       <div className="bg-white mb-6  shadow-xl p-8 w-full ">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Upload Your Photo (by URL)
//         </h1>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Photo URL */}
//           <div>
//             <label
//               htmlFor="photoUrl"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Photo URL
//             </label>
//             <input
//               id="photoUrl"
//               type="text"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Paste image URL here"
//               {...register("photoUrl", {
//                 required: "Photo URL is required",
//               })}
//             />
//             {errors.photoUrl && (
//               <p className="mt-1 text-sm text-red-600">
//                 {errors.photoUrl.message}
//               </p>
//             )}
//           </div>

//           {/* Live Preview */}
//           {photoUrl && (
//             <div className="flex justify-center">
//               <img
//                 src={photoUrl}
//                 alt="Preview"
//                 className="w-full h-64 object-cover rounded-lg border mt-2"
//               />
//             </div>
//           )}

//           {/* Headline */}
//           <div>
//             <label
//               htmlFor="headline"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Headline
//             </label>
//             <input
//               id="headline"
//               type="text"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter a catchy headline"
//               {...register("headline", {
//                 required: "Headline is required",
//                 maxLength: {
//                   value: 100,
//                   message: "Headline cannot exceed 100 characters",
//                 },
//               })}
//             />
//             {errors.headline && (
//               <p className="mt-1 text-sm text-red-600">
//                 {errors.headline.message}
//               </p>
//             )}
//           </div>

//           {/* Description */}
//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Description
//             </label>
//             <textarea
//               id="description"
//               rows="4"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Describe your photo..."
//               {...register("description", {
//                 required: "Description is required",
//                 maxLength: {
//                   value: 500,
//                   message: "Description cannot exceed 500 characters",
//                 },
//               })}
//             ></textarea>
//             {errors.description && (
//               <p className="mt-1 text-sm text-red-600">
//                 {errors.description.message}
//               </p>
//             )}
//           </div>

//           {/* Error & Success */}
//           {error && (
//             <p className="text-sm text-red-600 text-center">{error}</p>
//           )}
//           {success && (
//             <p className="text-sm text-green-600 text-center">{success}</p>
//           )}

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full py-2 px-4 rounded-lg text-white transition duration-200 ${
//               isSubmitting
//                 ? "bg-blue-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Adminhome;
