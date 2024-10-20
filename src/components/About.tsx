import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GradientProgressProps {
  value: number;
  startColor: string;
  endColor: string;
}

const GradientProgress = ({ value, startColor, endColor }: GradientProgressProps) => (
  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
    <div 
      className="h-full rounded-full" 
      style={{
        width: `${value}%`,
        background: `linear-gradient(to right, ${startColor}, ${endColor})`
      }}
    />
  </div>
);

const skills = [
  { name: 'HTML/CSS', level: 95, startColor: '#E44D26', endColor: '#264DE4' },
  { name: 'JavaScript/TypeScript', level: 90, startColor: '#F7DF1E', endColor: '#3178C6' },
  { name: 'React/Next.js', level: 90, startColor: '#61DAFB', endColor: '#000000' },
  { name: 'Node.js/Express.js', level: 85, startColor: '#339933', endColor: '#000000' },
  { name: 'MongoDB/MariaDB', level: 80, startColor: '#47A248', endColor: '#003545' },
];

const About = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <div className="flex-grow">
                <p className="text-gray-600 mb-4">
                  I&apos;m a versatile full-stack developer with a passion for creating 
                  comprehensive web solutions. With extensive experience in both front-end 
                  and back-end technologies, I&apos;ve successfully delivered projects ranging 
                  from e-commerce platforms to custom CRM solutions and complex web applications.
                </p>
                <p className="text-gray-600">
                  My approach combines creative problem-solving with technical expertise across 
                  the entire stack. I specialize in building robust, scalable applications using 
                  React and Next.js for dynamic front-ends, Node.js and Express for powerful back-ends, 
                  and modern databases for efficient data management. This full-stack proficiency 
                  allows me to architect complete solutions that seamlessly integrate all layers of 
                  web development.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="space-y-4 flex-grow">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-medium">{skill.level}%</span>
                    </div>
                    <GradientProgress 
                      value={skill.level} 
                      startColor={skill.startColor}
                      endColor={skill.endColor}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;