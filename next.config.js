const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/out', // Replace with your actual repository name if needed
  assetPrefix: '/out', // Set asset prefix for assets
  trailingSlash: true, // Optional for directory structure
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')], // Adjusted to point to the correct folder
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
