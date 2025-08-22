import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useParallax';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts } from '../../store/blogThunk.js';

const Insights = () => {
  const { isVisible, setElement } = useIntersectionObserver();
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.blog);


  const apiKey = import.meta.env.VITE_AWS_IMG_URL;
  const [postsData, setPostsData] = useState([]);
  console.log(postsData, "postsData");

  useEffect(() => {
    dispatch(fetchBlogPosts({
      search: '',
      limit: 6,
      page: 1,
      category: '' // Pass empty if no category
    }));
  }, []);

  useEffect(() => {
    if (posts) {
      setPostsData(posts?.data); // Get the first 3 posts
    }
  }, [posts]);


  if (status === 'loading') {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <section
      ref={setElement}
      className={`py-10 md:py-20  transition-all duration-1000 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-16'
        }`}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex lg:flex-row flex-col justify-between items-start  transition-all duration-1000 delay-200 `}>
          <div>
            <p className="text-[#00A148] font-medium text-[18px] uppercase tracking-wide font-poppins">Insights & Resources</p>
            <h2 className="md:text-[38px] font-bold  text-[28px] font-helvetica leading-tight font-regular text-[#042337] mt-[4px] mb-[1px]">
              AI Business Insights
            </h2>
            <p className="max-w-3xl text-gray-700 font-poppins  text-[18px] md:text-[22px]  mb-8">
              Explore expert content, practical guides, and real-world use cases to unlock AI’s potential for your business.        </p>
          </div>
          <Link to='/blog' className='mb-2 lg:mb-0'>
            <button className="bg-[#00A148]  hover:bg-green-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg font-regular transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00A148]/25 relative overflow-hidden">
              <span className="relative z-10 font-poppins text-[16px] md:text-[20px] ">See All Blog</span>
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2 Featured Articles */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 font-poppins">
            {postsData?.slice(0, 2).map((post) => (
               <Link to={`/blogdetails/${post.category?._id}/${post?._id}`} className="group">
              <div
                key={post._id}
                className="transform transition-all duration-1000"
              >
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-2">
                    <div className='relative h-48 '>
                    <img
                      src={`${apiKey}${post?.image?.path}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00A148] text-white px-3 py-1 rounded-full text-[16px] md:text-[18px] font-semibold">
                        {post.category?.name || "Uncategorized"}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-gray-500 pt-2 text-[16px] font-poppins font-medium">
                    {new Date(post?.createdAt)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "/")}
                  </div>
                  <h3 className="text-[22px] line-clamp-1 md:text-[24px] xl:text-[28px] leading-tight font-bold text-gray-700 my-2 group-hover:text-[#00A148] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 font-poppins text-[16px] md:text-[18px] leading-tight">
                    {post.description || "No description available."}
                  </p>
                </div>
              </div>
              </Link>
            ))}
          </div>

          {/* Right Column - 3 Articles */}
          <div className="lg:col-span-1 space-y-6">
            {postsData?.slice(2, 5).map((post) => (
              <div
                key={post._id}
                className="group cursor-pointer transform transition-all duration-1000"
              >
                <div className="flex flex-col md:flex-row gap-4 justify-between items-between font-poppins">
                  <div className="relative overflow-hidden rounded-xl w-full md:w-2/6 md:h-32 h-48">
                    <img
                      src={`${apiKey}${post?.image?.path}`}
                      alt={post.title}
                      className="w-full h-full  object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="text-gray-500 text-[16px] font-poppins font-medium">
                        {new Date(post?.createdAt)
                          .toLocaleDateString("en-GB")
                          .replace(/\//g, "/")}
                      </div>
                      <span className="bg-[#00A148] text-white px-2 py-1 rounded-full text-[16px] font-semibold">
                        {post.category?.name || "Uncategorized"}
                      </span>
                    </div>
                    <h4 className="font-semibold text-[22px] md:text-[24px] xl:text-[28px] text-gray-800 group-hover:text-[#00A148] transition-colors duration-300 leading-tight">
                      {post.title}
                    </h4>
                    {/* <p className="text-gray-700 font-poppins text-[16px] md:text-[18px] leading-tight mt-1">
                      {post.description || "No description available."}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>


  );
};

export default Insights;