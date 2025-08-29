import React from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

const ProjectCard = ({ project, isFullWidth = false }) => {
  return (
    <div
      className={`group relative rounded-lg overflow-hidden bg-[#F5F5F5] transition-colors duration-300 cursor-pointer ${
        isFullWidth ? 'col-span-full' : 'col-span-1'
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative rounded-lg overflow-hidden bg-gray-900 ${
          isFullWidth ? 'w-full h-[400px] md:h-[500px] lg:h-[600px]' : 'h-[300px] md:h-[430px]'
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ borderRadius: 'inherit' }} // ensures rounded corners
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Project Content */}
      <div className="py-6">
        <div className="flex items-center justify-between">
          {/* Title and Arrow */}
          <div className="flex items-center justify-start gap-1.5 md:gap-5 mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-black transition-colors">
              {project.title}
            </h3>
            <MoveRight
              size={20}
              className="text-gray-900 group-hover:translate-x-2 group-hover:text-black transition-all duration-300"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center space-x-2 md:space-x-4 text-sm text-black mb-3">
            <span className="border border-[#EFEFEF] p-1.5 md:px-3 rounded-md bg-[#EFEFEF] group-hover:bg-gray-200 transition-colors duration-200">
              {project.category}
            </span>
            <span className="border border-[#EFEFEF] p-1.5 md:px-3 rounded-md bg-[#EFEFEF] group-hover:bg-gray-200 transition-colors duration-200">
              {project.type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 group-hover:text-gray-800 leading-relaxed mb-4 transition-colors duration-200">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;