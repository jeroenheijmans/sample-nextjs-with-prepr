/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "open-source-samples.stream.prepr.io",
      },
    ],
  },
};

export default nextConfig;
