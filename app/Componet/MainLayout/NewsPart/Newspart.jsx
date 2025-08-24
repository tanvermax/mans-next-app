// app/Component/NewsPart/Newspart.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import axios from "axios";

const Newspart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use relative path instead of localhost for production compatibility
        const response = await axios.get("/api/newspost");
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
console.log(data)
  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
  };

  // Slide navigation functions
  const nextSlide = () => {
    if (currentSlide < data.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide(); // Swipe left
    if (diff < -50) prevSlide(); // Swipe right
  };

  // Update slider transform
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  if (loading) return <div className="skeleton h-32 w-full"></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="md:py-24 py-10 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-2xl lg:text-4xl font-bold text-gray-900 text-center mb-14">
          Our popular blogs
        </h2>
        <div className="relative mb-14">
          <div
            ref={sliderRef}
            className="flex gap-x-5 gap-y-8 snap-x snap-mandatory transition-transform duration-300 ease-in-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {data.map((newsdata) => (
              <div
                key={newsdata._id}
                className="group cursor-pointer w-full border border-gray-300 rounded-2xl md:p-5 transition-all duration-300 hover:border-indigo-600 snap-start shrink-0"
              >
                <div className="md:flex items-center mb-6">
                  <Link href={`/NewsPart/${newsdata.slug}`} className="block w-full">
                    <img
                      src={newsdata.photoUrl}
                      alt={newsdata.headline}
                      className="rounded-2xl lg:h-100 h-60 w-full p-2 mx-auto object-cover"
                    />
                  </Link>
                  <div className="block p-5">
                    <Link href={`/NewsPart/${newsdata.slug}`}>
                      <h4 className="text-gray-900 lg:text-3xl text-base my-4 font-semibold md:leading-8 hover:text-indigo-600 transition-colors">
                        {newsdata.headline}
                      </h4>
                    </Link>
                    <p className="py-3 lg:text-base text-xs line-clamp-3">
                      {newsdata.description}
                    </p>
                    <div className="flex gap-5 items-center justify-between font-medium">
                      <h6 className="text-sm text-gray-500">By MANS Pack C.</h6>
                      <span className="text-sm text-indigo-600">
                        {formatDate(newsdata.createdAt ? news.createdAt : "9")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className={`absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${currentSlide === data.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
              }`}
            disabled={currentSlide === data.length - 1}
            aria-label="Next slide"
          >
            →
          </button>
        </div>

        <Link
          href="/NewsPart"
          className="md:text-base text-[10px] cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Newspart;