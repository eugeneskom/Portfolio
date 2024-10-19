import React from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Facebook, Linkedin, Send, Share2, Twitter } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

interface RankMathSEO {
  title: string;
  description: string;
  focuskw: string;
  robots: {
    index: string;
    follow: string;
  };
  og_title: string;
  og_description: string;
  og_image: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
}

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
  rank_math_seo: RankMathSEO;
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
  const [postResponse, tagsResponse] = await Promise.all([axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${slug}&_embed`), axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tags`)]);

  const article = postResponse.data[0];
  const tags = tagsResponse.data;

  console.log("Full article data:", article);
  console.log("SEO data:", article.rank_math_seo);

  return { article, tags };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { article } = await getBlogPost(params.slug);
  const seo = article.rank_math_seo;

  if (!seo) {
    return {
      title: article.title.rendered,
    };
  }

  return {
    title: seo.title || article.title.rendered,
    description: seo.description,
    keywords: seo.focuskw,
    // robots: seo.robots,
    openGraph: {
      title: seo.og_title,
      description: seo.og_description,
      images: [{ url: seo.og_image }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitter_title,
      description: seo.twitter_description,
      images: [seo.twitter_image],
    },
  };
}

const SocialShareButton: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <Button asChild variant="outline" size="sm" className="flex items-center gap-2">
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
      {label}
    </a>
  </Button>
);

export default async function BlogPost({ params }: { params: { slug: string } }) {
  console.log("Params:", params);
  const { article, tags } = await getBlogPost(params.slug);

  if (!article) {
    return <div className="container mx-auto px-4 py-16">Post not found</div>;
  }

  const featuredImageUrl = article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/api/placeholder/800/400";
  const articleTags = tags.filter((tag) => article.tags.includes(tag.id));
  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`;
  const shareTitle = encodeURIComponent(article.title.rendered);
  // const shareText = encodeURIComponent(article.rank_math_seo?.description || "");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden max-w-5xl mx-auto">
          <Image src={featuredImageUrl} alt={article.title.rendered} width={1200} height={600} className="w-full h-64 object-cover" />
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
            {article.rank_math_seo?.focuskw && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Focus Keyword:</h2>
                <p>{article.rank_math_seo.focuskw}</p>
              </div>
            )}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
            {/* Social Sharing Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share this post
              </h3>
              <div className="flex flex-wrap gap-2">
                <SocialShareButton href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
                <SocialShareButton href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} icon={<Facebook className="w-4 h-4" />} label="Facebook" />
                <SocialShareButton href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} icon={<Twitter className="w-4 h-4" />} label="Twitter" />
                <SocialShareButton href={`https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`} icon={<Send className="w-4 h-4" />} label="Telegram" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
