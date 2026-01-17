import axios from 'axios';

export async function generateMetadata({ params }) {
  // 1. Await params before using them (Required in newer Next.js versions)
  const slug = (await params).slug;

  try {
    // 2. Fetch all posts
    const response = await axios.get("https://mans-server.vercel.app/newspost");
    const allArticles = response.data || [];

    // 3. Find the specific article that matches the slug
    // Assuming your MongoDB object has a 'slug' field or you use 'title' as a slug
    const article = allArticles.find(item => item.slug === slug || item._id === slug);

    if (!article) {
      return {
        title: "Article Not Found | MANS Packaging",
      };
    }

    // 4. Return the specific metadata for THIS article
    return {
      title: `${article.title} | MANS Packaging Knowledge Hub`,
      description: article.description?.substring(0, 160) || "Expert packaging insights from MANS Packaging.",
      openGraph: {
        title: article.title,
        description: article.description?.substring(0, 160),
        images: [{ url: article.image }], // Make sure the key is 'image' or 'mainImage'
        type: 'article',
        publishedTime: article.createdAt,
      },
      alternates: {
        canonical: `https://manspackaging.com/knowledge/${slug}`,
      },
    };
  } catch (error) {
    console.error("Failed to fetch news for metadata:", error);
    return { title: "Knowledge Hub | MANS Packaging" };
  }
}

export default async function Page({ params }) {
    // Your page component logic here...
}