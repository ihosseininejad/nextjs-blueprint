const apiUrl = new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: apiUrl.protocol.slice(0, -1),
                hostname: apiUrl.hostname,
                port: apiUrl.port,
            },
        ],
    },
};

module.exports = nextConfig;
