/** @type {import('next').NextConfig} */
const nextConfig = {
    staticPageGenerationTimeout: 120,
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
};

export default nextConfig;