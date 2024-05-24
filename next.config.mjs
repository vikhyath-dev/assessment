/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/about',
            destination: 'https://example.com',
            permanent: true,
          }
        ]
    },
};

export default nextConfig;


