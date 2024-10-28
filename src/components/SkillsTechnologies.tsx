import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiMongodb, SiMariadb, SiTailwindcss, 
  SiBootstrap, SiMui, SiWordpress, SiSocketdotio, SiPostgresql,
  SiRedis, SiSwagger, SiGraphql, SiFirebase, SiSass, SiCssmodules,
  SiNpm, SiGit, SiRedux, SiLinux, SiDocker, SiUbuntu, SiNginx
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Reorganized categories with colors for better visual hierarchy
const skillCategories = [
  {
    name: "Frontend",
    color: "bg-blue-50 border-blue-200",
    titleColor: "text-blue-800",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ]
  },
  {
    name: "Backend",
    color: "bg-green-50 border-green-200",
    titleColor: "text-green-800",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "WebSocket", icon: SiSocketdotio, color: "#010101" },
      { name: "REST", icon: SiSwagger, color: "#85EA2D" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ]
  },
  {
    name: "Databases",
    color: "bg-purple-50 border-purple-200",
    titleColor: "text-purple-800",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    name: "Styling",
    color: "bg-pink-50 border-pink-200",
    titleColor: "text-pink-800",
    skills: [
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "SCSS", icon: SiSass, color: "#CC6699" },
      { name: "CSS Modules", icon: SiCssmodules, color: "#000000" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material-UI", icon: SiMui, color: "#0081CB" },
      { name: "shadcn/ui", icon: SiReact, color: "#000000" },
    ]
  },
  {
    name: "Development",
    color: "bg-orange-50 border-orange-200",
    titleColor: "text-orange-800",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ]
  },
  {
    name: "DevOps",
    color: "bg-indigo-50 border-indigo-200",
    titleColor: "text-indigo-800",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
      { name: "Nginx", icon: SiNginx, color: "#269539" },
      { name: "VPS", icon: SiLinux, color: "#008080" },
    ]
  }
];

const SkillIcon: React.FC<{ icon: IconType; name: string; color: string }> = ({ icon: Icon, name, color }) => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/50 transition-colors duration-200">
    <Icon className="text-xl" style={{ color }} />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const CategoryCard: React.FC<{
  name: string;
  skills: { name: string; icon: IconType; color: string }[];
  color: string;
  titleColor: string;
}> = ({ name, skills, color, titleColor }) => (
  <Card className={`border-2 ${color} hover:shadow-lg transition-all duration-300`}>
    <CardContent className="p-4">
      <h3 className={`text-lg font-bold mb-3 ${titleColor}`}>{name}</h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <SkillIcon key={index} {...skill} />
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsTechnologies: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
          <div className="mt-8 text-center text-gray-600">
            <Badge variant="secondary" className="text-sm">
              Constantly learning and expanding my skill set
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTechnologies;