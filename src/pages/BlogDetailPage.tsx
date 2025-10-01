import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogHero from "../components/BlogDetails/BlogHero";
import BlogMain from "../components/BlogDetails/BlogMain";
import RelatedBlogs from "../components/BlogDetails/RelatedBlogs";
import Sidebar from "../components/BlogPages/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPostById, fetchRelatedPosts } from "../store/blogThunk.js";

const BlogDetails: React.FC = () => {
  const { category, id, slugUrl } = useParams<{
    id: string;
    category: string;
  }>();
  const label = "Blog Details";
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { post, relatedPosts } = useSelector((state) => state.blog);
  const [blogPost, setBlogPost] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  console.log(blogPost, "blogPost");

  useEffect(() => {
    if (slugUrl) {
      dispatch(fetchBlogPostById(slugUrl));
    }
    if (category && id) {
      dispatch(fetchRelatedPosts({ category, id }));
    }
  }, [id, slugUrl, category, dispatch]);

  useEffect(() => {
    if (post && post.data) {
      setBlogPost(post.data);
    } else {
      setBlogPost(null);
    }

    if (relatedPosts && relatedPosts?.data) {
      setRelatedBlogs(relatedPosts?.data);
    } else {
      setRelatedBlogs([]);
    }
  }, [post, relatedPosts]);

  return (
    <>
      <Helmet>
        <title>{blogPost?.blog?.metaTitle}</title>
        <meta name="description" content={blogPost?.blog?.metaDescription} />
        <meta
          name="keywords"
          content={`${blogPost?.blog?.primaryKeyword}, ${blogPost?.blog?.secondaryKeyword}`}
        />
        <meta property="og:title" content={blogPost?.blog?.metaTitle} />
        <meta
          property="og:description"
          content={blogPost?.blog?.metaDescription}
        />
        <meta
          property="og:image"
          content={`https://betasys.ai/${blogPost?.blog?.image?.path}`}
        />
        <meta
          property="og:url"
          content={`https://betasys.ai/${blogPost?.blog?.slugUrl}`}
        />
        <meta property="og:type" content="article" />
        <link
          rel="canonical"
          href={`https://betasys.ai/${blogPost?.blog?.slugUrl}`}
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <BlogHero label={label} />

        <main className="p-4 mx-auto md:text-justify md:py-14 container sm:px-6 lg:px-8">
          {/* ✅ Mobile Sidebar (Hamburger) */}
          {/* <div className="block lg:hidden">
          <Sidebar onCategorySelect={setSelectedCategory} />
        </div> */}

          {/* ✅ Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
            {/* Left Sidebar - visible only on large screens */}
            {/* <aside className="hidden lg:block lg:col-span-3 ">
            <Sidebar onCategorySelect={setSelectedCategory} />
          </aside> */}

            {/* Blog Main Content */}
            <div className="col-span-1 lg:col-span-8 ">
              <BlogMain
                blogPost={blogPost?.blog}
                categoryId={selectedCategory}
              />
            </div>

            {/* Related Blogs */}
            <aside className="col-span-1 lg:col-span-4">
              <div className="sticky top-4 md:top-6 lg:top-8">
                <RelatedBlogs relatedBlogs={blogPost?.relatedBlogs} />
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogDetails;
