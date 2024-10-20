import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectCardSkeleton: React.FC = () => (
  <Card className="overflow-hidden">
    <Skeleton className="w-full h-48 skeleton-custom" />
    <CardContent className="p-4">
      <Skeleton className="h-6 w-3/4 mb-2 skeleton-custom" />
      <Skeleton className="h-4 w-full mb-4 skeleton-custom" />
      <Skeleton className="h-4 w-full mb-2 skeleton-custom" />
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton className="h-6 w-16 skeleton-custom" />
        <Skeleton className="h-6 w-16 skeleton-custom" />
        <Skeleton className="h-6 w-16 skeleton-custom" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-9 w-24 skeleton-custom" />
        <Skeleton className="h-9 w-24 skeleton-custom" />
      </div>
    </CardContent>
  </Card>
);

export default ProjectCardSkeleton;