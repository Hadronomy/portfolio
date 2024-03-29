import { allPosts } from 'contentlayer/generated';
import { isAfter, parseISO } from 'date-fns';
import type { Metadata } from 'next';

import { Badge } from '@portfolio/ui/badge';

import { BlogPostCard } from './_components/blogpost-card';

export const metadata = {
  title: 'Blog',
} satisfies Metadata;

export default function BlogPage() {
  const posts = allPosts.filter(({ published }) => {
    return process.env.NODE_ENV !== 'production' || published;
  });
  const recentPosts = posts
    .sort((a, b) => {
      const dateA = parseISO(a.date);
      const dateB = parseISO(b.date);
      return isAfter(dateA, dateB) ? -1 : 1;
    })
    .slice(0, 10);
  const tags = Array.from(new Set(posts.flatMap(({ tags }) => tags)));

  return (
    <main className="mx-auto min-h-screen mt-6 grid w-full max-w-screen-xl grid-cols-[min(85ch,_100%)_1fr] grid-rows-2 gap-6 px-6">
      <section className="row-span-2 flex flex-col gap-y-6">
        <h1 className="scroll-m-20 text-xl font-extrabold capitalize tracking-tight text-accent-foreground">
          RECENTLY PUBLISHED
        </h1>
        <div className="flex flex-col gap-y-6">
          {recentPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              href={`blog${post.slug}`}
              post={post}
            />
          ))}
        </div>
      </section>
      <section className="hidden md:inline-block">
        <h1 className="mb-6 scroll-m-20 text-xl font-extrabold capitalize tracking-tight text-accent-foreground">
          TAGS
        </h1>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </section>
    </main>
  );
}
