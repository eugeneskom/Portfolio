import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiMongodb, SiMariadb, SiTailwindcss, 
  SiBootstrap, SiMui, SiWordpress,
  SiSocketdotio,
  SiPostgresql,
  SiRedis,
  SiSwagger,
  SiGraphql,
  SiFirebase,
  SiSass,
  SiCssmodules,
  SiNpm, 
  SiGit, 
  SiRedux,
  SiLinux,
  SiDocker,
  SiUbuntu,
  SiNginx,
  
} from 'react-icons/si';
import { IconType } from 'react-icons';


interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}


const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "WebSocket", icon: SiSocketdotio, color: "#010101" },
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ]
  },
  {
    name: "CSS Frameworks & UI Libraries",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material-UI", icon: SiMui, color: "#0081CB" },
      { name: "shadcn/ui", icon: SiReact, color: "#000000" }, // Using React icon as placeholder
      { name: "SCSS", icon: SiSass, color: "#CC6699" },
      // { name: "CSS-in-JS", icon: SiStyledcomponents, color: "#DB7093" },
      { name: "CSS Modules", icon: SiCssmodules, color: "#000000" },
    ]
  },
  {
    name: "CMS",
    skills: [
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ]
  },
  {
    name: "API & Services",
    skills: [
      { name: "RESTful APIs", icon: SiSwagger, color: "#85EA2D" },
      { name: "GraphQL APIs", icon: SiGraphql, color: "#E10098" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    name: "Development Tools & State Management",
    skills: [
      { name: "npm", icon: SiNpm, color: "#CB3837" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    ]
  },
  {
    name: "DevOps & Deployment",
    skills: [
      { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" }, // Using Node icon as placeholder for Ubuntu
      { name: "VPS Deployment", icon: SiLinux, color: "#008080" }, // Same placeholder, feel free to use custom icons
      { name: "Docker", icon: SiDocker, color: "#2496ED" }, // Placeholder for Docker
      { name: "Nginx", icon: SiNginx, color: "#269539" }, // Placeholder for Nginx
    ]
  }
];


const SkillIcon: React.FC<Skill> = ({ icon: Icon, name, color }) => (
  <div className="flex flex-col items-center group">
    <Icon className="text-4xl mb-2 transition-all duration-300 ease-in-out group-hover:scale-110" style={{ color }} />
    <span className="text-sm text-center transition-all duration-300 ease-in-out group-hover:font-semibold">{name}</span>
  </div>
);

const SkillCategory: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <Card className="mb-6 hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.name}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {category.skills.map((skill, index) => (
          <SkillIcon key={index} {...skill} />
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsTechnologies: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsTechnologies;