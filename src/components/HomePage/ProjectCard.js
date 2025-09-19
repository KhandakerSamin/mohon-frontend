"use client";

import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"

const ProjectCard = ({ project, isFullWidth = false }) => {
  return (
    <Link 
      href={`/projects/${project.id}`}
      className={`group relative rounded-md overflow-hidden bg-background transition-colors duration-300 cursor-pointer block ${
        isFullWidth ? "col-span-full" : "col-span-1"
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative rounded-md overflow-hidden bg-gray-900 ${
          isFullWidth ? "aspect-video max-h-[800px]" : "h-[230px] md:h-[430px]"
        }`}
      >
        <Image
          src={project.homepage.homepageThumbnail || "/placeholder.svg"}
          alt={project.homepage.projectTitle}
          fill
          style={{ borderRadius: "inherit" }}
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Project Content */}
      <div className="py-6">
        <div className="flex items-center justify-between">
          {/* Title and Arrow */}
          <div className="flex items-center justify-start gap-1.5 md:gap-5 mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-foreground/80 group-hover:text-foreground/80 transition-colors">
              {project.homepage.projectTitle}
            </h3>
            <MoveRight
              size={20}
              className="text-foreground/70 group-hover:translate-x-2 group-hover:text-foreground/80 transition-all duration-300"
            />
          </div>

          {/* Keywords */}
          <div className="flex items-center space-x-2 md:space-x-4 text-sm text-foreground mb-3">
            {project.homepage.keywords.map((keyword, index) => (
              <span
                key={index}
                className=" p-1.5 text-foreground/70 md:px-3 rounded-md bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-200"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/70 group-hover:text-foreground/90 leading-relaxed mb-4 transition-colors duration-200">
          {project.homepage.homepageDetail}
        </p>
      </div>
    </Link>
  )
}

export default ProjectCard