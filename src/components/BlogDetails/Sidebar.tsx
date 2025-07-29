import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
}

const Sidebar: React.FC = () => {
  const relatedPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Healthcare Transforming Patient Care",
      date: "March 15, 2024",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Health"
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare Transforming Patient Care",
      date: "March 12, 2024",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "AI"
    },
    {
      id: 3,
      title: "The Future of AI in Healthcare Transforming Patient Care",
      date: "March 10, 2024",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Health"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Blog</h3>
        <div className="space-y-4">
          {relatedPosts.map((post) => (
            <div key={post.id} className="flex space-x-3 group cursor-pointer">
              <div className="flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-xs font-medium mb-1">
                  {post.category}
                </span>
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-500 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;