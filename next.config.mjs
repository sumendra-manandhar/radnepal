/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/radnepal",
  output: "export",
  reactStrictMode: true,

  images: {
    domains: [
      "assets.aceternity.com",
      "images.unsplash.com",
      "api.microlink.io",
    ],
  },
};

export default nextConfig;
