import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Navigation Links Array for clean mapping
  const navLinks = [
    { name: 'Home', path: '/vistacayinn-v2/' },
    { name: 'Book a Rental', path: '/vistacayinn-v2/book-a-rental' },
    { name: 'Property Management', path: '/vistacayinn-v2/#property-management' },
    { name: 'Contact Us', path: '/vistacayinn-v2/#contact' }
  ];

  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vista Cay Inn</h3>
            <p className="text-gray-400">Your perfect vacation rental experience in Orlando.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@vistacayinn.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
