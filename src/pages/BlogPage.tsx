import React from 'react';
import HeroSection from '../components/BlogPages/HeroSection';
import Sidebar from '../components/BlogPages/Sidebar';
import BlogGrid from '../components/BlogPages/BlogGrid';
import Banner from '../components/Layout/Banner';

function BlogPage() {
  const label = "Blog"
  return (
    <div>
  <div className="mb-6">
    <Banner label={label} />
  </div>

  <main className="container mx-auto px-4 sm:px-6 lg:px-8 md:pb-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Sidebar */}
      <aside className="order-1 lg:order-none lg:col-span-3">
        <Sidebar />
      </aside>

      {/* Blog Grid */}
      <section className="order-2 lg:order-2 lg:col-span-9">
        <BlogGrid />
      </section>

    </div>
  </main>
</div>

  );
}

export default BlogPage;
