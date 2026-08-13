import React from 'react';
import { Quote } from 'lucide-react';

const ReviewSlide = ({ review, isFading }) => {
  return (
    <div className={`max-w-6xl px-8 md:px-5 transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Rating */}
      <div className="flex justify-center gap-1 mb-6 text-[#c69a72]">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="text-xl">★</span>
        ))}
      </div>
      
      {/* Review Text */}
      <p className="text-lg md:text-2xl text-white font-light leading-relaxed md:leading-loose mb-8 italic">
        "{review.text}"
      </p>
      
      {/* Name and Image */}
      <div className="flex items-center justify-center gap-4">
        {review.img && <img src={review.img} alt={review.author} className="w-12 h-12 rounded-full object-cover border border-[#c69a72]" />}
        <p className="text-white font-semibold tracking-wide uppercase text-sm">
          {review.author}
        </p>
      </div>

    </div>
  );
};

export default ReviewSlide;