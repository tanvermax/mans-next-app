/* eslint-disable @next/next/no-html-link-for-pages */
import dbConnect from "../../lib/mongodb";
import News from "../../models/News";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  await dbConnect();
  const news = await News.findOne({ slug: params.slug });
  
  if (!news) {
    return {
      title: "Article Not Found | MANS Pack",
    };
  }

  return {
    title: `${news.headline} | MANS Pack`,
    description: news.description,
    openGraph: {
      title: news.headline,
      description: news.description,
      images: [news.photoUrl],
    },
  };
}

export default async function NewsArticle({ params }) {
  await dbConnect();
  const news = await News.findOne({ slug: params.slug });


  console.log("data news",news)

  if (!news) {
    notFound();
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={news.photoUrl}
            alt={news.headline}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {news.headline}
            </h1>
            
            <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
              <span>By MANS Pack C.</span>
              <time dateTime={news.createdAt}>
                {formatDate(news.createdAt ? news.createdAt : 2 )}
              </time>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-4">{news.description}</p>
              {/* Add more content here if you have a full article content field */}
            </div>
          </div>
        </article>
        
        <div className="mt-8 text-center">

          <a href="/NewsPart"className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            ← Back to all news
          </a>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  await dbConnect();
  const newsList = await News.find({});
  
  return newsList.map((news) => ({
    slug: news.slug,
  }));
}