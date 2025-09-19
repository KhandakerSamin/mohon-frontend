"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectContent({ project }) {
  const [carouselStates, setCarouselStates] = useState({});
  const carouselRefs = useRef({});

  const scrollCarousel = (carouselId, direction) => {
    const carousel = carouselRefs.current[carouselId];
    if (!carousel) return;

    const scrollAmount = 320;
    const newScrollLeft =
      direction === "left"
        ? carousel.scrollLeft - scrollAmount
        : carousel.scrollLeft + scrollAmount;

    carousel.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const updateCarouselState = (carouselId) => {
    const carousel = carouselRefs.current[carouselId];
    if (!carousel) return;

    const isAtStart = carousel.scrollLeft <= 10;
    const isAtEnd = carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10);

    setCarouselStates((prev) => ({
      ...prev,
      [carouselId]: { isAtStart, isAtEnd },
    }));
  };

  const renderPhoto = (photo, index) => {
    switch (photo.type) {
      case "full-width":
        return (
          <div key={index} className="w-full mb-16">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={1400}
              height={700}
              className="w-full h-auto rounded-md"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        );

        case "full-width2":
        return (
          <div key={index} className="w-full mb-16 flex flex-col gap-10">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={1400}
              height={700}
              className="w-full h-auto rounded-md"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={1400}
              height={700}
              className="w-full h-auto rounded-md"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        );

      case "three-grid":
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {photo.images.map((img, imgIndex) => (
              <div key={imgIndex} className="group overflow-hidden rounded-md min-h-[650px] md:h-80">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={700}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        );

      case "carousel":
        const carouselId = `carousel-${index}`;
        const currentState = carouselStates[carouselId] || { isAtStart: true, isAtEnd: false };

        return (
          <div key={index} className="mb-16">
            <div className="relative group">
              {/* Navigation Buttons */}
              <div className="hidden md:block">
                <button
                  onClick={() => scrollCarousel(carouselId, "left")}
                  disabled={currentState.isAtStart}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                    currentState.isAtStart ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <button
                  onClick={() => scrollCarousel(carouselId, "right")}
                  disabled={currentState.isAtEnd}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                    currentState.isAtEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Carousel Track */}
              <div
                ref={(el) => (carouselRefs.current[carouselId] = el)}
                onScroll={() => updateCarouselState(carouselId)}
                className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              >
                {photo.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="flex-shrink-0 snap-start group">
                    <div className="w-80 md:w-90 h-60 md:h-[650px] overflow-hidden rounded-md">
                      <Image
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 320px, 400px"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Dots */}
              <div className="flex justify-center mt-6 md:hidden">
                <div className="flex gap-2">
                  {photo.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200 hover:bg-gray-500"
                      onClick={() => {
                        const carousel = carouselRefs.current[carouselId];
                        if (carousel) {
                          carousel.scrollTo({
                            left: imgIndex * 320,
                            behavior: "smooth",
                          });
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "endless-height":
        return (
          <div key={index} className="w-full mb-16">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={1400}
              height={0}
              className="w-full h-auto rounded-md"
              sizes="100vw"
              style={{ height: "auto" }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-30" style={{ color: "var(--foreground)", background: "var(--background)" }}>
      {/* Project Title */}
      <div className="mb-12 md:mb-16">
        <div className="text-xl md:text-base mb-1" style={{ color: "var(--foreground)" }}>
          {project.homepage.projectTitle}
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 leading-relaxed" style={{ color: "var(--foreground)" }}>
          {project.detailPage.projectInfo}
        </h1>

        {/* Project Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-12">
          {project.detailPage.projectSubtitles.map((subtitle, index) => (
            <div key={index}>
              <div className="text-xs md:text-base mb-1" style={{ color: "var(--foreground)" }}>{subtitle.label}</div>
              <div className="text-sm md:text-xl" style={{ color: "var(--foreground)" }}>{subtitle.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Project Image with text */}
      <div className="mb-5">
        <h1 className="text-2xl">{project.detailPage.headingtittle}</h1>
        <p className="text-xl py-5">{project.detailPage.headindescription}</p>
      </div>

      <div className="mb-16 md:mb-20 overflow-hidden rounded-md">
        <Image
          src={project.detailPage.detailPageThumbnail || "/placeholder.svg"}
          alt={project.detailPage.projectTitle}
          width={1400}
          height={700}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 1400px"
        />
      </div>

      {/* Description Sections */}
      <div className="space-y-16 md:space-y-20">
        {project.detailPage.descriptions.map((desc, index) => (
          <div key={index}>
            <div className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-medium mb-4 md:mb-6" style={{ color: "var(--foreground)" }}>
                {desc.title}
              </h2>
              <p className="leading-relaxed max-w-full text-base md:text-lg" style={{ color: "var(--foreground)" }}>
                {desc.text}
              </p>
              {/* Bullet Points Rendering */}
              {desc.bulletPoints && desc.bulletPoints.length > 0 && (
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  {desc.bulletPoints.map((point, i) => (
                    <li key={i} className="text-base md:text-lg leading-relaxed" style={{ color: "var(--foreground)" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {desc.photo && renderPhoto(desc.photo, index)}
          </div>
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}