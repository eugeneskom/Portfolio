import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I&lsquo;m Eugene
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          I&lsquo;m a passionate front-end developer specializing in creating 
          responsive, user-friendly web applications. With expertise in 
          React, Next.js, and modern CSS frameworks, I bring designs to life 
          with clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            View My Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
            Contact Me
          </Button>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/eugeneskom" target="_blank"  rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com/in/yevhenii-skomorokhov-98b57415b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;