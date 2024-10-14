import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const articles = [
  {
    title: "Optimizing React Performance: A Deep Dive",
    excerpt: "Explore advanced techniques to boost your React application's performance, including code splitting, memoization, and efficient state management.",
    date: "2023-09-15",
    readTime: "8 min read",
    tags: ["React", "Performance", "JavaScript"],
    image: "/api/placeholder/800/400",
    slug: "optimizing-react-performance"
  },
  {
    title: "Building Accessible Web Applications with ARIA",
    excerpt: "Learn how to leverage ARIA (Accessible Rich Internet Applications) to create more inclusive web experiences for users with disabilities.",
    date: "2023-08-22",
    readTime: "10 min read",
    tags: ["Accessibility", "ARIA", "HTML"],
    image: "/api/placeholder/800/400",
    slug: "building-accessible-web-apps"
  },
  {
    title: "Mastering CSS Grid: From Basics to Advanced Layouts",
    excerpt: "Dive into the power of CSS Grid and discover how to create complex, responsive layouts with ease. Includes practical examples and best practices.",
    date: "2023-07-30",
    readTime: "12 min read",
    tags: ["CSS", "Layout", "Responsive Design"],
    image: "/api/placeholder/800/400",
    slug: "mastering-css-grid"
  },
  {
    title: "Serverless Architecture: When and How to Use It",
    excerpt: "Explore the benefits and challenges of serverless architecture, and learn how to determine if it's the right choice for your next project.",
    date: "2023-07-05",
    readTime: "15 min read",
    tags: ["Serverless", "Architecture", "Cloud Computing"],
    image: "/api/placeholder/800/400",
    slug: "serverless-architecture-guide"
  }
];

const ArticleCard: React.FC<{ article: typeof articles[0] }> = ({ article }) => (
  <Card className="overflow-hidden">
    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
    <CardContent className="p-6">
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {article.readTime}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag, index) => (
          <Badge key={index} variant="secondary">{tag}</Badge>
        ))}
      </div>
      <Button variant="outline" className="w-full">
        Read More <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
);

const BlogArticles: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button>
            View All Articles <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;