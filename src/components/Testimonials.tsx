"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback,
  //  AvatarImage
   } from '@/components/ui/avatar';
import { ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: "Anthony Gold",
    company: "Golden Algo Technologies",
    country: "Sweden",
    avatar: "/images/testimonials/AntonyGold.webp",
    quote: "Very talented professional with an exceptional eye for detail. Their work consistently exceeds expectations, showcasing a unique blend of creativity and precision. Highly recommended for anyone seeking top-quality results."
  },
  {
    name: "Vivek Tripath",
    country: "India",
    avatar: "/api/placeholder/100/100",
    quote: "It was Nice working with Yevhenii.Thanks for all your help on my project."
  },
  {
    name: "Abylaikhan Kolkhaev",
    country: "Kazakhstan",
    avatar: "/api/placeholder/100/100",
    quote: "Evgeniy is a professional in his field, he coped with the task 100%! The points that needed to be corrected were corrected. I recommend him and plan to work with him in the future!"
  },
  {
    name: "Nihal Puram",
    country: "India",
    avatar: "/api/placeholder/100/100",
    quote: "Amazing guy! Was able to correctly understand and build upon my request. Timely delivery, would certainly recommend for future projects."
  },
  {
    name: "Anas Gatifi",
    country: "Germany",
    avatar: "/api/placeholder/100/100",
    quote: "Yevhenii delivered good work on this project and I enjoyed working with him, he is a person with excellent communication skills and expertise."
  },
  {
    name: "Philip Norton",
    company: "Norton Five Limited",
    country: "United Kingdom",
    avatar: "/api/placeholder/100/100",
    quote: "Yevhenii communicated clearly and completed the job quickly. It was a pleasure working with him."
  },
  {
    name: "Vasily Gridnev",
    country: "Israel",
    avatar: "/api/placeholder/100/100",
    quote: "Evgeniy is an excellent developer! Responsible! Pleasant communication - on the level! I recommend!!!"
  },
  {
    name: "Ikfa Permatasari",
    country: "Indonesia",
    avatar: "/api/placeholder/100/100",
    quote: "Excellent communication, the job was done perfect and on time."
  }
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <Card className="h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <Quote className="w-8 h-8 text-blue-500 mb-4" />
      <p className="text-gray-600 italic mb-4 flex-grow">{testimonial.quote}</p>
      <div className="flex items-center mt-4">
        <Avatar className="h-12 w-12 mr-4">
          {/* <AvatarImage className="object-cover" src={testimonial.avatar} alt={testimonial.name} width="24"/> */}
          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.country} {testimonial.company ? `, ${testimonial.company}` : ""}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  const [toShow, setToShow] = useState(3);

  const handleShowMore = () => {
    setToShow(toShow + 3);
  };
  

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0,toShow).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-12">
          {toShow < testimonials.length && (
            <Button onClick={handleShowMore}>
              Show more <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;