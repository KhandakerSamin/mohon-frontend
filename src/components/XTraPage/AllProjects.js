"use client"

import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { allProjectsData } from "../../data/allprojectdata";

const AllProjects = () => {
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateMasonry = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const items = container.children;
      
      if (items.length === 0) return;

      // Get container width and calculate columns
      const containerWidth = container.offsetWidth;
      const gap = 24; // 6 * 4px (gap-6)
      let columns = 1;
      
      if (window.innerWidth >= 1280) columns = 4; // xl
      else if (window.innerWidth >= 1024) columns = 3; // lg  
      else if (window.innerWidth >= 640) columns = 2; // sm
      
      const itemWidth = (containerWidth - (gap * (columns - 1))) / columns;
      const columnHeights = new Array(columns).fill(0);

      // Position each item
      Array.from(items).forEach((item, index) => {
        // Find the shortest column
        const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        
        // Calculate position
        const x = shortestColumnIndex * (itemWidth + gap);
        const y = columnHeights[shortestColumnIndex];
        
        // Apply positioning
        item.style.position = 'absolute';
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        item.style.width = `${itemWidth}px`;
        
        // Update column height
        columnHeights[shortestColumnIndex] += item.offsetHeight + gap;
      });

      // Set container height
      const maxHeight = Math.max(...columnHeights);
      container.style.height = `${maxHeight}px`;
      
      // Show layout after positioning
      setTimeout(() => setIsLayoutReady(true), 50);
    };

    // Hide layout initially
    setIsLayoutReady(false);
    
    // Calculate on mount and resize
    const timer = setTimeout(calculateMasonry, 100);
    
    const handleResize = () => {
      setIsLayoutReady(false);
      setTimeout(calculateMasonry, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [allProjectsData]);

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-screen mx-auto my-20">

        {/* Masonry Container */}
        <div 
          ref={containerRef}
          className={`relative w-full transition-opacity duration-300 ${
            isLayoutReady ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ minHeight: '200px' }}
        >
          {allProjectsData.map((project, index) => (
            <Card key={project.id || index} project={{ ...project, index }} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllProjects;