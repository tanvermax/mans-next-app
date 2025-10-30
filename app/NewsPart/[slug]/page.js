// app/NewsPart/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";
import axios from 'axios'; // Import axios
import Link from "next/link";

export async function generateMetadata({ params }) {
  try {
    const response = await axios.get(`https://mans-server.vercel.app/newspost/${params.slug}`);
    const news = response.data;

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
        type: 'article',
        publishedTime: news.createdAt,
      },
      twitter: {
        card: 'summary_large_image',
        title: news.headline,
        description: news.description,
        images: [news.photoUrl],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Article Not Found | MANS Pack",
    };
  }
}

export default async function NewsArticle({ params }) {
  let news = null;
  
  try {
    const response = await axios.get(`https://mans-server.vercel.app/newspost/${params.slug}`);
    news = response.data;
  } catch (error) {
    console.error("Failed to fetch news article:", error);
  }

  if (!news) {
    notFound();
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </li>
            <li className="flex items-center">
              <Link href="/NewsPart" className="hover:text-indigo-600 transition-colors">News</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </li>
            <li className="flex items-center">
              <span className="text-gray-900">{news.headline.length > 30 ? `${news.headline.substring(0, 30)}...` : news.headline}</span>
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Article Header with Image */}
          <div className="relative">
            <div className="h-64 md:h-96 w-full relative">
              <Image
                src={news.photoUrl}
                alt={news.headline}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-2">
                <span className="bg-indigo-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                  {news.category || "News"}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-md">
                {news.headline}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm">
                <div className="flex items-center mr-6 mb-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-indigo-800 font-medium text-sm">MP</span>
                  </div>
                  <span>MANS Pack C.</span>
                </div>
                
                <div className="flex items-center mr-6 mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <time dateTime={news.createdAt || new Date()}>
                    {formatDate(news.createdAt)}
                  </time>
                </div>
                
                <div className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <span>{getReadingTime(news.description)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-7 mb-6 text-gray-800">
                {news.description}
              </p>
              
              {/* If you had full content, you would render it here */}
              {/* <div dangerouslySetInnerHTML={{ __html: news.content }} /> */}
            </div>
            
            {/* Share buttons */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(news.headline)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(news.headline)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-blue-700 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
        
        {/* Back button */}
        <div className="mt-8 text-center">
          <Link href="/NewsPart" className="inline-flex
           items-center text-indigo-600
            hover:text-indigo-800 font-medium
             transition-colors group">
            <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to all news
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const response = await axios.get("https://mans-server.vercel.app/newspost");
    const newsList = response.data;
    
    return newsList.map((news) => ({
      slug: news.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}