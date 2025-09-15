"use client";
import React, { useState } from 'react';

const ContentCreator = () => {
  // Image data with Instagram links
  const imageData = [
    { 
      id: 1, 
      image: '/cc-1.png', 
      instaLink: '' // Add your Instagram link here
    },
    { 
      id: 2, 
      image: '/cc-2.png', 
      instaLink: '' // Add your Instagram link here
    },
    { 
      id: 3, 
      image: '/cc-3.png', 
      instaLink: '' // Add your Instagram link here
    },
    { 
      id: 4, 
      image: '/cc-4.png', 
      instaLink: '' // Add your Instagram link here
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImageClick = (instaLink) => {
    if (instaLink) {
      window.open(instaLink, '_blank');
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageData.length) % imageData.length);
  };

  return (
    <div className="w-full max-w-[1230px] mx-auto py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <button className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
          Me As A Content Creator
        </button>
        <button className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
          More On Insta 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>

      {/* Desktop Grid - 4 images in a row */}
      <div className="hidden md:grid md:grid-cols-4 gap-6">
        {imageData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleImageClick(item.instaLink)}
            className="group cursor-pointer overflow-hidden rounded-2xl min-w-[250px] min-h-[400px] hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={`Content Creator Post ${item.id}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg'; // Fallback image
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative">
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {imageData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleImageClick(item.instaLink)}
                className="w-full flex-shrink-0 cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={item.image}
                    alt={`Content Creator Post ${item.id}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder-image.jpg'; // Fallback image
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {imageData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;