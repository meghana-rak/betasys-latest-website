import React from 'react';
import HeroSection from '../components/BlogPages/HeroSection';
import Sidebar from '../components/BlogPages/Sidebar';
import BlogGrid from '../components/BlogPages/BlogGrid';

function BlogPage() {
  return (
    <div>
     <div className="mb-12 ">
  <HeroSection />
</div>


      <main className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Sidebar: shown first on mobile, second on desktop */}
          <div className="order-1 w-full lg:order-1 lg:w-1/3">
            <Sidebar />
          </div>

          {/* BlogGrid: shown second on mobile, first on desktop */}
          <div className="order-2 w-full lg:order-1 lg:w-2/3">
            <BlogGrid />
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogPage;
