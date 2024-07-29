import { MDXDataType } from '@/app/blog/blog.utils';

export const sortPosts = (posts: MDXDataType[]): MDXDataType[] =>
  posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
