"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import ProjectCardSkeleton from "./skeletons/ProjectCardSkeleton";

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

const ProjectsShowcase: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectsCount, setProjectsCount] = useState(3);

  const showAllProjects = () => {
    setProjectsCount(projects.length);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/project?_embed`);
        if (isMounted) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const fetchedProjects = response.data.map((project: any) => ({
            title: project.title.rendered,
            description: project.project_meta.description || "",
            technologies: project.project_meta.technologies || [],
            liveLink: project.project_meta.live_link || "",
            githubLink: project.project_meta.github_link || "",
            image: project.project_meta.image || "/placeholder-image.jpg",
          }));
          setProjects(fetchedProjects);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        if (isMounted) {
          setError("Failed to fetch projects. Using hardcoded data.");
          // You might want to set some fallback projects here instead of using the state
          // setProjects(fallbackProjects);
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) console.warn(error);

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array(3)
                .fill(null)
                .map((_, index) => <ProjectCardSkeleton key={index} />)
            : projects.slice(0, projectsCount).map((project, index) => <ProjectCard key={index} project={project} />)}
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
