
"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Gallery = () => {
  // Gallery images data with masonry layout
  const galleryImages = [
    // Column 1: 500px, 300px, 500px
    { id: 1, image: '/g1.png', height: 500, mobileHeight: 500, column: 1 },
    { id: 2, image: '/g2.png', height: 300, mobileHeight: 300, column: 1 },
    { id: 3, image: '/g3.png', height: 500, mobileHeight: 500, column: 1 },
    { id: 4, image: '/g4.png', height: 300, mobileHeight: 300, column: 1 },
    { id: 5, image: '/g5.png', height: 500, mobileHeight: 500, column: 1 },
    // Column 2: 300px, 500px, 300px
    { id: 6, image: '/g2-1.png', height: 300, mobileHeight: 300, column: 2 },
    { id: 7, image: '/g2-2.png', height: 500, mobileHeight: 500, column: 2 },
    { id: 8, image: '/g2-3.png', height: 300, mobileHeight: 300, column: 2 },
    { id: 9, image: '/g2-4.png', height: 500, mobileHeight: 300, column: 2 },
    { id: 10, image: '/g2-5.png', height: 300, mobileHeight: 500, column: 2 },
    // Column 3: 500px, 300px, 500px (repeat pattern)
    { id: 11, image: '/g3-1.png', height: 500, mobileHeight: 500, column: 3 },
    { id: 12, image: '/g3-2.png', height: 300, mobileHeight: 300, column: 3 },
    { id: 13, image: '/g3-3.png', height: 500, mobileHeight: 500, column: 3 },
    { id: 14, image: '/g3-4.png', height: 300, mobileHeight: 300, column: 3 },
    { id: 15, image: '/g3-5.png', height: 500, mobileHeight: 500, column: 3 },
  ];

  const handleImageClick = (id) => {
    // Add your Instagram link logic here
    console.log('Image clicked:', id);
  };

  // Group images by column
  const column1Images = galleryImages.filter(img => img.column === 1);
  const column2Images = galleryImages.filter(img => img.column === 2);
  const column3Images = galleryImages.filter(img => img.column === 3);

  return (
    <div className="w-full max-w-[1230px] mx-auto mb-30  md:mb-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <button className="px-6 hidden md:block py-3 border rounded-full rounded-bl-none border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium">
          Me as a Nomad
        </button>
        <Link href="https://rebrand.ly/link-x2022-716fdb" target="_blank" >
          <div className="hidden md:block">
            <button className="px-6 py-3 border rounded-full rounded-bl-none border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium flex items-center gap-2">
              More On Insta
              <ArrowUpRight className="pl-1 w-8 h-8" />
            </button>
          </div>
        </Link>
      </div>

      {/* Desktop Masonry Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {/* Column 1: 600px, 300px, 600px */}
        <div className="flex flex-col gap-6">
          {column1Images.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item.id)}
              className="group cursor-pointer overflow-hidden rounded-md hover:transform  transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ height: `${item.height}px` }}
            >
              
              <Image
                src={item.image}
                alt={`Gallery Image ${item.id}`}
                className="w-full h-full object-cover"
                width={600}
                height={item.height}
                quality={100}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg';
                }}
                priority={true}
              />


            </div>
          ))}
        </div>

        {/* Column 2: 300px, 600px, 300px */}
        <div className="flex flex-col gap-6">
          {column2Images.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item.id)}
              className="group cursor-pointer overflow-hidden rounded-md hover:transform  transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ height: `${item.height}px` }}
            >
              <Image
                src={item.image}
                alt={`Gallery Image ${item.id}`}
                className="w-full h-full object-cover"
                width={600}
                height={item.height}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg';
                }}
                priority={true}
              />
            </div>
          ))}
        </div>

        {/* Column 3: 600px, 300px, 600px */}
        <div className="flex flex-col gap-6">
          {column3Images.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item.id)}
              className="group cursor-pointer overflow-hidden rounded-md hover:transform  transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ height: `${item.height}px` }}
            >
              <Image
                src={item.image}
                alt={`Gallery Image ${item.id}`}
                className="w-full h-full object-cover"
                width={600}
                height={item.height}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg';
                }}
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Column Layout */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex justify-center items-center mb-12">
            <button className="px-6  py-3 border rounded-full rounded-bl-none border-foreground hover:text-background hover:bg-foreground text-foreground text-lg font-medium">
              Me as a Nomad
            </button>
          </div>
        </div>

        {/* Single Column Grid for Mobile */}
        <div className="flex flex-col gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item.id)}
              className="group cursor-pointer overflow-hidden rounded-md hover:transform  transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ height: `${item.mobileHeight}px` }}
            >
              <Image
                src={item.image}
                alt={`Gallery Image ${item.id}`}
                className="w-full h-full object-cover"
                width={600}
                height={item.mobileHeight}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg';
                }}
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;