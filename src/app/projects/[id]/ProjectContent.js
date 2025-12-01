"use client";

import Image from "next/image";

export default function ProjectContent({ project }) {
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
      <div className="py-12 md:py-20 md:pt-30">
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