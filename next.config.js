/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'https://lcw.nyc3.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/production/currencies/64/**'
            }
        ]
    }
}

module.exports = nextConfig
