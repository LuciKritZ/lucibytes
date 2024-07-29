import type { PathLike, PathOrFileDescriptor } from 'fs';
import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type MDXDataType = {
  metadata: {
    [key: string]: any;
  };
  slug: string;
  content: string;
};

// Get all the mdx files from the dir
const getMDXFiles = (dir: PathLike) => {
  return readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
};

// Read data from those files
const readMDXFile = (filePath: PathOrFileDescriptor) => {
  let rawContent = readFileSync(filePath, 'utf-8');

  return matter(rawContent);
};

// Present the mdx data and metadata
const getMDXData = (dir: string) => {
  let mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    console.log(slug);

    return {
      metadata,
      slug,
      content,
    };
  });
};

export const getBlogPosts = () => {
  return getMDXData(
    path.join(process.cwd(), 'src', 'app', 'blog', '(contents)')
  );
};

export const getBlogBySlug = (slug: string) => {
  const mdxFiles = getMDXData(
    path.join(process.cwd(), 'src', 'app', 'blog', '(contents)')
  );

  return mdxFiles.find((mdxFile) => mdxFile.slug === slug);
};

export const formatDate = (date: string, includeRelative = false) => {
  let currentDate = new Date();

  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);
  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}m ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
};
