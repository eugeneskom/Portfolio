import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SkillsTechnologies from "@/components/SkillsTechnologies";
import WorkExperience from "@/components/WorkExperience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BlogArticles from "@/components/BlogArticles";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ProjectsShowcase />
      <SkillsTechnologies />
      <WorkExperience />
      <Services />  
      <Testimonials />
      <BlogArticles />
      <ContactForm  />
    </>
  );
}
