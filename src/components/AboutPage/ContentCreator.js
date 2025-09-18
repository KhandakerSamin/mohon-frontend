"use client";
import React, { useState, useRef, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";

const ContentCreator = () => {
  const videoData = [
    { id: 1, embedId: "oJ75aGAeRrw" },
    { id: 2, embedId: "h4aHezBXEqY" },
    { id: 3, embedId: "pwzu6NS5cuM" },
    { id: 4, embedId: "_Bb9PP7_2jU" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % videoData.length);
  }, [videoData.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + videoData.length) % videoData.length);
  }, [videoData.length]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = false;
  };
  
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  
  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) nextSlide();
      else prevSlide();
    }
    isDragging.current = false;
  };

  return (
    <div
      className="w-full max-w-[1230px] mx-auto pb-20 md:pb-40"
      style={{ color: 'var(--foreground)', backgroundColor: 'var(--background)' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-12 flex-wrap">
        <button
          className="hidden md:inline-block px-8 py-3  rounded-full rounded-bl-none border border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium"
          
        >
          Me As A Content Creator
        </button>

        <div className="mt-4 md:mt-0 hidden md:block">
          <button
            className="flex justify-between items-center gap-1 px-8 py-3 rounded-full rounded-bl-none border border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium "
            
          >
            More On YouTube
            <ArrowUpRight className="pl-1 w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-4 gap-6">
        {videoData.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-md min-w-[250px] h-[500px] shadow-lg"
            style={{ backgroundColor: 'var(--background)' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${item.embedId}?controls=1&rel=0&modestbranding=1`}
              title={`YouTube video ${item.id}`}
              className="w-full h-full rounded-md"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative  px-4 mb-10">
        <div className="flex justify-center items-center mb-15">
          <button
            className="px-6 py-3 rounded-full rounded-bl-none font-medium text-lg transition-colors duration-200"
            style={{
              border: '1px solid var(--foreground)',
              color: 'var(--foreground)',
              backgroundColor: 'var(--background)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--foreground)';
              e.currentTarget.style.color = 'var(--background)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--background)';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            Me As A Content Creator
          </button>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {videoData.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div
                    className="aspect-[9/16] max-h-[700px] overflow-hidden rounded-md shadow-lg"
                    style={{ backgroundColor: 'var(--background)' }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${item.embedId}?controls=1&rel=0&modestbranding=1`}
                      title={`YouTube video ${item.id}`}
                      className="w-full h-full rounded-md"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-3 shadow-lg z-20 transition-colors duration-200"
            style={{
              backgroundColor: 'var(--background)',
              color: 'var(--foreground)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--foreground)';
              e.currentTarget.style.color = 'var(--background)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--background)';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-3 shadow-lg z-20 transition-colors duration-200"
            style={{
              backgroundColor: 'var(--background)',
              color: 'var(--foreground)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--foreground)';
              e.currentTarget.style.color = 'var(--background)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--background)';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {videoData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="w-3 h-3 rounded-full transition-colors duration-200"
              style={{ backgroundColor: currentSlide === index ? 'var(--foreground)' : 'rgba(0,0,0,0.2)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;
