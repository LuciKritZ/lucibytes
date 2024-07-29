import { cn } from '@/lib/utils';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { highlight } from 'sugar-high';

type Props = {};

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with and
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    let slug = slugify(children);

    return React.createElement(
      `h${level}`,
      {
        id: slug,
      },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

function RoundedImage({ alt, ...props }: ImageProps) {
  return <Image className='rounded-lg' {...props} alt={alt} />;
}

function CustomLink(props: React.ComponentProps<'a'>) {
  let href = props.href;

  if (!href) {
    return <a href='' target='_blank' rel='noopener noreferrer' {...props} />;
  }

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a href='' target='_blank' rel='noopener noreferrer' {...props} />;
}

function Code({ children, ...props }: React.ComponentProps<'code'>) {
  let codeHTML = highlight((children ?? '') as string);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function BlockQuote({
  className,
  ...props
}: React.ComponentProps<'blockquote'>) {
  return (
    <blockquote
      className={cn(
        'bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote',
        className
      )}
      {...props}
    />
  );
}

function Table({ data }: any) {
  let headers = data.headers.map((header: any, index: number) => (
    <th key={index}>{header}</th>
  ));

  let rows = data.rows.map((cell: any, cellIndex: number) => (
    <td key={cellIndex}>{cell}</td>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

let components: MDXRemoteProps['components'] = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  blockquote: BlockQuote,
  Table,
};

const CustomMDX = ({
  components: propComponents,
  ...props
}: MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(propComponents || {}) }}
    />
  );
};

export default CustomMDX;
