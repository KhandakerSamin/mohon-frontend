"use client"
import React, { useState, useEffect } from 'react';
import { allProjectsData } from "../../data/allprojectdata";
import Card2 from './Card2';

const AllProjects2 = () => {
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  
  useEffect(() => {
    // Show layout after a brief delay to ensure smooth rendering
    const timer = setTimeout(() => {
      setIsLayoutReady(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Define width patterns for rows (as flex ratios)
  const getRowPattern = (rowIndex) => {
    const patterns = [
      ['flex-[3]', 'flex-[2]', 'flex-[2.5]'], // Row 0: Large, Small, Medium
      ['flex-[2]', 'flex-[2.5]', 'flex-[3]'], // Row 1: Small, Medium, Large  
      ['flex-[2.5]', 'flex-[3]', 'flex-[2]'], // Row 2: Medium, Large, Small
    ];
    return patterns[rowIndex % patterns.length];
  };

  // Group projects into rows of 3
  const groupedProjects = [];
  for (let i = 0; i < allProjectsData.length; i += 3) {
    groupedProjects.push(allProjectsData.slice(i, i + 3));
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
      <div className="max-w-[1230px] mx-auto my-20">
        
        {/* Conditional Rendering: Show either loading skeleton OR actual content */}
        {!isLayoutReady ? (
          // Loading State - Positioned at the top
          <div className="space-y-8">
            <div className="animate-pulse space-y-6 w-full">
              {[1, 2, 3].map((row) => (
                <div 
                  key={row} 
                  className="flex flex-col lg:flex-row gap-3 lg:gap-8 h-[300px] lg:h-[350px]"
                >
                  <div className="bg-foreground/20 shadow-md h-full flex-[3]"></div>
                  <div className="bg-foreground/20 shadow-md h-full flex-[2]"></div>
                  <div className="bg-foreground/20 shadow-md h-full flex-[2.5]"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Main Content - Grid Container
          <div 
            className="space-y-8 transition-opacity duration-500 opacity-100"
          >
            {groupedProjects.map((projectRow, rowIndex) => {
              const widthPattern = getRowPattern(rowIndex);
              
              return (
                <div 
                  key={rowIndex}
                  className="flex flex-col  lg:flex-row gap-3 lg:gap-8 items-stretch h-auto lg:h-[350px]"
                >
                  {projectRow.map((project, cardIndex) => {
                    const flexClass = widthPattern[cardIndex] || 'flex-1';
                    
                    return (
                      <div
                        key={project.id || `${rowIndex}-${cardIndex}`}
                        className={`w-full ${flexClass} 
                          aspect-square sm:aspect-auto 
                          min-h-[300px] sm:min-h-0`}
                      >
                        <Card2 
                          project={{ 
                            ...project, 
                            index: rowIndex * 3 + cardIndex 
                          }} 
                          className="h-full"
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      <style jsx>{`
        /* Smooth transitions for layout changes */
        .transition-opacity {
          transition: opacity 0.5s ease-in-out;
        }
        
        /* Ensure consistent heights within rows */
        .items-stretch > * {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
};

export default AllProjects2;