// import React from 'react';
// import BlogHero from '../components/BlogDetails/BlogHero';
// import CategoryList from '../components/BlogDetails/CategoryList';
// import BlogMain from '../components/BlogDetails/BlogMain';
// import RelatedBlogs from '../components/BlogDetails/RelatedBlogs';

// const BlogDetails: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <BlogHero />

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
//           {/* Left Sidebar - Categories */}
//           <aside className="md:col-span-4 lg:col-span-3 order-2 md:order-1">
//             <div className="sticky top-4 md:top-6 lg:top-8">
//               <CategoryList />
//             </div>
//           </aside>

//           {/* Main Content */}
//           <div className="md:col-span-8 lg:col-span-6 order-1 md:order-2">
//             <BlogMain />
//           </div>

//           {/* Right Sidebar - Related Posts */}
//           <aside className="md:col-span-12 lg:col-span-3 order-3 mt-6 md:mt-0">
//             <div className="sticky top-4 md:top-6 lg:top-8">
//               <RelatedBlogs />
//             </div>
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BlogDetails;

import React from 'react';
import BlogHero from '../components/BlogDetails/BlogHero';
import CategoryList from '../components/BlogDetails/CategoryList';
import BlogMain from '../components/BlogDetails/BlogMain';
import RelatedBlogs from '../components/BlogDetails/RelatedBlogs';
import Sidebar from '../components/BlogPages/Sidebar';

const BlogDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHero />

      <main className="px-4 mx-auto md:text-justify md:py-14 max-w-7xl sm:px-6 lg:px-8 ">
        {/* ✅ Fixed Hamburger Button for 1280px and below */}
        <div className="block xl:hidden">
          <Sidebar />
        </div>

        {/* ✅ Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 xl:gap-6">

          {/* Desktop Left Sidebar - Only visible on ≥1280px */}
          <aside className="hidden xl:block xl:col-span-3 order-2 xl:order-1">
            <div className="sticky top-4 md:top-6 lg:top-8">
              <Sidebar />
            </div>
          </aside>

          {/* Blog Main Content */}
          <div className="col-span-1 md:col-span-1 xl:col-span-6 order-1 xl:order-2">
            <BlogMain />
          </div>

          {/* Related Blogs */}
          <aside className="col-span-1 md:col-span-1 xl:col-span-3 order-2 md:order-2 mt-6 md:mt-0">
            <div className="sticky top-4 md:top-6 lg:top-8">
              <RelatedBlogs />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
