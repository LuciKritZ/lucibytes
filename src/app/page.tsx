import { Navbar } from '@/components/navbar.component';
import LatestPosts from './(home)/latest-posts.home';
import Container from '@/components/container.component';
import TopCategories from './(home)/top-categories.home';
import PopularPosts from './(home)/popular-posts.home';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <main className='flex flex-col items-start justify-evenly mt-16 md:flex-row'>
        <div>
          <LatestPosts />
        </div>
        <div className='h-screen'>
          <div>
            <h1 className='font-bold mb-4'>TOP CATEGORIES</h1>
            <TopCategories />
          </div>

          <div className='mt-10 sticky top-0'>
            <h1 className='font-bold mb-4'>POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
