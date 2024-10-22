"use client";
import React, { 
  useEffect,
  // useEffect, 
  useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  // Clock,
  ChevronRight,
} from "lucide-react";
// import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// import ArticleCardSkeleton from "./skeletons/ArticleCardSkeleton";

interface WordPressArticle {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

interface Tag {
  id: number;
  name: string;
}

const ArticleCard: React.FC<{ article: WordPressArticle; tags: Tag[] }> = ({ article, tags }) => {
  const featuredImageUrl = article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/api/placeholder/800/400";
  const articleTags = tags.filter((tag) => article.tags.includes(tag.id));

  return (
    <Card className="overflow-hidden">
      
      <Image height="192" width="484" src={featuredImageUrl} alt={article.title.rendered} className="w-full h-48 object-cover" />
      <CardContent className="p-6 flex flex-col">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
        <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
        <div className="flex flex-wrap gap-2 mb-4">
          {articleTags.map((tag) => (
            <Badge key={tag.id} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
        <Link href={`/blog/${article.slug}`} className="text-blue-700 hover:underline block">
          <Button variant="outline" className="w-full">
            Read More 
            {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
          </Button>
          <span className="sr-only">Read article {article.title.rendered}</span>
        </Link>
      </CardContent>
    </Card>
  );
};


interface BlogArticlesProps {
  articles: WordPressArticle[];
  tags: Tag[];
}

const BlogArticles: React.FC<BlogArticlesProps> = ({ articles, tags }) => {
  // Set initial count based on window width if in browser
  const getInitialCount = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      // md breakpoint (768px) to lg breakpoint (1024px)
      const isTablet = width >= 768 && width < 1024;
      return isTablet ? 4 : 3;
    }
    return 3; // Default for server-side rendering
  };

  const [articlesCount, setArticlesCount] = useState(getInitialCount());

  const showMoreArticles = () => {
    const width = window.innerWidth;
    const isTablet = width >= 768 && width < 1024;
    const increment = isTablet ? 2 : 3;
    
    setArticlesCount(prevCount => 
      Math.min(prevCount + increment, articles.length)
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isTablet = width >= 768 && width < 1024;
      setArticlesCount(isTablet ? 2 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, articlesCount).map((article) => (
            <ArticleCard key={article.id} article={article} tags={tags} />
          ))}
        </div>
        {articlesCount < articles.length && (
          <div className="text-center mt-12">
            <Button onClick={showMoreArticles}>
              View More Articles <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogArticles;