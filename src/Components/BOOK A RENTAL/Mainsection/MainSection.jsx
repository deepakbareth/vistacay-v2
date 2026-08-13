import React, { useState } from 'react';
import RentalCard from '../../../Components/BOOK A RENTAL/Mainsection/RentalCard';
import { rentalsData } from '../../../data/rentalsData'; 

const MainSection = () => {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    // Instantly add 12 more items. 
    // The RentalCard's image blur effect will handle the smooth transition!
    setVisibleCount(prevCount => Math.min(prevCount + 12, rentalsData.length));
  };

  return (
    <div className="w-full min-h-screen bg-white pt-24 md:pt-[120px] pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
           Our Properties
          </h1>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-10">
          {rentalsData.slice(0, visibleCount).map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>

        {/* Instant 'Show More' Button */}
        {visibleCount < rentalsData.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="cursor-pointer group relative flex items-center justify-center min-w-[160px] bg-black text-white px-8 py-3.5 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-xl"
            >
              <span>Show More</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default MainSection;