import React from 'react';
import { Link } from 'react-router-dom';
import pbw from "../../assets/pbw.png";


const Footer = () => {
  // Navigation Links Arrays for clean mapping (Content Updated)
  const companyInfoLinks = [
    { name: 'Guest Service', path: '/vistacayinn-v2/#guest-service' },
    { name: 'About Us', path: '/vistacayinn-v2/#about' },
    { name: 'Blog', path: '/vistacayinn-v2/#blog' },
  ];

  const vacationRentalsLinks = [
    { name: 'All Rentals', path: '/vistacayinn-v2/#all-rentals' },
    { name: 'Contact Us', path: '/vistacayinn-v2/#contact' },
    { name: 'Specials', path: '/vistacayinn-v2/#specials' },
  ];

  const guestServicesLinks = [
    { name: 'Privacy Policy', path: '/vistacayinn-v2/#privacy' },
    { name: 'Area Info', path: '/vistacayinn-v2/#area-info' },
    { name: 'Terms', path: '/vistacayinn-v2/#terms' },
    { name: 'FAQ', path: '/vistacayinn-v2/#faq' },
  ];

  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Updated to 4 Columns to fit the new content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: COMPANY INFO */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Company Info</h3>
            <ul className="space-y-2">
              {companyInfoLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: VACATION RENTALS */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Vacation Rentals</h3>
            <ul className="space-y-2">
              {vacationRentalsLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: GUEST SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Guest Services</h3>
            <ul className="space-y-2">
              {guestServicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Contact Us</h3>
            <div className="text-gray-400 space-y-3">
              <p>
                <a href="tel:18666129754" className="hover:text-white transition-colors">
                  +1 (866) 612-9754
                </a>
              </p>
              <p>
                <a href="tel:14073128194" className="hover:text-white transition-colors">
                  +1 (407) 312-8194
                </a>
              </p>
              <p className="pt-2 leading-relaxed">
                8015 International Blvd #301<br />
                Orlando, FL 32819
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm text-gray-400 text-center">
          <span>© {new Date().getFullYear()} Vista Cay Inn by Densco LLC. All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <span className='flex items-center gap-2'>
            Designed & Maintained by{' '}
            <a href="https://premiumbusinesswebsites.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <img src={pbw} alt="" className="h-10" />
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;