/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

module.exports = {
  images: {
    unoptimized: true,  // Ensures images are not optimized in an unpredictable way
  },
};

