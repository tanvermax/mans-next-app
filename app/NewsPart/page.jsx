// app/NewsPart/page.js
import Link from "next/link";
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Latest News & Blogs
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <article key={news._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/NewsPart/${news.slug}`}>
                <img
                  src={news.photoUrl}
                  alt={news.headline}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                    {news.headline}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>By MANS Pack C.</span>
                    <time dateTime={news.createdAt}>
                      {formatDate(news.createdAt)}
                    </time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {newsList.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No news articles found.</p>
          </div>
        )}
      </div>
    </div>
  );
}