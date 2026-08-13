import React from 'react';
import PropertyCard from './PropertyCard';

// 1. Import your centralized data array
import { properties } from '../../../data/properties';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {

  // 2. Grab exactly the first 6 items from the rentals data
  const featuredData = properties.slice(0, 6);

  return (
    <section className="w-full py-20 md:py-15 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 tracking-tight">
            Our Featured <span className="font-semibold">Properties</span>
          </h2>
          {/* Subtle grey underline centered */}
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* CSS Grid for Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredData.map((property, idx) => (
            /* We now just pass the whole 'property' object into the card */
            <PropertyCard
              key={idx}
              property={{
                id: idx,
                imageUrl: property.img,
                title: property.title,
                guests: property.guests,
                beds: property.bedrooms,
                baths: property.bathrooms,
                type: 'Vacation Home',
                rating: '5.0',
                location: 'Orlando'
              }}
            />
          ))}
        </div>

        {/* Bottom Centered "View All" Button */}
        <div className="mt-16 flex justify-center">
          {/* Wrapped the button safely in the anchor tag for proper HTML structure */}
          <Link to="/vistacayinn-v2/#our-rentals">
            <button className="cursor-pointer group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 will-change-transform">
              <span>view all properties</span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
