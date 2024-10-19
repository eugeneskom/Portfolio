"use client"
import React, { lazy, Suspense,
  //  useEffect, useState 
  } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { ExternalLink, Github } from 'lucide-react';
// import Image from 'next/image';
import axios from 'axios';
// import { ErrorBoundary } from 'react-error-boundary';
import ProjectCardSkeleton from './ProjectCardSkeleton';

 
const ProjectCard = lazy(() => import('./ProjectCard'));


export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}




const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/project?_embed`);
    // eslint-disable-next-line 
    return response.data.map((project: any) => ({
      title: project.title.rendered,
      description: project.project_meta.description || '',
      technologies: project.project_meta.technologies || [],
      liveLink: project.project_meta.live_link || '',
      githubLink: project.project_meta.github_link || '',
      image: project.project_meta.image || '/placeholder-image.jpg',
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
};


const ProjectsShowcase: React.FC = () => {
  const projects = React.use(fetchProjects());

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Suspense key={index} fallback={<ProjectCardSkeleton />}>
              {/* <ErrorBoundary fallback={<div>Error loading project</div>}> */}
                <ProjectCard project={project} />
              {/* </ErrorBoundary> */}
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};



export default ProjectsShowcase;