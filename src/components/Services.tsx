import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  ShoppingCart, 
  LayoutDashboard, 
  Zap, 
  Globe,
  Smartphone
} from 'lucide-react';

const services = [
  {
    title: "Front-End Development & Performance",
    description: "Creating fast, responsive, and interactive web applications using modern frameworks and libraries. We optimize for speed and performance to enhance user experience and search engine rankings.",
    icon: Code,
    tags: ["React", "Next.js", "Vue.js", "Angular", "Lazy Loading", "Code Splitting", "Asset Optimization"]
  },
  {
    title: "E-commerce & Business Solutions",
    description: "Building custom e-commerce platforms and business intelligence dashboards with seamless user experiences and robust functionality for data-driven decision making.",
    icon: ShoppingCart,
    tags: ["Shopify", "WooCommerce", "Custom Solutions", "Data Visualization", "Real-time Updates"]
  },
  {
    title: "SEO & Accessibility",
    description: "Implementing proper HTML structure and semantics to improve search engine visibility while ensuring websites are accessible to all users. We follow best practices for maximum reach and usability.",
    icon: Globe,
    tags: ["Schema Markup", "Accessibility", "SEO Best Practices", "Semantic HTML", "WCAG Compliance"]
  },
  {
    title: "Responsive & Cross-Platform Design",
    description: "Developing websites that look and function perfectly across all devices, screen sizes, and browsers. We ensure consistent functionality and appearance everywhere.",
    icon: Smartphone,
    tags: ["Mobile-First", "Fluid Layouts", "Cross-Browser Testing", "Responsive Design", "Progressive Enhancement"]
  },
  {
    title: "Application Lifecycle Management",
    description: "Providing comprehensive support throughout your application's lifecycle, from development to maintenance. We handle updates, monitoring, and continuous improvements.",
    icon: LayoutDashboard,
    tags: ["Bug Fixes", "Feature Updates", "Performance Monitoring", "Maintenance", "Support"]
  },
  {
    title: "Technical Architecture & Optimization",
    description: "Building robust technical foundations with focus on scalability, performance, and maintainability. We implement modern best practices and future-proof solutions.",
    icon: Zap,
    tags: ["Architecture Planning", "Technical Consulting", "Performance Optimization", "Code Quality", "Best Practices"]
  }
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <service.icon className="w-8 h-8 mr-3 text-blue-500" />
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="text-sm"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;