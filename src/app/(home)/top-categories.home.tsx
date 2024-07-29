import { Button } from '@/components/ui/button.ui';
import { POSTS } from '@/constants';
import Link from 'next/link';
import React from 'react';

type Props = {};

const TopCategories = (props: Props) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2'>
      {POSTS.map((post) => (
        <Button
          asChild
          key={post.title}
          variant='secondary'
          className='hover:scale-105 transition-all'
        >
          <Link href={post.href}>{post.title}</Link>
        </Button>
      ))}
    </div>
  );
};

export default TopCategories;
