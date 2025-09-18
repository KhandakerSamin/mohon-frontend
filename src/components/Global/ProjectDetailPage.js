import projectsData from "../../../data/projectsdata"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default async function ProjectDetailPage({ params }) {
  const { id } = await params

  console.log("[v0] Received ID from params:", id)
  console.log(
    "[v0] Available project IDs:",
    projectsData.map((p) => p.id),
  )

  const project = projectsData.find((p) => p.id === Number.parseInt(id))

  console.log("[v0] Found project:", project ? project.id : "NOT FOUND")

  if (!project) {
    console.log("[v0] Project not found, calling notFound()")
    notFound()
  }

  const renderPhoto = (photo, index) => {
    switch (photo.type) {
      case "full-width":
        return (
          <div key={index} className="w-full mb-8">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )

      case "two-grid":
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
          <div key={index} className="mb-8">
            <div className="flex gap-4 overflow-x-auto pb-4">
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
          <div key={index} className="w-full mb-8">
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{project.detailPage.projectTitle}</h1>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {project.detailPage.projectSubtitles.map((subtitle, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-muted-foreground mb-1">{subtitle.label}</h3>
                  <p className="text-foreground">{subtitle.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.homepage.keywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src={project.detailPage.detailPageThumbnail || "/placeholder.svg"}
              alt={project.detailPage.projectTitle}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* Description Sections */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {project.detailPage.descriptions.map((desc, index) => (
          <div key={index} className="mb-16">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  {desc.serialNumber}
                </span>
                <h2 className="text-2xl font-bold">{desc.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{desc.text}</p>
            </div>

            {desc.photo && renderPhoto(desc.photo, index)}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Have An Idea On Mind?</h3>
          <p className="text-muted-foreground mb-6">Let&apos;s Bring It To Life</p>
          <Link
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Email Me
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}