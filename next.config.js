/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    // trailingSlash: true, //html path directory ke convert folder kore
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
