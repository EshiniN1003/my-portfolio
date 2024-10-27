const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['media.dev.to', 'avatars.githubusercontent.com', 'github-readme-stats.vercel.app', 'github-readme-streak-stats.herokuapp.com', 'stardev.io', 'github-profile-summary-cards.vercel.app', 'github-profile-trophy.vercel.app'],
    dangerouslyAllowSVG: true,
  }
}
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig


