import React, { useMemo } from 'react';
import { getBlogPosts } from '../../blog.utils';
import { notFound } from 'next/navigation';
import { sortPosts } from '@/utils/sort-posts';
import Link from 'next/link';
import Container from '@/components/container.component';
import CardCategory from '@/components/card-category.component';
import Header from './header.category';

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    tags: post.metadata.tags,
  }));
}

const Page = ({ params }: Props) => {
  let posts = getBlogPosts().filter((post) =>
    post.metadata.categories.includes(params.tag)
  );

  const sortedPosts = useMemo(() => sortPosts(posts), [posts]);

  if (!posts.length) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <h1 className='title font-semibold text-2xl tracking-wider mt-4 uppercase'>
            {params.tag}
          </h1>
        </Container>
      </Header>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          {sortedPosts.map((post) => (
            <Link key={post.metadata.title} href={`/blog/${post.slug}`}>
              <CardCategory
                title={post.metadata.title}
                summary={post.metadata.summary}
                date={post.metadata.publishedAt}
              />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Page;
