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



async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/custom/v1/projects`, {
    next: { revalidate: 10 } // Cache for 1 hour
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
 
  return res.json()
}


export default async function Home() {

  const projectsData = await getProjects()
  console.log('projectsData',projectsData)
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
