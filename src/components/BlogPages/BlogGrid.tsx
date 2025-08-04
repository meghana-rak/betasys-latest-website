import React from 'react';
import BlogCard from './BlogCard';
import Blogimg1 from "../../assests/blogpage/Blogimg1.png";
import Blogimg2 from "../../assests/blogpage/Blogimg2.png"
import Blogimg3 from "../../assests/blogpage/Blogimg3.png"

// import Blogimg2 from '../assests/Blogimg2.png';
// import Blogimg3 from '../assests/Blogimg3.png';

const BlogGrid = () => {
  const blogPosts = [
    {
      date: '20/07/2024',
      image: Blogimg1,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    },
    {
      date: '18/07/2024',
      image: Blogimg2,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    },
    {
      date: '15/07/2024',
      image: Blogimg3,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    },
    {
      date: '12/07/2024',
      image: Blogimg1,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    },
    {
      date: '10/07/2024',
      image: Blogimg2,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    },
    {
      date: '08/07/2024',
      image: Blogimg3,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    },
    {
      date: '05/07/2024',
      image: Blogimg1,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    },
    {
      date: '03/07/2024',
      image: Blogimg2,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    },
    {
      date: '01/07/2024',
      image: Blogimg3,
      category: 'Healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care'
    }
  ];

  return (
    <div className="flex-1">
      <div className="mb-6">
          <h2 className="text-lg font-helvetica font-bold text-black my-1">Blog</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            date={post.date}
            image={post.image}
            category={post.category}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
