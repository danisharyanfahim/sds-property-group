/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", port: "" },
    ],
  }, //If working with sanity
  reactStrictMode: false, //disable reactStrictMode
  eslint: {
    //Ignore eslint errors during vercel deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    //Ignore typescript errors during vercel deployment
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
