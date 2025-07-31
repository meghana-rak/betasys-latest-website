import React from 'react';
import HeroSection from '../components/BlogPages/HeroSection';
import Sidebar from '../components/BlogPages/Sidebar';
import BlogGrid from '../components/BlogPages/BlogGrid';
import Banner from '../components/Layout/Banner';

function BlogPage() {
  const label = "Blog"
  return (
    <div>
     <div className="mb-6 ">
  {/* <HeroSection /> */}
  <Banner label={label}/>
</div>

      <main className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar: shown first on mobile, second on desktop */}
          <div className="order-1 ">
            <Sidebar />
          </div>

          {/* BlogGrid: shown second on mobile, first on desktop */}
          <div className="order-2 ">
            <BlogGrid />
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogPage;
