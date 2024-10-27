import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { Tag, WordPressArticle } from '../blog/[slug]/page';

export interface ArticlesPageProps {
  articles: WordPressArticle[];
  tags: Tag[];
}

async function getArticles(): Promise<ArticlesPageProps> {
  const [articlesResponse, tagsResponse] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?_embed&per_page=12`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tags`)
  ]);

  return {
    articles: articlesResponse.data,
    tags: tagsResponse.data
  };
}

export default async function ArticlesPage() {
  const { articles, tags } = await getArticles();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Latest Articles</h1> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => {
            const featuredImageUrl = article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/api/placeholder/800/400";
            const articleTags = tags.filter((tag) => article.tags.includes(tag.id));
            
            return (
              <Link href={`/blog/${article.slug}`} key={article.id}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={featuredImageUrl}
                    alt={article.title.rendered}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </div>
                    
                    <h2 
                      className="text-xl font-semibold mb-3 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                    />
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {articleTags.slice(0, 3).map((tag) => (
                        <Badge key={tag.id} variant="secondary">
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                    
                    <div 
                      className="text-gray-600 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: article.content.rendered.replace(/<[^>]*>/g, '')
                      }}
                    />
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}