import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SkillsTechnologies from "@/components/SkillsTechnologies";
import WorkExperience from "@/components/WorkExperience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
// import BlogArticles from "@/components/BlogArticles";
import ContactForm from "@/components/ContactForm";
import BlogDataFetcher from "@/components/BlogDataFetcher";
import { Suspense } from "react";
import axios from 'axios';
import { cache } from 'react';

interface Project {
  id: number;
  title: {
    rendered: string;
  };
  project_meta: {
    description: string;
    live_link: string;
    github_link: string;
    technologies: string[];
    image: string;
  };
  // eslint-disable-next-line
  _embedded?: any;
}

// Use React's cache function to handle caching
export const getProjects = cache(async (): Promise<Project[]> => {
  try {
    const response = await axios.get<Project[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/project`, {
        params: {
          _embed: true,
          per_page: 100
        },
        headers: {
          'Cache-Control': 'max-age=3600'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
});


export default async function Home() {

  const projectsData = await getProjects()
  console.log('projectsData',projectsData.length)
  // eslint-disable-next-line
  const projects = projectsData.map((project: any) => ({
    title: project.title.rendered,
    description: project.project_meta.description || "",
    technologies: project.project_meta.technologies || [],
    liveLink: project.project_meta.live_link || "",
    githubLink: project.project_meta.github_link || "",
    image: project.project_meta.image || "/placeholder-image.jpg",
  }))


  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ProjectsShowcase projects={projects}/>
      <SkillsTechnologies />
      <WorkExperience />
      <Services />  
      <Testimonials />
      <Suspense fallback={<div>Loading blog articles...</div>}>
        <BlogDataFetcher />
      </Suspense>
      <ContactForm  />
    </>
  );
}
