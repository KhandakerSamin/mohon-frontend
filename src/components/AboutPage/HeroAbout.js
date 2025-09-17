'use client';
import { useState } from 'react';

export default function HeroAbout() {
  const [selectedImage, setSelectedImage] = useState(2); // Default to middle image

  const heroImages = [
    { 
      id: 1, 
      src: "/photo1.png", 
      alt: "Well Being",
      label: "Well Being"
    },
    { 
      id: 2, 
      src: "/photo2.png", 
      alt: "Passion & Profession",
      label: "Passion & Profession"
    },
    { 
      id: 3, 
      src: "/photo3.png", 
      alt: "Health",
      label: "Health"
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          {heroImages.map((image) => (
            <div 
              key={image.id}
              className={`relative cursor-pointer transition-all duration-500 group ${
                selectedImage === image.id 
                  ? 'scale-105 shadow-2xl' 
                  : 'scale-95 opacity-80 hover:opacity-100 hover:scale-100'
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image Container */}
              <div className="relative w-72 h-96 rounded-2xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Label */}
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-4 py-2 bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-full border border-foreground/10">
                    {image.label}
                  </span>
                </div>
                
                {/* Selection Ring */}
                {selectedImage === image.id && (
                  <div className="absolute inset-0 ring-4 ring-blue-500 ring-opacity-60 rounded-2xl pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="text-center max-w-7xl mx-auto">
          {/* Greeting Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-background border border-foreground/20 text-foreground mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Hey! I&apos;m
          </div>
          
          {/* Main Heading with gradient */}
          <h1 className="gradient-text text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Abul Hashem
          </h1>
          
          <h2 className="gradient-text text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            MOHON
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Product Designer With 2+ Years Of UI/UX Experience In The EdTech Industry, Creating Intuitive, 
            Learner-Focused Interfaces. Backed By 5+ Years In Visual Design, With Strengths In Aesthetics, 
            Content Structure, And Storytelling. Experienced In Remote Work, Daily Scrum, And Collaborating 
            With Product And Development Teams.
          </p>
        </div>
      </div>
    </section>
  );
}