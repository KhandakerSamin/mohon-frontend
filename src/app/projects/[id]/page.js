import projectsData from "../../../data/projectsdata"
import { notFound } from "next/navigation"
import Navbar from "@/components/Global/Navbar"
import Footer from "@/components/Global/Footer"
import ProjectContent from "./ProjectContent"

export default function ProjectDetailPage({ params }) {
  // Find project (server-side)
  const id = typeof params.id === 'string' ? params.id : params.id
  const project = projectsData.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F5F5F5]">
        <ProjectContent project={project} />
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