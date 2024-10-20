import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Send, Facebook } from "lucide-react";

import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I&lsquo;m Eugene</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">I&lsquo;m a passionate full-stack developer specializing in creating robust, scalable web applications. With expertise in React, Next.js, Node.js, and modern database technologies, I build comprehensive solutions from front-end to back-end.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link href="#projects" passHref>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <span>
                View My Projects <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>

          <Link href="#contact" passHref>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              <span>Contact Me</span>
            </Button>
          </Link>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/eugeneskom" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <Github className="h-8 w-8" />
            <div className="sr-only">My github page</div>
          </a>
          <a href="https://linkedin.com/in/yevhenii-skomorokhov-98b57415b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <Linkedin className="h-8 w-8" />
            <div className="sr-only">My Linkedin Page</div>
          </a>
          <a href="https://t.me/eugeneskom" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <Send className="h-8 w-8" />
            <div className="sr-only">My Telegram Page</div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100011042891688" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <Facebook className="h-8 w-8" />
            <div className="sr-only">My Facebook Page</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;