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

const RelatedBlogs: React.FC = ({ relatedBlogs }) => {

  const apiKey = import.meta.env.VITE_AWS_IMG_URL;

  if (!relatedBlogs || relatedBlogs?.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div >
      <h3 className="md:text-[28px] text-[24px] leading-tight font-bold  font-helvetica font-regular text-[#042337] mb-4">Related Blog</h3>
      <div className="space-y-4  ">
        {relatedBlogs?.map((post) => (
          <Link to={`/blogdetails/${post?.category?._id}/${post?._id}`} key={post?._id} className="group">
            <div key={post.id} className="group cursor-pointer pb-3">
              <div className="relative">
                <img
                  src={`${apiKey}${post?.image?.path}`}
                  alt={post?.title}
                  className="w-full  h-48 rounded-lg object-cover"
                />

                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-[16px]  text-[#005F2B] bg-[#C4E1D1] rounded-full">
                    {new Date(post?.createdAt)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "/")}
                  </span>
                </div>
              </div>
              <span className="inline-block text-[#00A148] mb-1 text-[16px] md:text-[18px] font-poppins">
                {post?.category?.name}
              </span>
              <h4 className=" tracking-tighter  font-poppins text-[18px] md:text-[22px] space-x-0 text-gray-700  line-clamp-2">
                {post?.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
