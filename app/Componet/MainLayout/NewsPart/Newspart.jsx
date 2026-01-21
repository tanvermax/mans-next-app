"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Newspart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mans-server.vercel.app/newspost");
      if(res){setLoading(false);}
      setData(res.data || []);
    };
    fetchData();
  }, [setData]);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && data.length > 0) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, data.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // ✅ Date formatter
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = now - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours < 1) {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
      }
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    }
    if (diffDays < 30) return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) !== 1 ? "s" : ""} ago`;
    return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) !== 1 ? "s" : ""} ago`;
  };

  // ✅ Slider controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    // Reset autoplay timer when manually navigating
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    // Reset autoplay timer when manually navigating
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset autoplay timer when manually navigating
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  // ✅ Animate slide
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  // console.log(data)
  // Skeleton loading component
  const SkeletonLoader = () => (
    <div className="space-y-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="border border-gray-200 rounded-2xl p-5 animate-pulse">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-gray-300 rounded-2xl lg:h-100 h-60 w-full md:w-1/3 object-cover"></div>
            <div className="w-full md:w-2/3 p-5 space-y-4">
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <section className="md:py-24 py-10 overflow-x-hidden bg-gray-50">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-manrope text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Popular Blogs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, trends, and stories from our team of experts
          </p>
        </div>

        {loading ? (
          <SkeletonLoader />
        ) : data.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No blog posts available at the moment.</p>
          </div>
        ) : (
          <>
            <div
              className="relative mb-14 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {data.map((news) => (
                  <div
                    key={news._id}
                    className="w-full flex-shrink-0 px-3"
                  >
                    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-600">
                      <div className="md:flex">
                        <Link
                          href={`/NewsPart/${news.slug || news._id}`}
                          className="block md:w-2/5 relative overflow-hidden"
                        >
                          <Image
                            src={news.photoUrl}
                            alt={news.headline}
                            width={300}
                            height={400}
                            className="rounded-l-2xl md:w-full md:h-[50vh]   object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={false}
                            quality={75}
                          />
                          {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
                        </Link>

                        <div className="md:w-3/5 p-6 flex flex-col justify-between">
                          <div className="flex items-center mb-3">
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {news.category || "General"}
                            </span>
                            <span className="text-sm text-gray-500 ml-3">
                              {formatDate(news.createdAt)}
                            </span>
                          </div>

                          <div className="mb-6">
                            <Link href={`/NewsPart/${news.slug || news._id}`}>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-indigo-600 transition-colors">
                              {news.headline}
                            </h3>
                          </Link>

                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {news.description}
                          </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                                <span className="text-indigo-800 font-medium text-sm">MP</span>
                              </div>
                              <span className="text-sm text-gray-700">MANS Pack C.</span>
                            </div>
                            <Link
                              href={`/NewsPart/${news.slug || news._id}`}
                              className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center"
                            >
                              Read more
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className={`absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={currentSlide === 0}
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className={`absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors ${currentSlide === data.length - 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={currentSlide === data.length - 1}
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              {/* Slide indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {data.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? "bg-indigo-600 w-6" : "bg-gray-300"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <Link
              href="/NewsPart"
              className="text-base border border-gray-300 shadow-sm rounded-full py-3.5 px-2 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
            >
              View All Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Newspart;