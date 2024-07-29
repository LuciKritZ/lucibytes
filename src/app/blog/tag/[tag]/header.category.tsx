import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return <div className='bg-gray-100 p-8 dark:bg-gray-800'>{children}</div>;
};

export default Header;
