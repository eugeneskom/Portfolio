import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "./ProjectsShowcase";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="overflow-hidden">
    <Image src={project.image} width={478} height={192} alt={project.title} className="w-full h-48 object-contain" />
    <CardContent className="p-4">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="secondary">{tech}</Badge>
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

export default ProjectCard;