import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen max-w-7xl mx-auto  bg-white flex items-center justify-center px-8 py-24 relative">
      <div className="max-w-6xl mx-auto text-center ">
        {/* Main Content */}
        <div className="space-y-6 relative">
          {/* Greeting Badge */}
          <div className=" inline-block absolute left-30 -top-4">
            <span className=" py-2.5 px-8 bg-transparent border border-balck rounded-full rounded-bl-none text-black text-sm tracking-wide">
              Hey! I&apos;m
            </span>
          </div>
          
          {/* Main Title */}
          <h1 
            className="text-[clamp(4rem,12vw,8rem)] font-bold leading-none tracking-tight mb-[2rem]"
            style={{
              background: 'linear-gradient(180deg, #191918 0%, rgba(25, 25, 24, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Product
            <br />
            Designer
          </h1>
          
          {/* CTA Button */}
          <div className="absolute right-0 -bottom-8">
            <a 
              href="#contact" 
              className="inline-flex items-center px-5 py-2.5  bg-transparent border border-black rounded-full rounded-tr-none text-black text-sm tracking-wide  transition-all duration-200"
            >
              <Image 
                src="/chatlogo.svg" 
                alt="Chat Icon" 
                width={100} 
                height={100} 
                className="mr-1 w-4 h-4" />
              Let&apos;s Chat
            </a>
          </div>
        </div>
      </div>
      
      {/* Previous Work Section - Bottom Left */}
      <div className="absolute left-8 bottom-12 text-left">
        <div className="space-y-2">
          <p className="text-xs text-black font-medium tracking-wide">Previously @</p>
          <div className="text-xs text-black leading-relaxed">
            <p>Programming Hero, Codefeess,</p>
            <p>Gamechnagersko</p>
            <p className="mt-2">Programming Hero, Codefeess,</p>
            <p>Gamechnagersko</p>
          </div>
        </div>
      </div>
      
      {/* Clients Section - Bottom Right */}
      <div className="absolute right-8 bottom-12 text-right">
        <div className="space-y-2">
          <p className="text-xs text-black font-medium tracking-wide">My Clients From</p>
          <div className="text-xs text-black leading-relaxed">
            <p>USA, Germany, Colombia, UK</p>
            <p>Australia, Finland, South Africa, France</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;