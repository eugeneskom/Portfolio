"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="overflow-hidden">
    <Image src={project.image} width={478} height={192} alt={project.title} className="w-full h-48 object-cover object-top" />
    <CardContent className="p-4">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        {project.liveLink && (
          <Button asChild variant="outline" size="sm">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Live Site
            </a>
          </Button>
        )}
        {project.githubLink && (
          <Button asChild variant="outline" size="sm">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

interface ProjectsShowcaseProps {
  projects: Project[];
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ projects }) => {
  const [projectsCount, setProjectsCount] = useState(3);

  const showAllProjects = () => {
    setProjectsCount(projects.length);
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, projectsCount).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          {projectsCount < projects.length && (
            <Button onClick={showAllProjects}>
              View All Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;