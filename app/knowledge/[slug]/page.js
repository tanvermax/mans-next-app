// app/knowledge/[slug]/page.js

export async function generateMetadata({ params }) {
    let article = [];

  try {
    const response = await axios.get("https://mans-server.vercel.app/newspost");
    article = response.data;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    // You can handle the error more gracefully here, e.g., show a user-friendly message
  }
//   const article = await fetchArticleFromMongoDB(params.slug);

  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | MANS Packaging Knowledge Hub`,
    description: article.summary || article.content.substring(0, 160),
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [{ url: article.mainImage }],
      type: 'article', // Tells Google this is an educational post
      publishedTime: article.createdAt,
      authors: ['MANS Packaging Team'],
    },
    // This stops other sites from stealing your SEO credit
    alternates: {
      canonical: `https://manspackaging.com/knowledge/${params.slug}`,
    },
  };
}