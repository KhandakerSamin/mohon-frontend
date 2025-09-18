"use client";
import React from "react";

export default function HeadingSection() {
  return (
    <div className="text-center max-w-5xl mx-auto py-20 md:py-40 relative">
      {/* Greeting Badge */}
      <div className="inline-block absolute left-50 top-12 lg:left-110 lg:top-30">
        <span className="py-1.5 md:py-2 lg:py-2.5 px-5 md:px-6 lg:px-8 bg-transparent border border-foreground rounded-full rounded-bl-none text-foreground hover:bg-foreground hover:text-background text-sm lg:text-2xl tracking-wide transition-colors duration-200">
          Hey! I&apos;m
        </span>
      </div>

      {/* Combined Main Heading with Gradient */}
      <h1 
        className="text-5xl sm:text-6xl text-[54px] lg:text-[112px] font-bold mb-8 leading-tight gradient-text"
      >
        Abul Hashem<br />
        <span className="font-extrabold text-5xl sm:text-6xl text-[60px] lg:text-[125px] tracking-tight">MOHON</span>
      </h1>

      {/* Description */}
      <p className="text-base md:text-md text-foreground/70  leading-relaxed max-w-[380px] md:max-w-[780px] mx-auto">
        Product Designer With 2+ Years Of UI/UX Experience In The EdTech Industry, Creating Intuitive, Learner-Focused Interfaces. Backed By 5+ Years In Visual Design, With Strengths In Aesthetics, Content Structure, And Storytelling. Experienced In Remote Work, Daily Scrum, And Collaborating With Product And Development Teams.
      </p>

      <style jsx>{`
        .gradient-text-dark {
          background: linear-gradient(180deg, #191918 0%, rgba(25, 25, 24, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (prefers-color-scheme: dark) {
          .gradient-text-dark {
            background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        :global(.dark) .gradient-text-dark {
          background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}