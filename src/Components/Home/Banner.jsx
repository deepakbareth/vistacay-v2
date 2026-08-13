import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import bannerImage from '../../assets/bannerImg.png'; 

const Banner = () => {
  // Calendar State
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // Custom Dropdown States (Default text updated to match screenshot)
  const [typeOpen, setTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Type');
  
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState('Guests');

  // Refs for closing dropdowns when clicking outside
  const typeRef = useRef(null);
  const guestsRef = useRef(null);

  // Handle click outside to close dropdowns smoothly
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (typeRef.current && !typeRef.current.contains(event.target)) setTypeOpen(false);
      if (guestsRef.current && !guestsRef.current.contains(event.target)) setGuestsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dropdown Options
  const typeOptions = ['Condo', 'House', 'Studio', 'Townhome'];
  const guestOptions = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'];

  return (
    <div className="relative w-full h-160 pb-20 min-h-[600px] flex flex-col items-center justify-center">
      
      {/* Background Image */}
      <img 
        src={bannerImage} 
        alt="Luxury Property" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Main Content */}
      <div className="relative z-10 w-full  px-4 h-full py-5 sm:px-6 lg:px-8 flex flex-col items-center justify-end mt-12 ">
   
        {/* Exact Match: Translucent horizontal container */}
        <div className="w-full max-w-6xl bg-white/30 backdrop-blur-sm p-3 md:p-5 shadow-xl">
          
          {/* Inner Grid layout mapping exactly to the screenshot */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-15">
            
            {/* 1. Check In */}
            <div className="flex-1 bg-white h-12 md:h-14 flex items-center px-4 relative z-40 cursor-pointer hover:bg-gray-50 transition-colors">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()} 
                placeholderText="Check In"
                popperPlacement="bottom-start" 
                className="w-full h-full bg-transparent outline-none text-black font-medium text-[15px] md:text-lg cursor-pointer placeholder:text-black placeholder:font-medium"
              />
            </div>

            {/* 2. Check Out */}
            <div className="flex-1 bg-white h-12 md:h-14 flex items-center px-4 relative z-30 cursor-pointer hover:bg-gray-50 transition-colors">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate || new Date()} 
                placeholderText="Check Out"
                popperPlacement="bottom-start" 
                className="w-full h-full bg-transparent outline-none text-black font-medium text-[15px] md:text-lg cursor-pointer placeholder:text-black placeholder:font-medium"
              />
            </div>

            {/* 3. Guests Dropdown */}
            <div 
              ref={guestsRef}
              onClick={() => {
                setGuestsOpen(!guestsOpen);
                setTypeOpen(false); 
              }}
              className="flex-1 bg-white h-12 md:h-14 flex items-center justify-between px-4 relative cursor-pointer hover:bg-gray-50 transition-colors group"
            >
              <span className="text-black font-medium text-[15px] md:text-lg">
                {selectedGuests}
              </span>
              
              {/* Native SVG Down Arrow to match screenshot */}
              <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${guestsOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-1 w-full min-w-[200px] bg-white border border-gray-200 shadow-xl z-[60] transition-all duration-200 origin-top ${
                guestsOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
              }`}>
                <div className="py-2">
                  {guestOptions.map((option) => (
                    <div 
                      key={option}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        setSelectedGuests(option);
                        setGuestsOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between transition-colors"
                    >
                      <span className={`text-sm ${selectedGuests === option ? 'font-bold text-black' : 'text-gray-700'}`}>
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Type Dropdown */}
            <div 
              ref={typeRef}
              onClick={() => {
                setTypeOpen(!typeOpen);
                setGuestsOpen(false); 
              }}
              className="flex-1 bg-white h-12 md:h-14 flex items-center justify-between px-4 relative cursor-pointer hover:bg-gray-50 transition-colors group"
            >
              <span className="text-black font-medium text-[15px] md:text-lg">
                {selectedType}
              </span>
              
              {/* Native SVG Down Arrow */}
              <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${typeOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-1 w-full min-w-[200px] bg-white border border-gray-200 shadow-xl z-[60] transition-all duration-200 origin-top ${
                typeOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
              }`}>
                <div className="py-2">
                  {typeOptions.map((option) => (
                    <div 
                      key={option}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        setSelectedType(option);
                        setTypeOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between transition-colors"
                    >
                      <span className={`text-sm ${selectedType === option ? 'font-bold text-black' : 'text-gray-700'}`}>
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. SEARCH Button */}
            <div className="flex-1">
              <button className="w-full h-12 md:h-14 bg-black text-white font-medium text-[15px] md:text-lg tracking-wide hover:bg-gray-900 transition-colors flex items-center justify-center cursor-pointer">
                SEARCH
              </button>
            </div>

          </div>
        </div>
      </div>
      
      {/* Required CSS to make the DatePicker fill the entire white box correctly */}
      <style dangerouslySetInnerHTML={{__html: `
        .react-datepicker-wrapper { width: 100%; height: 100%; display: flex; align-items: center; }
        .react-datepicker__input-container { width: 100%; height: 100%; display: flex; align-items: center; }
        .react-datepicker__input-container input { width: 100%; height: 100%; cursor: pointer; }
      `}} />
    </div>
  );
};

export default Banner;