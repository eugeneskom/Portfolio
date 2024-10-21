// app/BlogDataFetcher.tsx
import BlogArticles from '@/components/BlogArticles';

async function fetchArticles() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_embed`, { 
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  if (!res.ok) throw new Error('Failed to fetch articles');
  return res.json();
}

async function fetchTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags`, { 
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  if (!res.ok) throw new Error('Failed to fetch tags');
  return res.json();
}

export default async function BlogDataFetcher() {
  const [articles, tags] = await Promise.all([fetchArticles(), fetchTags()]);
  
  return <BlogArticles articles={articles} tags={tags} />;
}