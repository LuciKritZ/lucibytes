import { Icons } from '@/components/ui/icons.ui';
import { POPULAR_POSTS } from '@/constants';
import React from 'react';

type Props = {};

const PopularPosts = (props: Props) => {
  return (
    <ul className='overflow-auto'>
      {POPULAR_POSTS.map((post) => (
        <li
          className='flex items-center gap-2 cursor-pointer py-2 group/popular-post'
          key={post.title}
        >
          <Icons.arrowRight className='h-6 w-6 group-hover/popular-post:translate-x-1 transition-all' />
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default PopularPosts;
