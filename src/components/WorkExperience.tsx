import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

// Define the structure for a single technology
type Technology = string;

// Define the structure for a single responsibility
type Responsibility = string;

// Define the interface for a single work experience
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

// Define the type for the array of work experiences
type WorkExperienceArray = WorkExperience[];

const experiences:WorkExperienceArray = [
  {
    company: "Freelance",
    location: "Remote",
    position: "Full-Stack Developer",
    duration: "Current",
    startDate: "2023",
    endDate: "Present",
    responsibilities: [
      "Develop full-stack web applications using React, Next.js, and Node.js",
      "Design and implement database schemas using MongoDB, MariaDB, and PostgreSQL",
      "Create RESTful and GraphQL APIs for seamless front-end and back-end integration",
      "Implement responsive designs with Tailwind CSS and other modern CSS frameworks",
      "Deploy and maintain applications on VPS using Ubuntu, Docker, and Nginx",
      "Collaborate with clients to understand requirements and deliver high-quality solutions"
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "GraphQL", "Tailwind CSS"]
  },
  {
    company: "Tel Aviv Pituah",
    location: "Israel",
    position: "Front-End Developer",
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
      "Assisted in the implementation of state management solutions using Redux Toolkit"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "RESTful APIs", "Redux Toolkit"]
  },
  {
    company: "Freelance",
    location: "Remote",
    position: "Web Developer",
    duration: "7 months",
    startDate: "2022",
    endDate: "2022",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript",
      "Created and customized WordPress themes and plugins",
      "Implemented design mockups into functional web pages",
      "Collaborated with clients to gather requirements and deliver projects on time",
      "Optimized website performance and implemented SEO best practices"
    ],
    technologies: ["HTML", "CSS", "SCSS", "JavaScript", "WordPress"]
  }
];

const ExperienceCard = ({ experience }:{experience:WorkExperience}) => (
  <Card className="mb-6">
    <CardContent className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{experience.position}</h3>
          <p className="text-gray-600">{experience.company}, {experience.location}</p>
        </div>
        <Badge variant="secondary" className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {experience.startDate} - {experience.endDate}
        </Badge>
      </div>
      <p className="text-gray-700 mb-4">Duration: {experience.duration}</p>
      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
      <ul className="list-disc pl-5 mb-4">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="text-gray-700 mb-1">{resp}</li>
        ))}
      </ul>
      <h4 className="font-semibold mb-2">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <Badge key={index} variant="outline">{tech}</Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const WorkExperience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Briefcase className="w-8 h-8 mr-2" />
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;