"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar,
  // Clock, 
  ChevronRight } from 'lucide-react';
import axios from 'axios';
import Image from 'next/image';

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
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

interface Tag {
  id: number;
  name: string;
}

const ArticleCard: React.FC<{ article: WordPressArticle; tags: Tag[] }> = ({ article, tags }) => {
  const featuredImageUrl = article._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/800/400';
  const articleTags = tags.filter(tag => article.tags.includes(tag.id));

  return (
    <Card className="overflow-hidden">
      <Image height="300" width="400" src={featuredImageUrl} alt={article.title.rendered} className="w-full h-48 object-cover" />
      <CardContent className="p-6">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
        <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
        <div className="flex flex-wrap gap-2 mb-4">
          {articleTags.map((tag) => (
            <Badge key={tag.id} variant="secondary">{tag.name}</Badge>
          ))}
        </div>
        <Button variant="outline" className="w-full">
          Read More <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

const BlogArticles: React.FC = () => {
  const [articles, setArticles] = useState<WordPressArticle[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, tagsResponse] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?_embed`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tags`)
        ]);

        setArticles(postsResponse.data);
        setTags(tagsResponse.data);

        console.log("Posts:", postsResponse.data);
        console.log("Tags:", tagsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} tags={tags} />
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