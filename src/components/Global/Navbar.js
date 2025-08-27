"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md  ">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-gray-900">
            <span className="block">Md Abul</span>
            <span className="block">Hashem</span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#xtra" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              X-TRa
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              About Me
            </a>
            <a 
              href="#resume" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className={`w-6 h-6 text-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-200 mt-4">
            <a 
              href="#xtra" 
              className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              X-TRa
            </a>
            <a 
              href="#about" 
              className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
            <a 
              href="#resume" 
              className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;