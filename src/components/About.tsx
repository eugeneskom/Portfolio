import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronRight } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React/Next.js', level: 90 },
  { name: 'Node.js/Express.js', level: 85 },
  { name: 'MongoDB/MariaDB', level: 80 },
];

const About = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardContent className="p-6   ">
                <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                <p className="text-gray-600 mb-4">
                  I&apos;m a passionate full-stack developer with a keen eye for creating 
                  seamless user experiences. With extensive experience in both front-end 
                  and back-end technologies, I&apos;ve successfully delivered projects ranging 
                  from e-commerce platforms to custom CRM solutions.
                </p>
                <p className="text-gray-600">
                  My approach combines creative problem-solving with technical expertise, 
                  allowing me to build robust and scalable applications that meet and exceed 
                  client expectations.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#projects" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            View My Projects <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;