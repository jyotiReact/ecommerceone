/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co", "lh3.googleusercontent.com", "res.cloudinary.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
