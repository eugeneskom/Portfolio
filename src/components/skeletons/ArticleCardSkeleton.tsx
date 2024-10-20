import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const ArticleCardSkeleton: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="w-full h-48 skeleton-custom" /> {/* Image placeholder */}
      <CardContent className="p-6">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <div className="flex items-center">
            <Skeleton className="w-4 h-4 mr-1 rounded-full skeleton-custom" /> {/* Calendar icon placeholder */}
            <Skeleton className="w-32 h-4 skeleton-custom" /> {/* Date placeholder */}
          </div>
        </div>
        <Skeleton className="h-7 w-3/4 mb-2 skeleton-custom" /> {/* Title placeholder */}
        <Skeleton className="h-4 w-full mb-2 skeleton-custom" /> {/* Excerpt placeholder line 1 */}
        <Skeleton className="h-4 w-full mb-2 skeleton-custom" /> {/* Excerpt placeholder line 2 */}
        <Skeleton className="h-4 w-2/3 mb-4 skeleton-custom" /> {/* Excerpt placeholder line 3 */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded-full skeleton-custom" /> {/* Tag placeholder */}
          <Skeleton className="h-6 w-20 rounded-full skeleton-custom" /> {/* Tag placeholder */}
          <Skeleton className="h-6 w-14 rounded-full skeleton-custom" /> {/* Tag placeholder */}
        </div>
        <Button variant="outline" className="w-full" disabled>
          <Skeleton className="h-4 w-24 skeleton-custom" /> {/* Read More button text placeholder */}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArticleCardSkeleton;