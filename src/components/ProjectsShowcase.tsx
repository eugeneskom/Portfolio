import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Full-Stack Logistics Management Platform",
    description: "A comprehensive logistics management system for trucking companies.",
    technologies: ["React", "Node.js", "MariaDB", "Express", "TypeScript", "Tailwind.css", "Rest API"],
    liveLink: "https://remberg.eugeneskom.com/",
    githubLink: "https://github.com/yourusername/truckboard",
    image: "/images/truckboard.png"
  },
  {
    title: "E-commerce Website Dream Moments",
    description: "A full-featured online store with product management and order processing.",
    technologies: ["SCSS", "HTML", "TypeScript"],
    liveLink: "https://dream-moments.kz/",
    githubLink: "https://github.com/eugeneskom/dream-moments",
    image: "/images/dream-moments.png"
  },
  {
    title: "Fonte Capital Ltd",
    description: "A Chrome extension integrating WhatsApp chat functionality for CRM systems.",
    technologies: ["HTML", "SCSS", "JavaScript", "REST API"],
    liveLink: "https://fonte.kz/",
    githubLink: "https://github.com/eugeneskom/fontee",
    image: "/images/fontee.png"
  },
  {
    title: "Interactive Budget Allocation Simulator",
    description: "An interactive web application simulating large-scale spending, featuring dynamic updates and real-time calculations.",
    technologies: ["TypeScript", "React", "WordPress", "REST API"],
    liveLink: "https://bedsteitest.dk/brug-sanjay-shahs-svindelformue/",
    githubLink: "https://github.com/yourusername/crm-extension",
    image: "/images/calculator.png"
  },
  {
    title: "ICVR - Cutting Edge Software, Art, and Games",
    description: "An award-winning digital production company specializing in immersive experiences, virtual production, and game development",
    technologies: ["SCSS", "HTML", "JavaScript", "WordPress"],
    liveLink: "https://icvr.io/",
    githubLink: "https://github.com/yourusername/crm-extension",
    image: "/images/icvr.png"
  },
  {
    title: "TATI SIMPSON PHOTOGRAPHY",
    description: "Designed and developed a striking, emotion-driven portfolio website for a globe-trotting wedding photographer.",
    technologies: ["SCSS", "HTML", "JavaScript", "WordPress"],
    liveLink: "https://tatisimpson.com/",
    githubLink: "https://github.com/yourusername/crm-extension",
    image: "/images/tati.png"
  },
  {
    title: "Medical Appointment Scheduler for Microsoft 365",
    description: "Developed a comprehensive medical appointment scheduling system integrated with Microsoft 365, using React.js. This application streamlines the process of booking and managing medical appointments for healthcare providers.",
    technologies: ["SCSS", "HTML", "JavaScript", "WordPress"],
    liveLink: "https://tatisimpson.com/",
    githubLink: "https://github.com/yourusername/crm-extension",
    image: "/images/medical-todo.png"
  },
  {
    title: "CRM Chrome Extension",
    description: "A Chrome extension integrating WhatsApp chat functionality for CRM systems.",
    technologies: ["TypeScript", "Chrome API", "React", "Firebase", "REST API"],
    liveLink: "https://chromewebstore.google.com/detail/funner/jkhecbecigibhenciiplohmdnkclhpfk",
    githubLink: "https://github.com/yourusername/crm-extension",
    image: "/images/funner.png"
  },
  // {
  //   title: "Analytics Dashboard",
  //   description: "An interactive dashboard for visualizing e-commerce analytics and KPIs.",
  //   technologies: ["React", "D3.js", "Node.js", "MongoDB"],
  //   liveLink: "https://dashboard.example.com",
  //   githubLink: "https://github.com/yourusername/analytics-dashboard",
  //   image: "/api/placeholder/800/600"
  // },
  // {
  //   title: "Site Builder",
  //   description: "An interactive dashboard for visualizing e-commerce analytics and KPIs.",
  //   technologies: ["React", "D3.js", "Node.js", "MongoDB"],
  //   liveLink: "https://dashboard.example.com",
  //   githubLink: "https://github.com/yourusername/analytics-dashboard",
  //   image: "/api/placeholder/800/600"
  // }
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
    <Image src={project.image} width="800" height="600" alt={project.title} className="w-full h-48 object-fit" />
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