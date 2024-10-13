/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          // Rewriting /robots.txt to the API route
          {
            source: '/robots.txt',
            destination: '/api/robots',
          },
          // Rewriting /sitemap.xml to the API route
          {
            source: '/sitemap.xml',
            destination: '/api/sitemap',
          },
        ];
      },
};

export default nextConfig;
