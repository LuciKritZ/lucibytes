import React, { useMemo } from 'react';
import { formatDate, getBlogPosts } from '../blog/blog.utils';
import Link from 'next/link';
import { sortPosts } from '@/utils/sort-posts';

const LatestPosts = () => {
  let latestPosts = getBlogPosts();

  const sortedPosts = useMemo(() => sortPosts(latestPosts), [latestPosts]);

  return (
    <>
      <h1 className='inline-block font-heading text-4xl tracking-tight lg:text-5xl'>
        Recently Published
      </h1>
      {sortedPosts.map((post) => (
        <article className='text-wrap max-w-md my-10' key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <h3 className='font-bold py-2 leading-5 hover:text-blue-400'>
              {post.metadata.title}
            </h3>
          </Link>
          <p className='leading-8 my-5'>{post.metadata.summary}</p>
          <p className='text-sm text-muted-foreground'>
            {formatDate(post.metadata.publishedAt, true)}
          </p>
        </article>
      ))}
    </>
  );
};

export default LatestPosts;
