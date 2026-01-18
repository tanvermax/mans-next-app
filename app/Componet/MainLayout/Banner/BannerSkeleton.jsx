// Componet/MainLayout/Banner/BannerSkeleton.jsx
import React from 'react';

const BannerSkeleton = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-200 h-[400px] md:h-[500px] lg:h-[700px]">
      {/* The Animated Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_100px_rgba(255,255,255,0.2)]" />
      
      {/* Content Placeholder to mimic your Banner text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-3/4 h-8 md:h-12 bg-gray-300 rounded-lg mb-6 animate-pulse" />
        <div className="w-1/2 h-4 md:h-6 bg-gray-300 rounded-lg mb-8 animate-pulse" />
        <div className="w-32 h-10 bg-gray-300 rounded-md animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default BannerSkeleton;