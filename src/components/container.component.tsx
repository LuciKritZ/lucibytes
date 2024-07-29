import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: React.ComponentProps<'div'>['className'];
  children: React.ReactNode;
};

const Container = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
