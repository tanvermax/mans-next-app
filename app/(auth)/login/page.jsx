"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import Social from "@/components/Social";
import Head from "next/head";
// import useAuth from "../provider/useAuth";

const Login = () => {
//   const { loginwithemail } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    setLoginError(""); 
    loginwithemail(data.email, data.password)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/invalid-credential") {
          setLoginError("The password is incorrect.");
        } else if (errorCode === "auth/user-not-found") {
          setLoginError("No user found with this email.");
        } else if (errorCode === "auth/too-many-requests") {
          setLoginError(
            "Too many failed attempts. Please try again later."
          );
        } else {
          setLoginError("Something went wrong. Try again.");
        }
      });
  };

  return (
    <>
      <Head>
        <title>Login | Mans Packaging</title>
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 relative">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Login to continue your journey with <span className="font-semibold text-blue-600">Mans Packaging</span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", { required: "Email is required" })}
                className={`mt-2 w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                className={`mt-2 w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Error Message */}
            {loginError && (
              <p className="text-red-500 text-center text-sm mt-2">{loginError}</p>
            )}

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition duration-300"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <span className="flex-1 border-b border-gray-300"></span>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <span className="flex-1 border-b border-gray-300"></span>
          </div>

          {/* Social Login */}
          {/* <Social /> */}

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
