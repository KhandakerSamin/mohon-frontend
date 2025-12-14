"use client";

import { Figma, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectContent({ project }) {
  // Check if project has detail page data
  if (!project.detailPage || !project.detailPage.sections) {
    return (
      <main 
        className="min-h-screen flex items-center justify-center px-4 md:px-6"
        style={{ 
          color: "var(--foreground)", 
          background: "var(--background)" 
        }}
      >
        <div className="max-w-2xl w-full text-center">
          {/* Coming Soon Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-foreground/5 flex items-center justify-center">
                <Clock className="w-12 h-12 md:w-16 md:h-16 text-foreground/40" strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-foreground/10 animate-pulse"></div>
            </div>
          </div>

          {/* Project Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            {project.homepage.projectTitle}
          </h1>

          {/* Coming Soon Text */}
          <p className="text-xl md:text-2xl text-foreground/60 mb-8">
            Case Study Coming Soon
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/50 mb-12 max-w-xl mx-auto leading-relaxed">
            We&apos;re crafting a detailed case study for this project. Check back soon to explore the design process, challenges, and solutions.
          </p>

          {/* Keywords */}
          {/* {project.homepage.keywords && project.homepage.keywords.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center mb-12 rounded-full">
              {project.homepage.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-foreground/5 text-foreground/70 text-sm font-medium border border-foreground/10"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )} */}

          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const renderTitle = (title, breakLine) => {
    if (!breakLine) {
      return <span>{title}</span>;
    }

    const words = title.split(' ');
    if (words.length === 1) {
      return <span>{words[0]}</span>;
    }

    return (
      <>
        <span>
          {words[0]}
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
        </span>
        <span>{words.slice(1).join(' ')}</span>
      </>
    );
  };

  const renderSection = (section, index) => {
    switch (section.type) {
      case "text-grid":
        return (
          <div key={index} className="mb-16 md:mb-24">
            {/* Text Grid Layout */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Title - 1/3 width */}
              <div className="md:w-1/3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  {renderTitle(section.title, section.titleBreakLine)}
                </h2>
              </div>
              
              {/* Description - 2/3 width */}
              <div className="md:w-2/3">
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  {section.description}
                </p>
              </div>
            </div>

            {/* Images */}
            {section.images && section.images.map((image, imgIndex) => {
              const isFinalImage = section.figmaLink && imgIndex === section.images.length - 1;
              return (
                <div key={imgIndex} className="mb-6 md:mb-8 relative group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={1400}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    sizes="(max-width: 768px) 100vw, 1400px"
                  />
                  {isFinalImage && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-colors duration-300 ">
                      {/* <p className="gradient-text md:text-[clamp(2rem,8vw,2.5rem)] font-semibold text-xl md:text-4xl mb-5 md:mb-12 px-4 text-center ">
                        {section.figmaLinkText}
                      </p> */}
                      <a
                        href={section.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 md:px-6 py-2 mt-20 md:py-3 md:hover:px-6.5  bg-white text-black  md:font-semibold  flex items-center gap-2 rounded-full"
                      >
                        <Figma />
                        View All Screens on Figma  →
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );

      case "text-grid-list":
        return (
          <div key={index} className="mb-16 md:mb-24">
            {/* Text Grid Layout */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Title - 1/3 width */}
              <div className="md:w-1/3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  {renderTitle(section.title, section.titleBreakLine)}
                </h2>
              </div>
              
              {/* Description - 2/3 width with unordered list */}
              <div className="md:w-2/3">
                <ul className="space-y-3 text-base md:text-lg text-foreground/80">
                  {section.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-foreground/40">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Images */}
            {section.images && section.images.map((image, imgIndex) => (
              <div key={imgIndex} className="mb-6 md:mb-8">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={1400}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 1400px"
                />
              </div>
            ))}
          </div>
        );

      case "text-grid-ordered":
        return (
          <div key={index} className="mb-16 md:mb-24">
            {/* Text Grid Layout */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Title - 1/3 width */}
              <div className="md:w-1/3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  {renderTitle(section.title, section.titleBreakLine)}
                </h2>
              </div>
              
              {/* Description - 2/3 width with ordered list */}
              <div className="md:w-2/3">
                <ol className="space-y-3 text-base md:text-lg text-foreground/80 list-decimal list-inside">
                  {section.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Images */}
            {section.images && section.images.map((image, imgIndex) => (
              <div key={imgIndex} className="mb-6 md:mb-8">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={1400}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 1400px"
                />
              </div>
            ))}
          </div>
        );

      case "text-only-list":
        return (
          <div key={index} className="mb-16 md:mb-24">
            {/* Text Grid Layout */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Title - 1/3 width */}
              <div className="md:w-1/3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  {renderTitle(section.title, section.titleBreakLine)}
                </h2>
              </div>
              
              {/* Description - 2/3 width with unordered list */}
              <div className="md:w-2/3">
                <ul className="space-y-3 text-base md:text-lg text-foreground/80">
                  {section.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-foreground/40">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main 
      className="max-w-7xl mx-auto px-4 md:px-6"
      style={{ 
        color: "var(--foreground)", 
        background: "var(--background)" 
      }}
    >
      {/* Hero Section */}
      <div className="py-12 pt-18 md:py-20 md:pt-30">
        {/* Project Category */}
        <div className="text-base md:text-lg text-foreground/60 mb-2">
          {project.homepage.projectTitle}
        </div>
        
        {/* Project Title */}
        <h1 className="gradient-text text-[clamp(2rem,6vw,4rem)] font-bold leading-none tracking-tight mb-5 md:mb-10">
          {project.detailPage.projectInfo}
        </h1>

        {/* Project Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {project.detailPage.projectSubtitles.map((subtitle, index) => (
            <div key={index}>
              <div className="text-xs md:text-sm mb-2 text-foreground uppercase tracking-wide">
                {subtitle.label}
              </div>
              <div className="text-foreground/60 md:text-lg font-medium">
                {subtitle.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-8 md:py-12">
        {project.detailPage.sections.map((section, index) => 
          renderSection(section, index)
        )}
      </div>
    </main>
  );
}