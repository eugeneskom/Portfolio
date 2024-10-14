import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  ShoppingCart, 
  LayoutDashboard, 
  Zap, 
  Search, 
  Smartphone, 
  RefreshCw, 
  Globe
} from 'lucide-react';

const services = [
  {
    title: "Front-End Development",
    description: "Creating responsive and interactive web applications using modern frameworks and libraries.",
    icon: Code,
    tags: ["React", "Next.js", "Vue.js", "Angular"]
  },
  {
    title: "E-commerce Solutions",
    description: "Building custom e-commerce platforms with seamless user experiences and robust functionality.",
    icon: ShoppingCart,
    tags: ["Shopify", "WooCommerce", "Custom Solutions"]
  },
  {
    title: "Custom Dashboards",
    description: "Developing intuitive and data-rich dashboards for business intelligence and analytics.",
    icon: LayoutDashboard,
    tags: ["Data Visualization", "Real-time Updates"]
  },
  {
    title: "Website Speed Optimization",
    description: "Improving website performance to enhance user experience and search engine rankings.",
    icon: Zap,
    tags: ["Lazy Loading", "Code Splitting", "Asset Optimization"]
  },
  {
    title: "SEO-Friendly Semantic HTML",
    description: "Implementing proper HTML structure and semantics to improve search engine visibility and accessibility.",
    icon: Search,
    tags: ["Schema Markup", "Accessibility", "Best Practices"]
  },
  {
    title: "Responsive Web Design",
    description: "Ensuring websites look and function perfectly across all devices and screen sizes.",
    icon: Smartphone,
    tags: ["Mobile-First", "Fluid Layouts"]
  },
  {
    title: "Web Application Maintenance",
    description: "Providing ongoing support, updates, and improvements to keep web applications running smoothly.",
    icon: RefreshCw,
    tags: ["Bug Fixes", "Feature Updates", "Performance Monitoring"]
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Ensuring consistent functionality and appearance across different web browsers and versions.",
    icon: Globe,
    tags: ["Testing", "Polyfills", "Graceful Degradation"]
  }
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
  <Card className="h-full">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <service.icon className="w-8 h-8 mr-3 text-blue-500" />
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag, index) => (
          <Badge key={index} variant="secondary">{tag}</Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;