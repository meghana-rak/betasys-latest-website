import React, {useState} from 'react';
import BlogCard from './BlogCard';
import Blogimg1 from "../../assests/blogpage/Blogimg1.png";
import Blogimg2 from "../../assests/blogpage/Blogimg2.png"
import Blogimg3 from "../../assests/blogpage/Blogimg3.png"

// import Blogimg2 from '../assests/Blogimg2.png';
// import Blogimg3 from '../assests/Blogimg3.png';

const BlogGrid = () => {

  const blogPosts = [
    {
      id: '1',
      date: '20/07/2024',
      image: Blogimg1,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    },
    {
      id: '2',
      date: '18/07/2024',
      image: Blogimg2,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    },
    {
      id: '3',
      date: '15/07/2024',
      image: Blogimg3,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    },
    {
      id: '4',
      date: '12/07/2024',
      image: Blogimg1,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    },
    {
      date: '10/07/2024',
      image: Blogimg2,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    },
    {
      id: '5',
      date: '08/07/2024',
      image: Blogimg3,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    },
    {
      date: '05/07/2024',
      image: Blogimg1,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    },
    {
      id: '6',
      date: '03/07/2024',
      image: Blogimg2,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    },
    {
      id: '7',
      date: '01/07/2024',
      image: Blogimg3,
      category: 'Healthcare',
      title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
    }
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex-1">
      <div className="mb-6">
        <h2 className="md:text-[38px] text-[28px] leading-tight font-bold  font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">Blog</h2>
      </div>
      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1"> */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 max-w-[1024px]   ">
        {currentPosts?.map((post) => (
          <BlogCard
            key={post.id}
            date={post.date}
            image={post.image}
            category={post.category}
            title={post.title}
          />
        ))}
      </div>
       <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-md border 
              ${
                currentPage === i + 1
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-100 hover:bg-emerald-100"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
