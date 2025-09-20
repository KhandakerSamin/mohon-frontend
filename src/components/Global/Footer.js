import React from 'react';
import { ArrowUpRight, ExternalLink, Mail, MoveUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-20 lg:pt-40 px-4 lg:px-8">
      <div className=" mx-auto max-w-[1230px] text-center  relative">
        {/* CTA Button */}
        <div className="mb-8 absolute -top-15 left-23 lg:-top-14 lg:left-4">
          <button className="inline-block py-2.5 px-6 bg-transparent border border-foreground rounded-full rounded-bl-none text-foreground text-sm lg:text-2xl tracking-wide hover:bg-foreground hover:text-background transition-all duration-200">
            Have An Idea On Mind?
          </button>
        </div>

        {/* Main Heading */}
        <h2 className="gradient-text text-[35px] md:text-5xl lg:text-[123px] font-bold leading-none tracking-tight mb-8">
          Let&apos;s Bring It To Life
        </h2>

        {/* Email Button */}
        <div className="mb-12 absolute top-13 right-33 lg:top-32 lg:right-0">
          <a 
            href="mailto:mdmohon289@gmail.com"
            target="_blank"
            className="py-2.5 px-6 bg-transparent border border-foreground rounded-full rounded-tr-none text-foreground text-sm lg:text-2xl tracking-wide hover:bg-foreground hover:text-background transition-all duration-200 flex justify-center items-center gap-2"
          >
            <Mail />
            Email Me
          </a>
        </div>

        <div className='flex flex-col lg:flex-row justify-between items-center pt-15 lg:pt-50 pb-10 pl-3'>
          {/* Copyright */}
          <div className="hidden lg:block text-lg text-foreground/80">
            ©Abulhashemmohon 2025
          </div>
          
          {/* Social Links - Desktop */}
          <div className="hidden md:flex justify-center items-center space-x-8">
            <a 
              href="https://rebrand.ly/30752c" 
              target='_blank'
              className="flex items-center space-x-2 text-foreground/80 hover:text-foreground/60 transition-colors duration-200"
            >
              <span className="text-lg">LinkedIn</span>
              <ArrowUpRight size={16} />
            </a>
            <a 
              href="https://rebrand.ly/link-x2022-716fdb" 
              target='_blank'
              className="flex items-center space-x-2 text-foreground hover:text-foreground/60 transition-colors duration-200"
            >
              <span className="text-lg">Instagram</span>
              <ArrowUpRight size={16} />
            </a>
            <a 
              href="https://rebrand.ly/680223" 
              target='_blank'
              className="flex items-center space-x-2 text-foreground hover:text-foreground/60 transition-colors duration-200"
            >
              <span className="text-lg">Behance</span>
              <ArrowUpRight size={16} />
            </a>
            <a 
              href="https://rebrand.ly/abul-hashem-f0eb88" 
              target='_blank'
              className="flex items-center space-x-2 text-foreground hover:text-foreground/60 transition-colors duration-200"
            >
              <span className="text-lg">Dribbble</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Social Links - Mobile */}
          <div className="md:hidden space-y-4 mb-5 pt-15 lg:mb-12 ">
            <div className="flex justify-center space-x-8">
              <a 
                href="#" 
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground/60 transition-colors duration-200"
              >
                <span className="text-sm">LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground/60 transition-colors duration-200"
              >
                <span className="text-sm">Instagram</span>
                <ArrowUpRight size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground/60 transition-colors duration-200"
              >
                <span className="text-sm">Behance</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="flex justify-center">
              <a 
                href="#" 
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground/60 transition-colors duration-200"
              >
                <span className="text-sm">Dribbble</span>
                <MoveUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:hidden text-sm text-foreground/80">
            ©Abulhashemmohon 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;