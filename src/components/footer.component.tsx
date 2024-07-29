import React from 'react';
import { Icons } from './ui/icons.ui';
import Link from 'next/link';
import { POSTS } from '@/constants';
import { Input } from './ui/input.ui';
import { Button } from './ui/button.ui';

const Footer = () => {
  return (
    <footer className='bg-gray-100 pt-8 dark:bg-gray-800 mt-10'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          <div className='space-y-4'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
              <Icons.logo className='h-6 w-6' />
              <span className='text-md font-semibold'>Krishal Shah</span>
            </div>

            {/* Message */}
            <p className='text-gray-500 dark:text-gray-400 text-sm'>
              Stay up to date with the latest news and insights from our blog.
            </p>

            {/* Socials */}
            <div className='flex space-x-4'>
              {/* Twitter */}
              <Link
                href='https://twitter.com/lucikritz'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter/LuciKritZ'
              >
                <Icons.x className='h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300' />
              </Link>

              {/* Github */}
              <Link
                href='https://github.com/LuciKritZ'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github/LuciKritZ'
              >
                <Icons.github className='h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300' />
              </Link>
            </div>
          </div>

          {/* Blog */}
          <div className='space-y-4'>
            <h3 className='text-md font-semibold'>Blog</h3>

            <ul className='space-y-2 text-sm'>
              {POSTS.map((post) => (
                <li
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  key={post.title}
                >
                  <Link href={post.href}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className='space-y-4'>
            <h3 className='text-md font-semibold'>Links</h3>

            <ul className='space-y-2 text-sm'>
              {/* Contact */}
              <li>
                <Link
                  target='_blank'
                  href='mailto:krishals.001@gmail.com'
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                >
                  Contact
                </Link>
              </li>

              {/* Terms of Services */}
              <li>
                <Link
                  href='/terms-of-services'
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                >
                  Terms of Services
                </Link>
              </li>

              {/* Privacy Policy */}
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Forms */}
          <div className='space-y-4'>
            <h3 className='text-md font-semibold'>Newsletter</h3>

            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Subscribe to my newsletter to stay up-to-date with the latest news
              and updates
            </p>

            <form action=''>
              <div className='flex space-x-2'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1'
                />

                <Button>Subscribe</Button>
              </div>
            </form>
          </div>
        </div>

        <div className='border-t mt-8 border-gray-200 py-4 text-center text-xs text-gray-500 dark:text-gray-400 dark:border-gray-700'>
          &copy; 2024 Krishal Shah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
