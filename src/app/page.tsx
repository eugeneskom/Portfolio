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

import { sql } from "@vercel/postgres";

export async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}

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
