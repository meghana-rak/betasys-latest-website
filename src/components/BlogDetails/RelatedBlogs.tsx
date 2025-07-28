import React from "react";
import blogdetail1 from "../../assests/blogDetail1.jpg";
import blogdetail2 from "../../assests/blogDetail2.jpg";
import blogdetail3 from "../../assests/blogDetail3.jpg";

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
    <div className="bg-white ">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Related Blog</h3>
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-[300px] h-32 rounded-lg object-cover"
              />

              <div className="absolute top-2 left-2">
                <span className="px-3 py-1 text-[10px] sm:text-[12px] font-semibold text-[#005F2B] bg-[#C4E1D1] rounded-full">
                  20/06/2025
                </span>
              </div>
            </div>
            <span className="inline-block text-green-500 py-1 rounded text-[13px] font-medium">
              {post.category}
            </span>
            <h4 className="text-[14px] font-medium text-gray-500 group-hover:text-green-500 transition-colors line-clamp-2">
              {post.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
