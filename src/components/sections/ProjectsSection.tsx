import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";
import { projects } from "@/data/mockData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center justify-between">
        <Badge
          variant={project.status === "Активный" ? "default" : "secondary"}
        >
          {project.status}
        </Badge>
        <span className="text-sm text-gray-500">{project.duration}</span>
      </div>
      <CardTitle className="text-[#1E293B]">{project.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Руководитель:</span>
          <span className="text-sm font-medium">{project.leader}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Финансирование:</span>
          <span className="text-sm font-medium text-[#2563EB]">
            {project.funding}
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
            Исследовательские проекты
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
            Инновационные проекты, которые меняют наш мир
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
