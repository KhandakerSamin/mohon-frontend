import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Card = ({ project }) => {
  // Function to randomly assign height variants if not provided in data
  const getHeightVariant = (project, index) => {
    if (project.heightVariant) return project.heightVariant;
    
    // Create varied heights based on index for visual variety
    const variants = ['tall', 'short', 'medium', 'square'];
    const patterns = [
      ['tall', 'short', 'medium', 'square'],
      ['medium', 'tall', 'short', 'square'],
      ['short', 'square', 'tall', 'medium'],
      ['square', 'medium', 'short', 'tall']
    ];
    
    const patternIndex = Math.floor(index / 4) % patterns.length;
    const variantIndex = index % 4;
    
    return patterns[patternIndex][variantIndex];
  };

  const getHeightClass = (variant) => {
    switch (variant) {
      case 'tall':
        return 'h-96 sm:h-[500px] lg:h-[600px]';
      case 'short':
        return 'h-48 sm:h-60 lg:h-72';
      case 'medium':
        return 'h-72 sm:h-80 lg:h-96';
      case 'square':
        return 'h-64 sm:h-72 lg:h-80';
      default:
        return 'h-72';
    }
  };

  const heightVariant = getHeightVariant(project, project.id || 0);

  return (
    <div className={`group relative overflow-hidden   shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${getHeightClass(heightVariant)}`}>
      {/* Project Image Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Main Image */}
        <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-95">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Background Overlay - Orange gradient like Brownthought Academy */}
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
              <div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-1">
                  {project.category}
                </p>
                <p className="text-white/70 text-xs sm:text-sm">
                  {project.year}
                </p>
              </div>
              <ArrowUpRight 
                size={24} 
                className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0" 
              />
            </div>
          </div>
        </div>
        
        {/* Mobile: Always visible project info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:hidden">
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-white text-lg font-semibold mb-1">
                {project.title}
              </h4>
              <p className="text-white/80 text-sm">
                {project.category} • {project.year}
              </p>
            </div>
            <ArrowUpRight 
              size={20} 
              className="text-white flex-shrink-0" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;