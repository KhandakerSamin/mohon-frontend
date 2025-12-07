import React from 'react';
import Image from 'next/image';

const Card2 = ({ project, className = '', onClick }) => {
  return (
    <div 
      className={`relative overflow-hidden h-full cursor-pointer transition-transform duration-300 hover:scale-[1.01] ${className}`}
      onClick={onClick}
    >
      <Image
        src={project.image}
        alt={project.image}
        layout="fill"
        objectFit="cover"
        className="w-full h-full object-cover"
        priority
        quality={100}
      />
      


    </div>
  );
};

export default Card2;