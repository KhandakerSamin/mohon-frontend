"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, currentIndex, projects, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !projects[currentIndex]) return null;

  const currentProject = projects[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      {/* Previous Button - Desktop */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hidden sm:block"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Button - Desktop */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hidden sm:block"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      {/* Image Container - 50% of viewport */}
      <div 
        className="relative w-[80vw] md:w-[50vw] h-[60vh] md:h-[70vh] "
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentProject.image}
          alt={`Project ${currentProject.id}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 50vw"
          priority
          quality={100}
        />



        {/* Mobile Navigation Buttons */}
        <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-4 sm:hidden">
          <button
            onClick={onPrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
          {currentIndex + 1} / {projects.length}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
