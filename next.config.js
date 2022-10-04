/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ["melmagazine.com", "localhost"],
    },
};

module.exports = nextConfig;
