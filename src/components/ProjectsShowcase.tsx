import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Truckboard Platform",
    description: "A comprehensive logistics management system for trucking companies.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://truckboard.example.com",
    githubLink: "https://github.com/yourusername/truckboard",
    image: "/api/placeholder/800/600"
  },
  {
    title: "E-commerce Website",
    description: "A full-featured online store with product management and order processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveLink: "https://ecommerce.example.com",
    githubLink: "https://github.com/yourusername/ecommerce",
    image: "/api/placeholder/800/600"
  },
  {
    title: "CRM Chrome Extension",
    description: "A Chrome extension integrating WhatsApp chat functionality for CRM systems.",
    technologies: ["JavaScript", "Chrome API", "React", "Firebase"],
    liveLink: "https://chrome.google.com/webstore/detail/your-extension",
    githubLink: "https://github.com/yourusername/crm-extension",
    image: "/api/placeholder/800/600"
  },
  {
    title: "Analytics Dashboard",
    description: "An interactive dashboard for visualizing e-commerce analytics and KPIs.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    liveLink: "https://dashboard.example.com",
    githubLink: "https://github.com/yourusername/analytics-dashboard",
    image: "/api/placeholder/800/600"
  }
];

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}


const ProjectCard = ({ project }:{project:Project}) => (
  <Card className="overflow-hidden">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <CardContent className="p-4">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="secondary">{tech}</Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" /> Live Site
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" /> GitHub
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const ProjectsShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;