import projectsData from "../../../data/projectsdata"
import { notFound } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/Global/Navbar"
import Footer from "@/components/Global/Footer"


export default async function ProjectDetailPage({ params }) {
  const { id } = await params
  const project = projectsData.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }

  const renderPhoto = (photo, index) => {
    switch (photo.type) {
      case "full-width":
        return (
          <div key={index} className="w-full mb-12">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        )

      case "two-grid":
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {photo.images.map((img, imgIndex) => (
              <Image
                key={imgIndex}
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
          </div>
        )

      case "carousel":
        return (
          <div key={index} className="mb-12">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {photo.images.map((img, imgIndex) => (
                <div key={imgIndex} className="flex-shrink-0">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="rounded-lg"
                    sizes="400px"
                  />
                </div>
              ))}
            </div>
          </div>
        )

      case "endless-height":
        return (
          <div key={index} className="w-full mb-12">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={800}
              height={1200}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F5F5F5]">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-30">
          {/* Project Title Section */}
          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-3">{project.homepage.projectTitle}</div>
            <h1 className="text-3xl font-normal text-gray-900 mb-8 leading-relaxed">
              {project.homepage.homepageDetail}
            </h1>
            
            {/* Project Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {project.detailPage.projectSubtitles.map((subtitle, index) => (
                <div key={index}>
                  <div className="text-sm text-gray-500 mb-1">{subtitle.label}</div>
                  <div className="text-sm text-gray-900">{subtitle.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Project Image */}
          <div className="mb-16">
            <Image
              src={project.detailPage.detailPageThumbnail || "/placeholder.svg"}
              alt={project.detailPage.projectTitle}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Description Sections */}
          <div className="space-y-16">
            {project.detailPage.descriptions.map((desc, index) => (
              <div key={index}>
                {/* Section Title */}
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    {desc.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed max-w-4xl">
                    {desc.text}
                  </p>
                </div>

                {/* Section Image */}
                {desc.photo && renderPhoto(desc.photo, index)}
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}