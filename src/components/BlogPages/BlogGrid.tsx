import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Blogimg1 from "../../assests/blogpage/Blogimg1.png";
import Blogimg2 from "../../assests/blogpage/Blogimg2.png"
import Blogimg3 from "../../assests/blogpage/Blogimg3.png";
import { fetchBlogPosts,  } from '../../store/blogThunk.js';
import { useDispatch, useSelector } from 'react-redux';
// import Blogimg2 from '../assests/Blogimg2.png';
// import Blogimg3 from '../assests/Blogimg3.png';

const BlogGrid = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.blog);

  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);


  useEffect(() => {
    dispatch(fetchBlogPosts({ search: '', limit: postsPerPage, page: currentPage, category: '' }))
  }, [dispatch]);

  useEffect(() => {
    if (posts && posts.data) {
      setBlogPosts(posts?.data);
    } else {
      setBlogPosts([]);
    }
  }, [posts]);

  // const blogPosts = [
  //   {
  //     id: '1',
  //     date: '20/07/2024',
  //     image: Blogimg1,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   },
  //   {
  //     id: '2',
  //     date: '18/07/2024',
  //     image: Blogimg2,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   },
  //   {
  //     id: '3',
  //     date: '15/07/2024',
  //     image: Blogimg3,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   },
  //   {
  //     id: '4',
  //     date: '12/07/2024',
  //     image: Blogimg1,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   },
  //   {
  //     date: '10/07/2024',
  //     image: Blogimg2,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   },
  //   {
  //     id: '5',
  //     date: '08/07/2024',
  //     image: Blogimg3,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   },
  //   {
  //     date: '05/07/2024',
  //     image: Blogimg1,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   },
  //   {
  //     id: '6',
  //     date: '03/07/2024',
  //     image: Blogimg2,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   },
  //   {
  //     id: '7',
  //     date: '01/07/2024',
  //     image: Blogimg3,
  //     category: 'Healthcare',
  //     title: 'How Artificial Intelligence is Shaping the Future of Patient Care'
  //   }
  // ];


  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts?.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="grid-cols-10">
      <div className="mb-6">
        <h2 className="md:text-[38px] text-[28px] leading-tight font-bold  font-helvetica font-regular text-[#042337] mt-[4px] mb-[1px]">Blog</h2>
      </div>
      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1"> */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        {status === 'loading' ? (
          <div className="col-span-full flex justify-center items-center py-10">
            <span className="text-lg text-gray-500">Loading...</span>
          </div>
        ) : currentPosts.length === 0 ? (
          <div className="col-span-full flex justify-center items-center py-10">
            <span className="text-lg text-gray-500">No blogs found.</span>
          </div>
        ) : (
          currentPosts.map((post) => (
            <BlogCard
              key={post?._id}
              author={post?.author}
              date={post?.createdAt}
              image={post?.image?.path}
              category={post?.category?.name}
              title={post?.title}
            />
          ))
        )}
      </div>
      <div className="flex justify-center my-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-1 rounded-md border font-semibold text-[16px] md:text-[20px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
              ${currentPage === i + 1
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
