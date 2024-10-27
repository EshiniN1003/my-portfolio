const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio', // Replace 'my-portfolio' with your actual repository name
  assetPrefix: '/my-portfolio',
  trailingSlash: true, // Optional for directory structure
  
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
