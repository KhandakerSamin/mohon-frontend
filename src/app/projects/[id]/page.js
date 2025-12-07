import projectsData from "../../../data/projectsdata"
import { notFound } from "next/navigation"
import Navbar from "@/components/Global/Navbar"
import Footer from "@/components/Global/Footer"
import ProjectContent from "./ProjectContent"

export default async function ProjectDetailPage({ params }) {
  // Find project (server-side)
  const { id } = await params
  const project = projectsData.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
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