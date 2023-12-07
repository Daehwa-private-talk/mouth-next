/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
