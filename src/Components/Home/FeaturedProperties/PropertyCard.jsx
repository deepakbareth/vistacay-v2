import React, { useState, useEffect } from 'react';

const PropertyCard = ({ property }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth entrance fade-in
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`group flex flex-col bg-white transition-all duration-700 ease-out transform-gpu overflow-hidden cursor-pointer ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      
      {/* Image Wrapper with smooth skeleton pulse */}
      <div className={`relative h-56 sm:h-64 overflow-hidden bg-gray-200 transition-colors duration-500 ${!isLoaded ? 'animate-pulse' : ''}`}>
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          /* Hardware accelerated ultra-smooth zoom */
          className={`w-full h-full object-cover transform-gpu will-change-transform transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 scale-100 group-hover:scale-[1.03]' 
              : 'opacity-0 scale-[1.02]' 
          }`}
        />
        
        {/* Exact Match: Plain White Drop-Shadow Heart (No Background Bubble) */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);      
          }}
          className="absolute top-3 right-3 p-1 hover:scale-110 active:scale-95 transition-all duration-300 z-10 will-change-transform"
        >
          <svg 
            className={`w-7 h-7 drop-shadow-md transition-colors ${isFavorited ? 'fill-red-500 text-red-500' : 'fill-white text-white'}`} 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={isFavorited ? 0 : 1}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Content Area - Minimal padding to match screenshot */}
      <div className="flex flex-col pt-3 pb-4 px-1">
        
        {/* ROW 1: Type (Left) and Rating (Right) */}
        <div className="flex justify-between items-center mb-1">
          <p className="text-gray-600 text-[13px] md:text-[14px] font-bold uppercase tracking-wide">
            {property.type}
          </p>
          {property.rating && (
            <div className="flex items-center gap-1">
              {/* Only show the star icon if it's a number rating (hides it for "New") */}
              {property.rating !== 'New' && (
                <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              )}
              <span className="text-[14px] md:text-[15px] font-bold text-black">
                {property.rating}
              </span>
            </div>
          )}
        </div>

        {/* ROW 2: Cyan Title */}
        <h3 className="text-[#3bc4e2] text-[20px] md:text-[22px] font-normal leading-tight mb-1.5 group-hover:text-[#2baecf] transition-colors duration-300 truncate">
          {property.title}
        </h3>

        {/* ROW 3: Details (Guests | Beds | Baths | Location) */}
        <p className="text-gray-900 text-[14px] md:text-[15px] tracking-wide mb-1.5 truncate">
          {property.guests} Guests <span className="mx-1.5 text-gray-400 font-light">|</span> {property.beds} Beds <span className="mx-1.5 text-gray-400 font-light">|</span> {property.baths} Baths <span className="mx-1.5 text-gray-400 font-light">|</span> {property.location}
        </p>
        
        
       
      </div>
    </div>
  );
};

export default PropertyCard;