import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Card2 = ({ project, className = '' }) => {
  return (
    <div className={`group relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-full ${className}`}>
      {/* Project Image Container */}
      <div className="relative w-full h-full overflow-hidden ">
        {/* Main Image */}
        <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-95">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Background Overlay - Dark gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#191918_0%,rgba(25,25,24,0.8)_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* Decorative dots pattern */}
          <div className="absolute top-6 left-6">
            <div className="flex space-x-1 mb-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
              ))}
            </div>
            <div className="flex space-x-1 mb-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: `${i * 150}ms`}}></div>
              ))}
            </div>
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
              ))}
            </div>
          </div>

          {/* Project Title and Info on Hover */}
          <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <div className="flex items-end justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 leading-tight truncate">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-1 truncate">
                  {project.category}
                </p>
                <p className="text-white/70 text-xs sm:text-sm">
                  {project.year}
                </p>
              </div>
              <ArrowUpRight 
                size={24} 
                className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0 ml-4" 
              />
            </div>
          </div>
        </div>
        
        {/* Mobile: Always visible project info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:hidden">
          <div className="flex items-end justify-between">
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-lg font-semibold mb-1 truncate">
                {project.title}
              </h4>
              <p className="text-white/80 text-sm truncate">
                {project.category} • {project.year}
              </p>
            </div>
            <ArrowUpRight 
              size={20} 
              className="text-white flex-shrink-0 ml-2" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;