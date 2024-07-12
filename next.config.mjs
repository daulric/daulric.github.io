/** @type {import('next').NextConfig} */
const nextConfig = {
    staticPageGenerationTimeout: 120,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com"
            }
        ],
    },
};

export default nextConfig;