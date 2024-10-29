const path = require('path');

const nextConfig = {
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  

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

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname); // Adds support for '@/'
    return config;
  }
};

module.exports = nextConfig;
