import React from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";

interface WordPressArticle {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
  slug: string;
}

interface Tag {
  id: number;
  name: string;
}

interface BlogPostProps {
  article: WordPressArticle;
  tags: Tag[];
}

export async function generateStaticParams() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts = response.data;

  return posts.map((post: WordPressArticle) => ({
    slug: post.slug,
  }));
}

async function getBlogPost(slug: string): Promise<BlogPostProps> {
  const [postResponse, tagsResponse] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${slug}&_embed`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tags`)
  ]);

  const article = postResponse.data[0];
  const tags = tagsResponse.data;

  return { article, tags };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  console.log("Params:", params);
  const { article, tags } = await getBlogPost(params.slug);

  if (!article) {
    return <div className="container mx-auto px-4 py-16">Post not found</div>;
  }

  const featuredImageUrl = article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/api/placeholder/800/400";
  const articleTags = tags.filter((tag) => article.tags.includes(tag.id));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden max-w-3xl mx-auto">
          <Image 
            src={featuredImageUrl} 
            alt={article.title.rendered} 
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-8">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
            <div className="flex flex-wrap gap-2 mb-6">
              {articleTags.map((tag) => (
                <Badge key={tag.id} variant="secondary">
                  {tag.name}
                </Badge>
              ))}
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}