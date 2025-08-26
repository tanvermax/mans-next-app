// app/NewsPart/page.js
import Link from "next/link";
import Image from "next/image";
import dbConnect from "../lib/mongodb";
import News from "../models/News";

export const metadata = {
  title: "News & Blogs | MANS Pack",
  description: "Stay updated with the latest news and blogs from MANS Pack",
};

export default async function NewsPage() {
  await dbConnect();
  const newsList = await News.find({}).sort({ createdAt: -1 });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to estimate reading time
  const getReadingTime = (text) => {
    if (!text) return '2 min read';
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Blogs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, trends, and stories from our team of experts at MANS Pack
          </p>
        </div>

        {/* Featured Article (first article gets special treatment) */}
        {newsList.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <Link href={`/NewsPart/${newsList[0].slug}`} className="block md:flex">
                <div className="md:w-1/2 relative h-80 md:h-auto">
                  <Image
                    src={newsList[0].photoUrl}
                    alt={newsList[0].headline}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3">
                      {newsList[0].category || "News"}
                    </span>
                    <time dateTime={newsList[0].createdAt}>
                      {formatDate(newsList[0].createdAt)}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{getReadingTime(newsList[0].description)}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition-colors">
                    {newsList[0].headline}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {newsList[0].description}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-indigo-800 font-medium">MP</span>
                    </div>
                    <span className="text-sm text-gray-700">MANS Pack C.</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.slice(1).map((news) => (
            <article key={news._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <Link href={`/NewsPart/${news.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.photoUrl}
                    alt={news.headline}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {news.category || "News"}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <time dateTime={news.createdAt}>
                      {formatDate(news.createdAt)}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{getReadingTime(news.description)}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-indigo-600 transition-colors line-clamp-2">
                    {news.headline}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-indigo-800 font-medium text-xs">MP</span>
                      </div>
                      <span className="text-sm text-gray-700">MANS Pack C.</span>
                    </div>
                    <span className="text-indigo-600 text-sm font-medium flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {newsList.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles yet</h3>
            <p className="text-gray-500">Check back later for the latest news and updates.</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}