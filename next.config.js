const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/my-portfolio', // Keep your basePath
  assetPrefix: '/my-portfolio/', // Use this if you have static assets
  trailingSlash: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },

  images: {
    domains: [
      'media.dev.to', 
      'avatars.githubusercontent.com', 
      'github-readme-stats.vercel.app', 
      'github-readme-streak-stats.herokuapp.com', 
      'stardev.io', 
      'github-profile-summary-cards.vercel.app', 
      'github-profile-trophy.vercel.app'
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
