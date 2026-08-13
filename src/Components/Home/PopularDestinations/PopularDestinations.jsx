// src/Components/Home/PopularDestinations.jsx
import React from 'react';
import DestinationCard from './DestinationCard'; // Importing the child component

const PopularDestinations = () => {
  
  // Data array
  const destinationsData = [
    {
      id: 1,
      country: 'Destination 1',
      label: "",
      // INSTRUCTION: Replace with your actual beach image from assets
      imageUrl: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=1200&q=80', 
    },
    {
      id: 2,
      country: 'Destination 2',
      label: '',
      // INSTRUCTION: Replace with your actual interior image from assets
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    }
  ];

  return (
    <section className="w-full py-20 md:py-15 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 tracking-tight">
            Popular <span className="font-semibold">Destinations</span>
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mt-6 rounded-full opacity-20"></div>
        </div>

        {/* CSS Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {destinationsData.map((dest) => (
            <DestinationCard 
              key={dest.id} 
              country={dest.country} 
              label={dest.label} 
              imageUrl={dest.imageUrl} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularDestinations;