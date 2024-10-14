import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechInnovate",
    company: "TechInnovate",
    avatar: "/api/placeholder/100/100",
    quote: "Working with this developer was an absolute pleasure. Their expertise in front-end development significantly improved our web application's performance and user experience. The attention to detail in implementing SEO-friendly semantic HTML was impressive."
  },
  {
    name: "Michael Chen",
    position: "Lead Designer, DesignCraft",
    company: "DesignCraft",
    avatar: "/api/placeholder/100/100",
    quote: "I've collaborated with many developers, but few have the same level of skill and dedication. Their ability to turn our designs into pixel-perfect, responsive websites is unmatched. The custom dashboard they created for us has become an indispensable tool for our team."
  },
  {
    name: "Emily Rodriguez",
    position: "E-commerce Manager, ShopEase",
    company: "ShopEase",
    avatar: "/api/placeholder/100/100",
    quote: "The e-commerce solution developed for our company exceeded our expectations. Not only did it look great, but the optimizations for speed and SEO have significantly boosted our online sales. Their expertise in front-end technologies made a real difference to our business."
  },
  {
    name: "Alex Novak",
    position: "CTO, DataViz",
    company: "DataViz",
    avatar: "/api/placeholder/100/100",
    quote: "The custom dashboard created for our data visualization needs was nothing short of exceptional. The developer's proficiency in React and data rendering techniques resulted in a smooth, interactive experience that our clients love. Their work has been crucial in setting us apart from competitors."
  }
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <Card className="h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <Quote className="w-8 h-8 text-blue-500 mb-4" />
      <p className="text-gray-600 italic mb-4 flex-grow">{testimonial.quote}</p>
      <div className="flex items-center mt-4">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;