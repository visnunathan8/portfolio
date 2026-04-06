/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Set this to your GitHub repo name when deploying as a project page
// e.g. "portfolio" → site served at https://<user>.github.io/portfolio
const repo = process.env.NEXT_PUBLIC_BASE_PATH || '';

module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? repo : '',
  assetPrefix: isProd ? repo : '',
  trailingSlash: true,
};
