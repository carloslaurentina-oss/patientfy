/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Allow images from the Payload CMS instance
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
