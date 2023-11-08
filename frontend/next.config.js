/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
    output: "standalone",
    env: {
        NEXT_TELEMETRY_DISABLED: "1",
    },
};

module.exports = nextConfig;
