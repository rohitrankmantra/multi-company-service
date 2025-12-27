/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,     // 🔥 VERY IMPORTANT
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
