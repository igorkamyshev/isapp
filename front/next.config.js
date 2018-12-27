const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')

module.exports = withPlugins([
  [withTypescript],
  [withCSS, {
    cssModules: true,
  }],
], {
  distDir: '../dist/front',
})
