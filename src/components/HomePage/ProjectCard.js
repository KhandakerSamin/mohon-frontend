"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const ProjectCard = ({ project, isFullWidth = false }) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group relative overflow-hidden duration-300 cursor-pointer block ${
        isFullWidth ? "col-span-full" : "col-span-1"
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative overflow-hidden rounded-md ${
          isFullWidth
            ? "w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px]"
            : "h-[300px]  md:h-[350px] lg:h-[600px]"
        }`}
      >
        <Image
          src={project.homepage.homepageThumbnail || "/placeholder.svg"}
          alt={project.homepage.projectTitle}
          fill
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
          className="transition-transform duration-500 ease-in-out group-hover:scale-101"
        />
      </div>

      {/* Project Content */}
      <div className="py-4 md:py-6">
        {/* Mobile Layout - Stack vertically */}
        <div className="block md:hidden">
          {/* Title and Arrow - Mobile */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-foreground/80 group-hover:text-foreground/80 transition-colors flex-1 pr-2">
              {project.homepage.projectTitle}
            </h3>
            <MoveRight
              size={18}
              className="text-foreground/70 group-hover:translate-x-2 group-hover:text-foreground/80 transition-all duration-300 flex-shrink-0"
            />
          </div>

          {/* Keywords - Mobile */}
          <div className="flex items-center flex-wrap gap-2 mb-3">
            {project.homepage.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-foreground/70 rounded-md bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-200"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            {/* Title and Arrow - Desktop */}
            <div className="flex items-center justify-start gap-1.5 lg:gap-5 mb-2">
              <h3 className="text-lg lg:text-xl font-semibold text-foreground/80 group-hover:text-foreground/80 transition-colors">
                {project.homepage.projectTitle}
              </h3>
              <MoveRight
                size={20}
                className="text-foreground/70 group-hover:translate-x-2 group-hover:text-foreground/80 transition-all duration-300"
              />
            </div>

            {/* Keywords - Desktop */}
            <div className="flex items-center space-x-2 lg:space-x-4 text-sm text-foreground mb-3">
              {project.homepage.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-2 lg:px-3 py-1.5 text-foreground/70 rounded-md bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-200"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description - Same for both layouts */}
        {project.homepage.homepageDetail && (
          <p className="text-sm md:text-base text-foreground/70 group-hover:text-foreground/90 leading-relaxed transition-colors duration-200">
            {project.homepage.homepageDetail}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;