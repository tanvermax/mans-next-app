"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Swal from "sweetalert2";
// import Social from "@/components/Social";
import logo from "@/app/assets/manspackaginglogo.png";
import useAxiosPublic from "@/app/Hook/useaxiospublic";
// import useAuth from "@/app/provider/useAuth";

const Signup = () => {
//   const { setUser, handlenewuser } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter();
  const axioxpublic = useAxiosPublic();

  const password = watch("password");

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      userName: data.fullName,
      role: "user",
      password: data.password,
    };

    const result = await handlenewuser(data.email, data.password);
    if (result.user) {
      setUser(result.user);
    }

    axioxpublic.post("/user", user).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Account created successfully!",
          showConfirmButton: false,
          timer: 1800,
          position: "top-end",
        });
      }
      router.push("/");
    });
  };

  return (
    <>
      <Head>
        <title>Sign Up | Mans Packaging</title>
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
        <motion.div
          className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logo + Title */}
          <div className="text-center mb-8">
            <motion.img
              src={logo.src}
              alt="Mans Packaging"
              className="w-36 mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-6">
              Create Your Account
            </h2>
            <p className="text-gray-500 mt-1">
              Join us and explore premium packaging solutions ✨
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                {...register("fullName", { required: "Name is required" })}
                type="text"
                placeholder="John Doe"
                className={`mt-2 w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="you@example.com"
                className={`mt-2 w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile No.</label>
              <input
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: { value: /^[0-9]{11}$/, message: "11 digits required" },
                })}
                type="tel"
                placeholder="01XXXXXXXXX"
                className={`mt-2 w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
                type="password"
                placeholder="••••••"
                className={`mt-2 w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                })}
                type="password"
                placeholder="••••••"
                className={`mt-2 w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="col-span-2 mt-6">
              <motion.button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:opacity-90 transition duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Sign Up
              </motion.button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <span className="flex-1 border-b border-gray-300"></span>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <span className="flex-1 border-b border-gray-300"></span>
          </div>

          {/* Social Sign Up */}
          {/* <Social /> */}

          {/* Already have account */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Log in
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Signup;
