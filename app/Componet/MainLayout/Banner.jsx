"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Loading from "../Element/Loading";
import axios from "axios";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mans-server.vercel.app/banner");
      if (res.data && res.data.length > 0) {
        setLoading(false)
      }
      setSlides(res.data || []);
    };
    fetchData();
  }, [setSlides]);
  

  if (loading) return <Loading />;

  return (
    <section aria-label="Featured Services Banner" className="w-full mx-auto relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet bg-white opacity-50",
          bulletActiveClass: "swiper-pagination-bullet-active !opacity-100 !bg-blue-600",
          renderBullet: function (index, className) {
            return `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`;
          }
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          // Announce slide change for screen readers
          const liveRegion = document.getElementById('slide-status');
          if (liveRegion) {
            liveRegion.textContent = `Slide ${swiper.activeIndex + 1} of ${swiper.slides.length}: ${slides[swiper.activeIndex]?.heading}`;
          }
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide._id?.$oid || index}>
            <div className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full">
              <Image
                src={slide.image}
                alt={slide.heading || "Banner image"}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKbPW/GSQ6tZTFuX50aTd4MlBqpbq9mY4S8NMFq1Z3mkdExPJEDpN0f/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIRMWH/2gAIAQIBAT8AZGzEnJ//xAAZEQACAwEAAAAAAAAAAAAAAAABEQACIYH/2gAIAQMBAT8ATXWUcVn/2Q=="
              />

              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

              {/* Content container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:p-8">
                <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg animate-fade-in">
                    {slide.heading}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto drop-shadow-md animate-fade-in-delayed">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-4 animate-fade-in-more-delayed">
                    <a
                      href={slide.ctaLink || "#"}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      aria-label={`Learn more about ${slide.heading}`}
                    >
                      {slide.ctaText || "Learn More"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="swiper-button-next !text-white !mr-8 after:!text-2xl md:after:!text-3xl" aria-label="Next slide"></div>
        <div className="swiper-button-prev !text-white !ml-8 after:!text-2xl md:after:!text-3xl" aria-label="Previous slide"></div>
      </Swiper>

      {/* Live region for screen readers to announce slide changes */}
      <div id="slide-status" className="sr-only" aria-live="polite" aria-atomic="true"></div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-delayed {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.3s forwards;
        }
        .animate-fade-in-more-delayed {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }
      `}</style>
    </section>
  );
};

export default Banner;
