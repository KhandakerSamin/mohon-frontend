import React from "react";

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

export default function ImageSection() {
  return (
    <section className="w-full max-w-[1260px] mx-auto px-4 py-10 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {heroImages.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-[500px] overflow-hidden rounded-md shadow-md group cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover rounded-md transition-all duration-500 group-hover:scale-110"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            
            {/* Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium px-4 py-2 rounded-md shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

