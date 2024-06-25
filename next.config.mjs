/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
    MONGO_URI: process.env.NEXT_PUBLIC_MONGO_URI,
  },
};

export default nextConfig;
