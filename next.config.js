/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: { ssr: true, cssProp: true } },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;