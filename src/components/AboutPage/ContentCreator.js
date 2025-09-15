"use client";
import React, { useState, useRef, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ContentCreator = () => {
     // Video data with YouTube links and embed IDs
     const videoData = [
          {
               id: 1,
               youtubeUrl: 'https://www.youtube.com/shorts/oJ75aGAeRrw',
               embedId: 'oJ75aGAeRrw'
          },
          {
               id: 2,
               youtubeUrl: 'https://www.youtube.com/shorts/h4aHezBXEqY',
               embedId: 'h4aHezBXEqY'
          },
          {
               id: 3,
               youtubeUrl: 'https://www.youtube.com/shorts/pwzu6NS5cuM',
               embedId: 'pwzu6NS5cuM'
          },
          {
               id: 4,
               youtubeUrl: 'https://www.youtube.com/shorts/_Bb9PP7_2jU',
               embedId: '_Bb9PP7_2jU'
          }
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

     // Handle touch events for swipe
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

          const swipeThreshold = 50;
          const swipeDistance = touchStartX.current - touchEndX.current;

          if (Math.abs(swipeDistance) > swipeThreshold) {
               if (swipeDistance > 0) {
                    nextSlide();
               } else {
                    prevSlide();
               }
          }

          isDragging.current = false;
     };

     return (
          <div className="w-full max-w-[1230px] mx-auto py-12">
               {/* Header */}
               <div className="flex justify-between items-center mb-12">
                    <button className="px-6 hidden md:block py-3 border rounded-full rounded-bl-none border-black hover:text-white hover:bg-black text-gray-900 text-lg font-medium">
                         Me As A Content Creator
                    </button>
                    <div className="hidden md:block">
                         <button className="px-6 py-3 border rounded-full rounded-bl-none border-black hover:text-white hover:bg-black text-gray-900 text-lg font-medium flex items-center gap-2">
                              More On YouTube
                              <ArrowUpRight className="pl-1 w-8 h-8" />
                         </button>
                    </div>
               </div>

               {/* Desktop Grid - 4 videos in a row */}
               <div className="hidden md:grid md:grid-cols-4 gap-6">
                    {videoData.map((item) => (
                         <div
                              key={item.id}
                              className="group overflow-hidden rounded-xl min-w-[250px] min-h-[380px] transition-all duration-300 shadow-lg"
                         >
                              <iframe
                                   src={`https://www.youtube.com/embed/${item.embedId}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
                                   title={`Content Creator Video ${item.id}`}
                                   className="w-full h-full rounded-xl"
                                   frameBorder="0"
                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                   allowFullScreen
                              />
                         </div>
                    ))}
               </div>

               {/* Mobile Slider */}
               <div className="md:hidden relative px-4 mb-10">
                    <div className="flex justify-center items-center mb-12">
                         <button className="px-6 py-3 border rounded-full rounded-bl-none border-black hover:text-white hover:bg-black text-gray-900 text-lg font-medium">
                              Me As A Content Creator
                         </button>
                    </div>
                    
                    <div className="relative">
                         <div
                              className="overflow-hidden rounded-2xl touch-pan-y"
                              onTouchStart={handleTouchStart}
                              onTouchMove={handleTouchMove}
                              onTouchEnd={handleTouchEnd}
                         >
                              <div
                                   className="flex transition-transform duration-300 ease-out"
                                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                              >
                                   {videoData.map((item) => (
                                        <div
                                             key={item.id}
                                             className="w-full flex-shrink-0"
                                        >
                                             <div className="max-h-[700px] overflow-hidden rounded-xl shadow-lg aspect-[9/16]">
                                                  <iframe
                                                       src={`https://www.youtube.com/embed/${item.embedId}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
                                                       title={`Content Creator Video ${item.id}`}
                                                       className="w-full h-full rounded-xl"
                                                       frameBorder="0"
                                                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                       allowFullScreen
                                                  />
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* Navigation Buttons */}
                         <button
                              onClick={prevSlide}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors z-10 touch-manipulation"
                              type="button"
                         >
                              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                         </button>

                         <button
                              onClick={nextSlide}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors z-10 touch-manipulation"
                              type="button"
                         >
                              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                         </button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                         {videoData.map((_, index) => (
                              <button
                                   key={index}
                                   onClick={() => setCurrentSlide(index)}
                                   className={`w-3 h-3 rounded-full transition-colors touch-manipulation ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                                        }`}
                                   type="button"
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default ContentCreator;