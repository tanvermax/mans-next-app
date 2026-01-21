/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mans-server.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**',
      },
    ],
    domains: ["i.ibb.co.com",'lh3.googleusercontent.com',"images.remotePatterns","i.ibb.co",'manspackaging.com','pagedone.io'], // 👈 add your domain here
  },
};

export default nextConfig;
