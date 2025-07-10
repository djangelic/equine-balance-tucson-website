
import React from 'react';
import { Calendar, ArrowRight, Book } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Your Horse's Body Language During Treatment",
      excerpt: "Learn to recognize the subtle signs that indicate your horse is responding positively to osteopathic care.",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Simple Stretches to Support Your Horse's Mobility",
      excerpt: "Easy-to-follow stretching exercises you can do with your horse between professional sessions.",
      date: "March 8, 2025", 
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "The Benefits of Regular Equine Osteopathy",
      excerpt: "Why consistent bodywork can be a game-changer for your horse's performance and comfort.",
      date: "March 1, 2025",
      readTime: "6 min read", 
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Horse Care Insights
          </h2>
          <div className="w-24 h-1 bg-blue mx-auto mb-8"></div>
          <p className="text-lg text-earth max-w-3xl mx-auto">
            Practical tips, insights, and guidance to help you better understand and care for your horse's well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-earth mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-navy mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-earth mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-blue hover:text-blue-dark font-medium transition-colors duration-200">
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <Book className="text-blue mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">
              Stay Informed
            </h3>
            <p className="text-earth mb-6">
              Subscribe to receive the latest horse care tips, treatment insights, and wellness advice 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
              />
              <button className="bg-blue hover:bg-blue-dark text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
