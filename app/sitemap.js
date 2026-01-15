// app/sitemap.js
export default async function sitemap() {
  const baseUrl = "https://manspackaging.com";

  // 1. Fetch your product data from your API or MongoDB
  const response = await fetch("https://mans-server.vercel.app/products");
  const products = await response.data || [];

  // 2. Map products to the Google Sitemap format including images
  const productEntries = products.map((product) => ({
    url: `${baseUrl}/products/${product._id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    // This is the "Image Sitemap" part Google loves
    images: [product.imageUrl], 
  }));

  // 3. Add your static pages (Home, Contact, etc.)
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...productEntries,
  ];
}