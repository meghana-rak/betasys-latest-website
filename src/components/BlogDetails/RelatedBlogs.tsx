import React from "react";
import blogdetail1 from "../../assests/blogDetails/blogDetail1.jpg";
import blogdetail2 from "../../assests/blogDetails/blogDetail2.jpg";
import blogdetail3 from "../../assests/blogDetails/blogDetail3.jpg";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
}

const RelatedBlogs: React.FC = () => {
  const relatedPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Healthcare Transforming Patient Care",
      date: "20/06/2025",
      image: blogdetail1,
      category: "Healthcare",
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare Transforming Patient Care",
      date: "20/06/2025",
      image: blogdetail2,
      category: "Healthcare",
    },
    {
      id: 3,
      title: "The Future of AI in Healthcare Transforming Patient Care",
      date: "20/06/2025",
      image: blogdetail3,
      category: "Healthcare",
    },
  ];

  return (
    <div className="">
      <h3 className="md:text-[28px] text-[24px] leading-tight font-bold  font-helvetica font-regular text-[#042337] mb-4">Related Blog</h3>
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <Link to={`/blogdetails/${post.id}`} key={post.id} className="group">
            <div key={post.id} className="group cursor-pointer mb-2">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[300px] h-32 rounded-lg object-cover"
                />

                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-[16px]  text-[#005F2B] bg-[#C4E1D1] rounded-full">
                    20/06/2025
                  </span>
                </div>
              </div>
              <span className="inline-block text-[#00A148] mb-1 text-[16px] md:text-[18px] font-poppins">
                {post.category}
              </span>
              <h4 className=" text-[16px] font-poppins md:text-[18px]  space-x-0 text-gray-700  line-clamp-2">
                {post.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
