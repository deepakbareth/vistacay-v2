import React, { useState } from 'react';

const RentalCard = ({ rental }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group cursor-pointer flex flex-col w-full pb-4">
      
      {/* Image Container with smooth skeleton pulse */}
      <div className={`relative w-full aspect-[4/3] overflow-hidden bg-gray-200 transition-colors duration-500 ${!isLoaded ? 'animate-pulse' : ''}`}>
        <img
          src={rental.imageUrl}
          alt={rental.title}
          loading="lazy" 
          onLoad={() => setIsLoaded(true)} 
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded 
              ? 'opacity-100 scale-100 group-hover:scale-105' 
              : 'opacity-0 scale-105' 
          }`}
        />
        
        {/* Solid White Heart Icon */}
        <div className="absolute top-3 right-3 z-10">
          <svg 
            className="w-7 h-7 text-white drop-shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col pt-3 px-1">
        
        {/* NEW: Type and Rating Row */}
        <div className="flex justify-between items-center mb-1">
          <p className="text-gray-500 text-[12px] md:text-[13px] font-semibold uppercase tracking-wide">
            {rental.type}
          </p>
          
          {rental.rating && (
            <div className="flex items-center gap-1">
              {/* Only show the star icon if it's a number rating (hides it for "New") */}
              {rental.rating !== 'New' && (
                <svg className="w-3.5 h-3.5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              )}
              <span className="text-[13px] md:text-[14px] font-bold text-gray-900">
                {rental.rating}
              </span>
            </div>
          )}
        </div>

        {/* Cyan Title */}
        <h3 className="text-[#3bc4e2] text-[18px] md:text-[20px] font-normal leading-tight mb-1.5 group-hover:text-[#2baecf] transition-colors duration-300 truncate">
          {rental.title}
        </h3>
        
        {/* UPDATED Details Line: Now includes Guests! */}
        <p className="text-gray-900 text-[13px] md:text-[14px] tracking-wide mb-1 truncate">
          {rental.guests} Guests <span className="mx-1 text-gray-400">|</span> {rental.beds} Beds <span className="mx-1 text-gray-400">|</span> {rental.baths} Baths <span className="mx-1 text-gray-400">|</span> {rental.location}
        </p>
        
      

      </div>
      
    </div>
  );
};

export default RentalCard;