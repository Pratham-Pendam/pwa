/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

// Initialize the PWA plugin
const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4-inventorymanagement.s3.ap-south-1.amazonaws.com", // Allow images from this hostname
        port: "",
        pathname: "/**", // Match any path for images
      },
    ],
  },
};

// Export the combined config with PWA support
export default withPWA(nextConfig);
