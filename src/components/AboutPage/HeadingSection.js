import React from "react";

export default function HeadingSection() {
  return (
    <div className="text-center max-w-5xl mx-auto py-20 relative">
      {/* Greeting Badge */}
      <div className="inline-block absolute left-16 -top-6 lg:left-110 lg:top-10">
        <span className="py-1.5 md:py-2 lg:py-2.5 px-5 md:px-6 lg:px-8 bg-transparent border border-black rounded-full rounded-bl-none text-black hover:bg-black hover:text-white text-sm lg:text-2xl tracking-wide">
          Hey! I&apos;m
        </span>
      </div>

      {/* Combined Main Heading with Gradient */}
      <h1 
        className="text-5xl sm:text-6xl lg:text-[112px] font-bold mb-8 leading-tight"
        style={{
          background: 'linear-gradient(180deg, #191918 0%, rgba(25, 25, 24, 0.8) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Abul Hashem<br />
        <span className="font-extrabold text-5xl sm:text-6xl lg:text-[125px]  tracking-tight">MOHON</span>
      </h1>

      {/* Description */}
      <p className="text-base md:text-md text-gray-600 leading-relaxed max-w-[780px] mx-auto">
        Product Designer With 2+ Years Of UI/UX Experience In The EdTech Industry, Creating Intuitive, Learner-Focused Interfaces. Backed By 5+ Years In Visual Design, With Strengths In Aesthetics, Content Structure, And Storytelling. Experienced In Remote Work, Daily Scrum, And Collaborating With Product And Development Teams.
      </p>
    </div>
  );
}