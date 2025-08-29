import React from 'react';
import projectsData from '../../data/projectsdata';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#F5F5F5]">
      <div className="max-w-screen mx-auto">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            // Pattern: 1st full, 2nd-3rd half, 4th full, 5th-6th half, etc.
            const isFullWidth = (index % 3 === 0);
            return (
              <ProjectCard
                key={project.id}
                project={project}
                isFullWidth={isFullWidth}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;