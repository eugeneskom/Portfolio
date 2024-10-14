import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
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
      "Assisted in the implementation of state management solutions using Redux and Context API",
      "Contributed to the development of reusable component libraries to ensure consistency across projects"
    ],
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Git", "RESTful APIs"]
  }
];

const ExperienceCard: React.FC<{ experience: typeof experiences[0] }> = ({ experience }) => (
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

const WorkExperience: React.FC = () => {
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