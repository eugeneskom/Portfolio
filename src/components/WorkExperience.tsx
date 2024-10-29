import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Building2, MapPin } from "lucide-react";

// Types remain the same as in your original code
type Technology = string;
type Responsibility = string;

interface WorkExperience {
  company: string;
  location: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: Responsibility[];
  technologies: Technology[];
}

const experiences: WorkExperience[] = [
  {
    company: "Freelance",
    location: "Remote",
    position: "Full-Stack Dev",
    duration: "Current",
    startDate: "2023",
    endDate: "Present",
    responsibilities: [
      "Develop full-stack web applications using React, Next.js, and Node.js",
      "Design and implement database schemas using MongoDB, MariaDB, and PostgreSQL",
      "Create RESTful and GraphQL APIs for seamless front-end and back-end integration",
      "Implement responsive designs with Tailwind CSS and other modern CSS frameworks",
      "Deploy and maintain applications on VPS using Ubuntu, Docker, and Nginx",
      "Collaborate with clients to understand requirements and deliver high-quality solutions",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "GraphQL", "Tailwind CSS"],
  },
  {
    company: "Tel Aviv Pituah",
    location: "Israel, Remote",
    position: "Front-End Dev",
    duration: "1.5 years",
    startDate: "2022",
    endDate: "2023",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js and Next.js",
      "Implemented pixel-perfect UI designs using modern CSS techniques and frameworks like Tailwind CSS",
      "Collaborated with back-end developers to integrate RESTful APIs and optimize application performance",
      "Utilized version control systems (Git) for efficient code management and collaboration",
      "Participated in code reviews and implemented best practices for clean, maintainable code",
      "Worked on optimizing web applications for maximum speed and scalability",
      "Assisted in the implementation of state management solutions using Redux Toolkit",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "RESTful APIs", "Redux Toolkit"],
  },
  {
    company: "Freelance",
    location: "Remote",
    position: "Web Dev",
    duration: "7 months",
    startDate: "2022",
    endDate: "2022",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript",
      "Created and customized WordPress themes and plugins",
      "Implemented design mockups into functional web pages",
      "Collaborated with clients to gather requirements and deliver projects on time",
      "Optimized website performance and implemented SEO best practices",
    ],
    technologies: ["HTML", "CSS", "SCSS", "JavaScript", "WordPress"],
  },
];

const ExperienceContent = ({ experience }: { experience: WorkExperience }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-start">
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Building2 className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">{experience.company}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">{experience.location}</span>
        </div>
      </div>
      <Badge variant="secondary" className="flex items-center">
        <Calendar className="w-4 h-4 mr-1" />
        {experience.startDate} - {experience.endDate}
      </Badge>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
      <ul className="list-disc pl-5 space-y-1">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="text-gray-700">
            {resp}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <Badge key={index} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);

const WorkExperience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Briefcase className="w-8 h-8 mr-2" />
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={experiences[0].position} className="w-full">
            <TabsList className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 mb-8 gap-2">
              {experiences.map((exp) => (
                <TabsTrigger key={exp.position} value={exp.position} className="text-xs sm:text-sm md:text-base">
                  {exp.position}
                </TabsTrigger>
              ))}
            </TabsList>
            {experiences.map((exp) => (
              <TabsContent key={exp.position} value={exp.position}>
                <Card>
                  <CardContent className="p-6">
                    <ExperienceContent experience={exp} />
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
