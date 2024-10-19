import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/eugeneskom", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yevhenii-skomorokhov-98b57415b/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/YSkomorokh33712", label: "Twitter" },
    { icon: Mail, href: "mailto:85rk9521@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#services", label: "Services" },
    { href: "/#blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright and Additional Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About This Site</h3>
            <p className="mb-2">
              Built with React, Next.js, and Tailwind CSS. Hosted on Vercel and WordPress as Headless CMS.
            </p>
            <p>
              © 2022 - {currentYear} Eugene Skomorokhov. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;