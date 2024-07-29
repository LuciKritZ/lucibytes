import React from 'react';
import { formatDate, getBlogBySlug } from '../blog.utils';
import { notFound } from 'next/navigation';
import Header from '../tag/[tag]/header.category';
import Container from '@/components/container.component';
import { Breadcrumbs } from '@/components/breadcrumbs.component';
import CustomMDX from '@/components/custom-mdx.component';

type Props = {
  params: {
    slug: string;
    tag?: string;
  };
};

const Page = ({ params: { slug, tag = '' } }: Props) => {
  let post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <Breadcrumbs slug={slug} tag={tag} />
          <h1 className='title font-semibold text-2xl tracking-tighter mt-4'>
            {post.metadata.title}
          </h1>

          <div className='flex justify-between items-center mt-2 mb-4 text-sm'>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-2'>
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className='prose'>
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
};

export default Page;
