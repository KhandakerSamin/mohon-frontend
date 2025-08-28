import React from 'react';
import { ArrowUpRight, ExternalLink, Mail, MoveUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] pt-15 lg:pt-30 px-4 lg:px-8 ">
      <div className=" mx-auto max-w-7xl text-center relative">
        {/* CTA Button */}
        <div className="mb-8 absolute -top-15 left-20 lg:-top-14 lg:left-10">
          <button className="inline-block py-2.5 px-6 bg-transparent border border-black rounded-full rounded-bl-none text-black text-sm lg:text-2xl tracking-wide hover:bg-black hover:text-white transition-all duration-200">
            Have An Idea On Mind?
          </button>
        </div>

        {/* Main Heading */}
        <h2 
          className="text-[35px] md:text-5xl lg:text-[123px] font-bold leading-none tracking-tight mb-8"
          style={{
              background: 'linear-gradient(180deg, #191918 0%, rgba(25, 25, 24, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
        >
          Let&apos;s Bring It To Life
        </h2>

        {/* Email Button */}
        <div className="mb-12 absolute top-13 right-27 lg:top-32 lg:right-8 ">
          <a 
            href="mailto:your-email@example.com"
            className="py-2.5 px-6 bg-transparent border border-black rounded-full rounded-tr-none  text-black text-sm lg:text-2xl tracking-wide hover:bg-black hover:text-white transition-all duration-200 flex justify-center items-center gap-2"
          >
               <Mail />
            Email Me
          </a>
        </div>


        <div className=' flex flex-col lg:flex-row  justify-between items-center pt-15 lg:pt-25 pb-10 px-9'>
           {/* Copyright */}
        <div className="hidden lg:block text-sm text-gray-800">
          ©Abulhashemmohon 2025
        </div>
        {/* Social Links - Desktop */}
          <div className="hidden md:flex justify-center items-center space-x-8 ">
          <a 
            href="#" 
            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
          >
            <span className="text-sm">LinkedIn</span>
            <ArrowUpRight  size={16} />
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
          >
            <span className="text-sm">Instagram</span>
            <ArrowUpRight size={16} />
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
          >
            <span className="text-sm">Behance</span>
            <ArrowUpRight size={16} />
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
          >
            <span className="text-sm">Dribbble</span>
            <ArrowUpRight size={16} />

          </a>
        </div>

        {/* Social Links - Mobile */}
        <div className="md:hidden space-y-4 mb-5 lg:mb-12">
          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
            >
              <span className="text-sm">LinkedIn</span>
              <ArrowUpRight size={16} />
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
            >
              <span className="text-sm">Instagram</span>
              <ArrowUpRight size={16} />
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
            >
              <span className="text-sm">Behance</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="flex justify-center">
            <a 
              href="#" 
              className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
            >
              <span className="text-sm">Dribbble</span>
              <MoveUpRight size={16} />
            </a>
          </div>
        </div>

        <div className=" lg:hidden text-sm text-gray-800">
          ©Abulhashemmohon 2025
        </div>

       
        </div>

      </div>
    </footer>
  );
};

export default Footer;