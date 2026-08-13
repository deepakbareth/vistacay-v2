import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Make sure this path is correct for your logo

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState({});
    const location = useLocation();

    // Function to toggle mobile submenus
    const toggleMobileSubmenu = (name) => {
        setMobileExpanded((prev) => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    // NavLinks with EXACTLY 4 main items and Nested Dropdowns (Your Content)
    const navLinks = [
        {
            name: 'Our Rentals',
            to: '/vistacayinn-v2/#rentals',
            items: [
                { name: 'All Orlando Vacation Rentals', to: '/vistacayinn-v2/#all-rentals' },
                { name: 'Vacation Homes w/ Private Pool', to: '/vistacayinn-v2/#private-pool' },
                { name: 'Three Bedroom Vacation Townhouses', to: '/vistacayinn-v2/#3bed-townhouse' },
                { name: 'Two Bedroom Vacation Condos', to: '/vistacayinn-v2/#2bed-condo' },
                { name: 'Three Bedroom Vacation Condos', to: '/vistacayinn-v2/#3bed-condo' },
                { name: 'Four Bedroom Vacation Condos', to: '/vistacayinn-v2/#4bed-condo' },
            ]
        },
        {
            name: 'VistaCay',
            to: '/vistacayinn-v2/#vistacay',
            items: [
                { name: 'Communities', to: '/vistacayinn-v2/#communities' },
                {
                    name: 'Local Area Guide',
                    to: '/vistacayinn-v2/#guide',
                    subItems: [
                        { name: 'Activities & Attractions', to: '/vistacayinn-v2/#attractions' },
                        { name: 'AREA MAP', to: '/vistacayinn-v2/#map' },
                        { name: 'Driving Direction', to: '/vistacayinn-v2/#directions' },
                        { name: 'Shingle Creek Golf Course', to: '/vistacayinn-v2/#golf' },
                        { name: 'Weather', to: '/vistacayinn-v2/#weather' },
                    ]
                }
            ]
        },
        {
            name: 'For Guests',
            to: '/vistacayinn-v2/#guests',
            items: [
                { name: 'SPECIALS', to: '/vistacayinn-v2/#specials' },
                { name: 'Guest Services', to: '/vistacayinn-v2/#services' }
            ]
        },
        {
            name: 'About Us',
            to: '/vistacayinn-v2/#about',
            items: [
                { name: 'Property Management', to: '/vistacayinn-v2/#management' },
                { name: 'Contact / Company Information', to: '/vistacayinn-v2/#contact' },
                { name: 'Privacy Policy', to: '/vistacayinn-v2/#privacy' },
                { name: 'FAQ', to: '/vistacayinn-v2/#faq' },
                { name: 'Terms and Conditions', to: '/vistacayinn-v2/#terms' },
            ]
        }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50">

            {/* The dark, flat semi-transparent bar */}
            <div className="w-full bg-neutral-900/60 h-16 md:h-30 relative">

                {/* CHANGED: max-w-7xl mx-auto shifts items "thoda left" just like in your image */}
                <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center justify-end">

                    {/* LOGO - UNTOUCHED (0% Change) */}
                    <div className="absolute left-4 lg:left-8 top-9 md:top-8 h-6 md:h-15 w-22 md:w-35 flex items-center justify-center z-10 border-b border-gray-100 hover:opacity-90 transition-opacity drop-shadow-xl">
                        <Link to="/vistacayinn-v2/" className=" flex items-center justify-center cursor-pointer">
                            <img
                                src={logo}
                                alt="FiveStar Property"
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-8 lg:space-x-14 items-center h-full">
                        {navLinks.map((link) => {
                            const currentPath = location.pathname + location.hash;
                            const isActive = currentPath === link.to;
                            const hasDropdown = Boolean(link.items && link.items.length > 0);

                            return (
                                <div key={link.name} className="relative group h-full flex items-center">
                                    <Link
                                        to={link.to}
                                        className={`relative text-white text-xs lg:text-[18px] font-medium tracking-wide uppercase transition-colors hover:text-gray-300 py-1 flex items-center gap-1
                      /* Beautiful Animated Underline */
                      after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
                      ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                    `}
                                    >
                                        {link.name}
                                        {hasDropdown && (
                                            <ChevronDown size={18} className="transition-transform duration-300 group-hover:rotate-180" />
                                        )}
                                    </Link>

                                    {/* Desktop Dropdown Menu */}
                                    {hasDropdown && (
                                        // FIXED: Conditionally added 'right-0' for 'About Us' so it doesn't get cut off on the right edge
                                        <div className={`absolute top-[80%] hidden group-hover:flex flex-col bg-neutral-900/95 backdrop-blur-md shadow-2xl border border-[#333333] rounded-lg overflow-visible py-2 animate-[fadeIn_0.2s_ease-out] ${link.name === 'About Us' ? 'left-[-90px] min-w-[240px]' : 'left-0 min-w-[280px]'}`}>                                            {link.items.map((subItem) => {
                                            const hasSubMenu = Boolean(subItem.subItems && subItem.subItems.length > 0);

                                            return (
                                                <div key={subItem.name} className="relative group/nested w-full">
                                                    <Link
                                                        to={subItem.to}
                                                        className="px-5 py-3 w-full text-[14px] text-gray-200 hover:text-white hover:bg-white/10 transition-colors uppercase tracking-wide flex items-center justify-between"
                                                    >
                                                        {subItem.name}
                                                        {/* Arrow pointing down, rotates up on hover */}
                                                        {hasSubMenu && <ChevronDown size={14} className="group-hover/nested:rotate-180 transition-transform" />}
                                                    </Link>

                                                    {/* Nested Desktop Dropdown (3rd Level) */}
                                                    {hasSubMenu && (
                                                        // FIXED: shifted right with 'left-4' and reduced width to look like a proper sub-menu
                                                        <div className="absolute top-full left-4 hidden group-hover/nested:flex flex-col bg-neutral-900/95 backdrop-blur-md shadow-2xl border border-[#333333] rounded-lg w-[248px] py-2 animate-[fadeIn_0.15s_ease-out] z-50">

                                                            {/* Invisible Bridge to prevent hover from dropping */}
                                                            <div className="absolute -top-3 left-0 w-full h-3 bg-transparent"></div>

                                                            {subItem.subItems.map((nested) => (
                                                                <Link
                                                                    key={nested.name}
                                                                    to={nested.to}
                                                                    className="px-5 py-3 text-[14px] text-gray-200 hover:text-white hover:bg-white/10 transition-colors uppercase tracking-wide"
                                                                >
                                                                    {nested.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button for Responsiveness */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-white hover:text-gray-300 transition-colors focus:outline-none"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Dark background overlay when mobile menu is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Modern Right-Side Mobile Drawer */}
            <div
                className={`fixed top-15 right-0 rounded-3xl w-[280px] bg-black/80 backdrop-blur-[15px] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto max-h-[85vh] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-end p-4 h-16 items-center sticky top-0 bg-black/50 backdrop-blur-md z-10 border-b border-[#333333]">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-gray-400 transition-colors focus:outline-none"
                    >
                        <X size={28} />
                    </button>
                </div>

                <div className="flex flex-col px-6 py-4 space-y-2 mb-4">
                    {navLinks.map((link) => {
                        const currentPath = location.pathname + location.hash;
                        const isActive = currentPath === link.to;
                        const hasDropdown = Boolean(link.items && link.items.length > 0);
                        const isExpanded = Boolean(mobileExpanded[link.name]);

                        return (
                            <div key={link.name} className="flex flex-col border-b border-[#333333]">
                                <div className="flex items-center justify-between w-full">
                                    <Link
                                        to={link.to}
                                        onClick={() => !hasDropdown && setIsOpen(false)}
                                        className={`relative w-fit text-white text-[15px] font-semibold tracking-wider py-4 uppercase transition-colors hover:text-gray-300
                      after:content-[''] after:absolute after:bottom-3 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
                      ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                    `}
                                    >
                                        {link.name}
                                    </Link>

                                    {hasDropdown && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleMobileSubmenu(link.name);
                                            }}
                                            className="p-2 text-gray-300 hover:text-white"
                                        >
                                            <ChevronDown
                                                size={20}
                                                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {hasDropdown && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[800px] mb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="flex flex-col pl-4 space-y-1 border-l-2 border-[#555555] ml-2">
                                            {link.items.map((subItem) => {
                                                const hasSubMenu = Boolean(subItem.subItems && subItem.subItems.length > 0);
                                                const isSubExpanded = Boolean(mobileExpanded[subItem.name]);

                                                return (
                                                    <div key={subItem.name} className="flex flex-col w-full">
                                                        <div className="flex items-center justify-between w-full">
                                                            <Link
                                                                to={subItem.to}
                                                                onClick={() => !hasSubMenu && setIsOpen(false)}
                                                                className="py-2.5 text-[13px] text-gray-300 hover:text-white uppercase tracking-wider transition-colors"
                                                            >
                                                                {subItem.name}
                                                            </Link>

                                                            {hasSubMenu && (
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        toggleMobileSubmenu(subItem.name);
                                                                    }}
                                                                    className="p-1 text-gray-400 hover:text-white"
                                                                >
                                                                    <ChevronDown
                                                                        size={16}
                                                                        className={`transition-transform duration-300 ${isSubExpanded ? 'rotate-180' : ''}`}
                                                                    />
                                                                </button>
                                                            )}
                                                        </div>

                                                        {/* Nested Mobile Dropdown (3rd Level) */}
                                                        {hasSubMenu && (
                                                            <div
                                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isSubExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
                                                            >
                                                                <div className="flex flex-col pl-3 space-y-1 border-l border-[#444444] ml-1 mt-1 mb-2">
                                                                    {subItem.subItems.map((nested) => (
                                                                        <Link
                                                                            key={nested.name}
                                                                            to={nested.to}
                                                                            onClick={() => setIsOpen(false)}
                                                                            className="py-2 text-[12px] text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
                                                                        >
                                                                            {nested.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;