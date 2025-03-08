import { FiCalendar, FiUser } from "react-icons/fi";
import { blogPosts } from "../assets/assets";

const Blog = () => {
  return (
    <div className="bg-gray-100">
   
      <section className="relative bg-pink-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto mt-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover the Latest in Fashion
          </h1>
          <p className="mt-4 text-lg">
            Stay ahead with the newest trends, styling tips, and sustainable fashion insights.
          </p>
         
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Latest Fashion Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <FiUser /> <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar /> <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
