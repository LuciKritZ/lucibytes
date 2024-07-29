import { Inter } from 'next/font/google';
import Container from '@/components/container.component';
import { Navbar } from '@/components/navbar.component';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <Container>
          <Navbar />
        </Container>
      </div>
      {children}
    </>
  );
}
