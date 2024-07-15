/** @type {import('next').NextConfig} */
import pwa from "@ducanh2912/next-pwa"

const withPWA = pwa({
    dest: "public",
    reloadOnOnline: true,
    aggressiveFrontEndNavCaching: true,
    cacheOnFrontEndNav: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    }
})

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

export default withPWA(nextConfig);