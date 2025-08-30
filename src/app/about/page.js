"use client";
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState(1);

  const heroImages = [
    { id: 1, src: "/api/placeholder/300/400", alt: "Abul Hashem - Portrait 1" },
    { id: 2, src: "/api/placeholder/300/400", alt: "Abul Hashem - Portrait 2" },
    { id: 3, src: "/api/placeholder/300/400", alt: "Abul Hashem - Portrait 3" }
  ];

  const companies = [
    { name: "Startup", logo: "/api/placeholder/120/40" },
    { name: "Oitijo", logo: "/api/placeholder/120/40" },
    { name: "OGS", logo: "/api/placeholder/120/40" },
    { name: "EasyRider", logo: "/api/placeholder/120/40" },
    { name: "Tiktype", logo: "/api/placeholder/120/40" },
    { name: "Nexus", logo: "/api/placeholder/120/40" },
    { name: "Lumking", logo: "/api/placeholder/120/40" },
    { name: "Oitijo", logo: "/api/placeholder/120/40" }
  ];

  const projects = [
    { id: 1, image: "/api/placeholder/400/500", title: "Project 1" },
    { id: 2, image: "/api/placeholder/400/500", title: "Project 2" },
    { id: 3, image: "/api/placeholder/400/500", title: "Project 3" },
    { id: 4, image: "/api/placeholder/400/500", title: "Project 4" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-xl font-bold">
              Abul Hashem<br />
              <span className="text-sm font-normal text-gray-600">Frontend</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Me</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="flex gap-4 justify-center lg:justify-start">
                {heroImages.map((image, index) => (
                  <div 
                    key={image.id}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      selectedImage === image.id ? 'scale-105' : 'scale-95 opacity-70'
                    }`}
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-20 h-28 sm:w-24 sm:h-32 md:w-32 md:h-44 object-cover rounded-lg"
                    />
                    {selectedImage === image.id && (
                      <div className="absolute inset-0 ring-2 ring-blue-500 rounded-lg"></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Main large image */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <img
                  src={heroImages.find(img => img.id === selectedImage)?.src}
                  alt="Abul Hashem - Main"
                  className="w-64 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Available
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Abul Hashem<br />
                <span className="text-gray-600">UI/UX</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Product Designer specialized in UI/UX design and front-end development. 
                I create digital experiences that bridge the gap between design and technology, 
                focusing on user-centered solutions that drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  Previously Worked With
                </button>
                <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-50 transition-colors">
                  View CV/LinkedIn
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xs uppercase tracking-wider text-gray-500">
              See All A Creative Contents
            </h2>
            <button className="text-sm text-gray-900 hover:text-gray-600 transition-colors">
              More On There →
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<Footer />

    </div>
  );
}