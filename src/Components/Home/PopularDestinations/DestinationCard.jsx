// src/Components/Home/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ country, label, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden  cursor-pointer aspect-[4/3] md:aspect-[3/2] shadow-md hover:shadow-2xl transition-shadow duration-500">
      
      {/* Background Image with smooth hover scale effect */}
      <img 
        src={imageUrl} 
        alt={`${country} Rentals`} 
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      
      {/* Dark Gradient Overlay (Bottom Up) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text Content Container */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <h3 className="text-3xl md:text-4xl text-center font-bold text-white tracking-wide mb-1">
          {country}
        </h3>
        <p className="text-sm md:text-base text-white/80 font-medium uppercase tracking-[0.2em]">
          {label}
        </p>
      </div>
      
    </div>
  );
};

export default DestinationCard;