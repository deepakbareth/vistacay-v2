import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReviewSlide from './ReviewSlide'; // Import the child component

// INSTRUCTION: Update this path to point to your actual image file
import reviewBgImage from '../../../assets/websiteLogo.png';

const GuestReviews = () => {
  // Updated Data
  const reviewsData = [
    {
      id: 1,
      rating: 5,
      text: "The apartments are well equiped, the wifi worked excellent and we didnt have any trouble. I think the best is the Vistacay team, they were very considerate and helpful, specially Denise.",
      author: "Verified Guest",
    },
    {
      id: 2,
      rating: 5,
      text: "Absolutely stunning resort! The condo was spotless and had everything we needed for our family of 5. The pool area is gorgeous and it's so close to Universal Studios.",
      author: "Sarah M.",
    },
    {
      id: 3,
      rating: 5,
      text: "A perfect stay from start to finish. The amenities are top-notch and the location couldn't be better. We loved sitting on the balcony every morning with our coffee.",
      author: "Michael T.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Smooth fade transition logic
  const changeSlide = (newIndex) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 300); // Wait for fade out before changing text
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === reviewsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviewsData.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  return (
    <section className="relative w-full py-20 md:py-12 overflow-hidden">

      {/* Background Image Implementation */}
      <img
        src={reviewBgImage}
        alt="Reviews Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Dark Frosted Glass Overlay (Ensures text is readable) */}
      <div className="absolute inset-0 bg-slate-900/85 "></div>

      <div className="relative z-10 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-12">
          Guest <span className="font-semibold ">Reviews</span>
        </h2>

        {/* Main Slider Container */}
        <div className="relative w-full flex items-center justify-center min-h-[350px] md:min-h-[250px]">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 p-2 text-white/50 hover:text-white hover:scale-110 transition-all focus:outline-none z-20"
            aria-label="Previous review"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>

          {/* Injecting the Child Component */}
          <ReviewSlide
            review={reviewsData[currentIndex]}
            isFading={isFading}
          />

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 pl-20 text-white/50 hover:text-white hover:scale-110 transition-all focus:outline-none z-20"
            aria-label="Next review"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>

        </div>

        {/* Slide Indicators (Dots) */}
        <div className="flex justify-center gap-3 mt-12 ">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`transition-all duration-300 rounded-full ${currentIndex === index
                  ? 'w-2 h-1.5 bg-cyan-400'
                  : 'w-2 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default GuestReviews;